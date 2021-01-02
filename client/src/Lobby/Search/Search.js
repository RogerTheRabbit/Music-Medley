import React, {useState} from "react";
import dotenv from "dotenv";
import "./search.css";
import SearchResult from "./SearchResults";

dotenv.config();

const MAXRESULTS = 5 ;
const TOKEN = process.env.REACT_APP_SEARCH_TOKEN;

export default function Search() {
    const [songs, setSongs] = useState([]);
   
    const search = (event) => {
        if (event.keyCode === 13){  // if enter is pressed
            const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=" + MAXRESULTS + "&q=" + event.target.value + "&key=" + TOKEN;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setSongs(data.items); 
                    console.log(data)
                })
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
            <div className="search-results-container z-depth-1" >
                    {songs.map((song, idx) => {
                        return <SearchResult key={idx} song={song.snippet}/>;
                    })}
            </div>
        </>
    );
}

