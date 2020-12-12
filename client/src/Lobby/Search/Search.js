import React from "react";

export default function Search() {
    const search = (query) => {
        console.log(`Searching for "${query}"`);
    };

    return (
        <div>
            <input
                type="text"
                label="Search"
                placeholder="Search"
                className="z-depth-1-half"
                onChange={(e) => search(e.target.value)}
            />
        </div>
    );
}
