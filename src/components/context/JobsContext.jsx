import React, { useState, useEffect } from "react";

export const JobsProvider = React.createContext();

export default function JobsContext(props) {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequest = async () => {
    const reqHeader = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://jobs.github.com/positions.json?page=1";
    const req = await fetch(url, reqHeader);
    const res = await req.json();
    console.log(req);
    console.log(res);
    setJobsList(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <JobsProvider.Provider
      {...props}
      value={{ jobsList, setJobsList, loading, setLoading }}
    />
  );
}
