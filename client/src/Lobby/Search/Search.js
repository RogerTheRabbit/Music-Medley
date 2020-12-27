import React from "react";
import "./search.css";

export default function Search() {
    const search = (query) => {
        console.log(`Searching for "${query}"`);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                label="Search"
                placeholder="Search"
                className="search-input z-depth-1-half"
                onChange={(e) => search(e.target.value)}
            />
        </div>
    );
}
