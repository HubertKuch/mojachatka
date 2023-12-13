
'use client'

import React from "react";

const SearchBox = ({ filters }) => {
  return (
    <div className="search_area">
      <input
        type="text"
        className="form-control"
        placeholder="Czego szukasz?"
        onChange={(e) => filters.search = e.target.value}
      />
      <label>
        <span className="flaticon-search" />
      </label>
    </div>
  );
};

export default SearchBox;
