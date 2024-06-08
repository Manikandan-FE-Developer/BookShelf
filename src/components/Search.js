import React from "react";

export default function Search({ onSearch }) {
    const handleSearch = (event) => {
      onSearch(event.target.value);
    };

    return (
        <div className="Search">
            <input type="search" placeholder="Search by book name" onChange={handleSearch}/>
        </div>
    );
}