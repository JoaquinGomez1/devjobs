import React, { useState, useEffect } from "react";

export const JobsProvider = React.createContext();

export default function JobsContext(props) {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequest = async () => {
    const reqHeader = {
      type: "GET",
      contentType: "application/json",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      dataType: "json",
    };
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = proxy + "https://jobs.github.com/positions.json?page=1";
    const req = await fetch(url, reqHeader);
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
