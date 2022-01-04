import React, { useState, useRef } from "react";
import dotenv from "dotenv";
import "./search.css";
import SearchResult from "./SearchResults";

dotenv.config();

const MAXRESULTS = 5;
const TOKEN = process.env.REACT_APP_SEARCH_TOKEN;
const TYPE = "video";

export default function Search() {
  const [songs, setSongs] = useState([]);
  const resultsContainer = useRef(null);

  const search = (event) => {
    if (event.keyCode === 13) {
      // if enter is pressed
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAXRESULTS}&q=${event.target.value}&key=${TOKEN}&type=${TYPE}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSongs(data.items);
          resultsContainer.current.focus();
        });
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          label="Search"
          placeholder="Search"
          className="search-input z-depth-1-half"
          onKeyDown={search}
        />
      </div>
      {songs.length !== 0 && (
        <div
          className="search-results-container z-depth-1"
          tabIndex="0"
          onBlur={(e) => {
            e.currentTarget === e.target && setSongs([]);
          }}
          ref={resultsContainer}
        >
          {songs.map((song, idx) => {
            return <SearchResult key={idx} song={song} />;
          })}
        </div>
      )}
    </>
  );
}
