import React from "react";

export default function SearchResult({ song }) {
    return (
        <div className="individual-search-result-container">
            <div className="search-result">
                {song}
            </div>
            <div className="add-song">
                <i class="fas fa-plus"></i>
            </div>
        </div>
     );
}
