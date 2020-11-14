import React, { useContext, useState, useEffect } from "react";
import SearchBar from "../Ui/SearchBar";
import Card from "../Ui/Card";
import Loader from "../Ui/Loader";
import { useHistory } from "react-router-dom";

import { JobsProvider } from "../context/JobsContext";
import { SelectedJobProvider } from "../context/SelectedJob";

import { JobsContainer, Button } from "../../style/StyledComponents";

export default function Landing() {
  // Context
  const { jobsList, setJobsList, loading } = useContext(JobsProvider);
  const { setSelectedJob } = useContext(SelectedJobProvider);

  // Local State
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const history = useHistory();

  const fetchNextPage = async () => {
    setLoadingMore(true);
    const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${
      page + 1
    }`;
    const req = await fetch(url);
    const res = await req.json();
    setJobsList([...jobsList].concat(res));
    setLoadingMore(false);
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar />
      <JobsContainer>
        {!loading &&
          jobsList &&
          jobsList.map((job) => (
            <Card
              onClick={() => {
                setSelectedJob(job);
                history.push(`/jobs/${job.id}`);
              }}
              key={job.id}
              data={job}
            />
          ))}
      </JobsContainer>
      {loading && <Loader></Loader>}

      {!loading && (
        <div>
          {loading && <Loader />}
          <Button
            onClick={fetchNextPage}
            style={{ margin: "20px auto", maxWidth: "max-content" }}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
}
