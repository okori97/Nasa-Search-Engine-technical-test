import React from "react";
import "../styles/searchResults.css";

export default function SearchResults({ searchResults, isFirstSearch }) {
  return (
    <>
      {searchResults && searchResults.length > 0 && (
        <>
          <p>Search Results</p>
          <div className="searchResults--list">
            {searchResults.map((searchResult) => (
              <div className="searchResults--item">
                <img
                  className="searchResults--image"
                  src={searchResult}
                  alt="moon"
                ></img>
              </div>
            ))}
          </div>
        </>
      )}
      {!isFirstSearch && searchResults.length < 1 && <p>No Results found</p>}
    </>
  );
}
