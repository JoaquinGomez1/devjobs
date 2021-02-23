import React, { useContext, useState } from "react";
import SearchBar from "../Ui/SearchBar";
import Card from "../Ui/Card";
import Loader from "../Ui/Loader";
import { useHistory } from "react-router-dom";

import { JobsProvider } from "../context/JobsContext";
import { SelectedJobProvider } from "../context/SelectedJob";

import { JobsContainer, Button } from "../../style/StyledComponents";

import headers from "../../headers";

export default function Landing() {
  // Context
  const { jobsList, setJobsList, loading, setLoading } = useContext(
    JobsProvider
  );
  const { setSelectedJob } = useContext(SelectedJobProvider);

  // Local State
  const [page, setPage] = useState(1);
  const history = useHistory();

  const fetchNextPage = async () => {
    setLoading(true);
    const url = `https://jobs.github.com/positions.json?page=${page + 1}`;
    const req = await fetch(url, headers);

    const res = await req.json();
    setJobsList([...jobsList].concat(res));
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <>
      <SearchBar />
      <JobsContainer>
        {jobsList.length >= 1 &&
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
      {loading && <Loader />}

      {!loading && (
        <div>
          <Button
            onClick={fetchNextPage}
            style={{ margin: "20px auto", maxWidth: "max-content" }}
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
}
