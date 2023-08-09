import { React, useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div style={{ margin: "100px" }}>
      <h1>Search whatever you need!</h1>
      <input
        type="text"
        placeholder="Search.."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
