import React from "react";
import SearchBarStyle from "./styles";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchBar() {
  const [searches, setSearches] = useState("");
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchBarStyle>
      <div className="search-bar-bwii">
        <input
          type="search"
          placeholder="Rechercher un bien ou un client"
          name=""
          id=""
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            setSearches(searchValue);
          }}
        >
          <BiSearchAlt />
        </button>
      </div>
    </SearchBarStyle>
  );
}
