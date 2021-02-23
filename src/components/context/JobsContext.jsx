import React, { useState, useEffect } from "react";
import headers from "../../headers";

export const JobsProvider = React.createContext();

export default function JobsContext(props) {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequest = async () => {
    const url = "https://jobs.github.com/positions.json?page=1";
    const reqHeaders = headers;
    reqHeaders.method = "GET";
    console.log(reqHeaders);
    const req = await fetch(url, reqHeaders);
    const res = await req.json();
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
