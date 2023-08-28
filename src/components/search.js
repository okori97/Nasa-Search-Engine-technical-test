import React from "react";
import "../styles/search.css";
import { useState } from "react";
import getImages from "../requests/getImages";

export default function Search({ setSearchResults, setisFirstSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setisFirstSearch(false);
    setSearchResults(await getImages(value));
  };
  return (
    <>
      <form className="form">
        <input
          className="form__searchField"
          placeholder="Search image.."
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        ></input>
        <button
          className="form__button"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
    </>
  );
}
