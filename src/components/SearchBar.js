import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="buttons">
        <button className="btn add-data">+ ADD DATA</button>
        <button className="btn data-training">DATA TRAINING STATUS</button>
        <button className="btn ground-truths">GROUND TRUTHS</button>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Search" />
        <select>
          <option value="3">Results 3</option>
          <option value="5">Results 5</option>
          <option value="10">Results 10</option>
        </select>
        <button className="btn search-btn">SEARCH</button>
      </div>
    </div>
  );
};

export default SearchBar;
