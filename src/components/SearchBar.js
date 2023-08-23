import React from 'react';
import './SearchBar.css'; // Import the CSS file for SearchBar

const SearchBar = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search by game title or alt text"
            value={value}
            onChange={onChange}
            className="search-bar"
        />
    );
};

export default SearchBar;