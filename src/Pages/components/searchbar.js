import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../../Store/middleware/weatherSearchAsync";
import "../../../assets/SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getWeather(search));
    setSearch("");
  };

  return (
    <>
      <div className="logo">
        <h1>What to Wear</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="search"
          placeholder="Enter your city or zipcode"
          onChange={handleOnChange}
          value={search}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SearchBar;
