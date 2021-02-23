import React, { useState, useEffect } from "react";
import headers from "../../headers";

export const JobsProvider = React.createContext();

export default function JobsContext(props) {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequest = async () => {
    const url = "/positions.json?page=1";
    const reqHeaders = headers;
    reqHeaders.method = "GET";

    const req = await fetch(url, reqHeaders);
    console.log(req);
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
