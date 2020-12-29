import React from "react";
import dotenv from "dotenv";

dotenv.config();

const IP = process.env.REACT_APP_SEARCH_TOKEN;

export default function Search() {
    const search = (query) => {
        if (query.keyCode === 13){  // if enter is pressed
            const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+ query + "&key=" + IP;
        
            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data));
        }
    };
    
    return (
        <div>
            <input
                type="text"
                label="Search"
                placeholder="Search"
                className="search-input z-depth-1-half"
                onKeyDown={search}
            />
        </div>
    );
}

