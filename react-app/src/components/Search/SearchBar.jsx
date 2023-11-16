import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the search input
      setSearch("")
    };

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon" />
      <input className="search-input" placeholder='Type to search ...' value={search} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;
