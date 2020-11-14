import React, { useContext, useState } from "react";
import {
  SearchContainer,
  Input,
  InputContainer,
  Button,
} from "../../style/StyledComponents";
import { JobsProvider } from "../context/JobsContext";

export default function SearchBar() {
  const { setJobsList, setLoading } = useContext(JobsProvider);
  const [searchValues, setSearchValues] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setSearchValues({
      ...searchValues,
      [name]: name === "full_time" ? checked : value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (Object.keys(searchValues).length <= 0) return null;

    const queryString = Object.keys(searchValues)
      .map((key) => key + "=" + searchValues[key])
      .join("&")
      .toLowerCase();

    setLoading(true);
    const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?${queryString}`;
    const req = await fetch(url);
    const res = await req.json();
    setJobsList(res);
    setLoading(false);
  };

  return (
    <SearchContainer onChange={handleChange}>
      <InputContainer>
        <i className='fas fa-search'></i>
        <Input
          name='description'
          type='text'
          placeholder='Filter by title, companies, expertise'
        />
      </InputContainer>
      <InputContainer
        style={{
          borderWidth: "0 1px 0 1px",
          borderColor: "rgba(0,0,0,.6)",
          borderStyle: "solid",
        }}>
        <i className='fas fa-location-arrow' style={{ margin: "0 20px" }} />
        <Input type='text' name='location' placeholder='Filter by location' />
      </InputContainer>
      <InputContainer>
        <i style={{ margin: "0 20px" }} className='fas fa-search'></i>
        <Input
          style={{ padding: "0" }}
          name='full_time'
          type='checkbox'
          placeholder='Filter by title, companies, expertise'
        />
        <label htmlFor='fulltime' style={{ fontWeight: 600 }}>
          Full Time Only
        </label>
        <Button onClick={handleSearch}>Search</Button>
      </InputContainer>
    </SearchContainer>
  );
}
