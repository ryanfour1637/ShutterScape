import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "../Search/SearchBar.css"

const SearchBar = ({ setResults, setIsResultsOpen }) => {
  const [search, setSearch] = useState("");

  const fetchData = (value) => {
    fetch("/api/posts/all")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((post) => {
          return (
            post &&
            post.title &&
            post.title.toLowerCase().includes(value)
          );
        });
        setResults(results);
        setIsResultsOpen(true);
      });
  };

  const handleChange = (value) => {
    setSearch(value);
    fetchData(value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon" />
      <input className="search-input" placeholder='Type to search ...' value={search} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;
