import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
    return (
        <header className="App-header">
            <div className="header-text-container">
                <h1>Unredeemed Games</h1>
            </div>
            <div className="search-bar-container">
                <SearchBar
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </header>
    );
};

export default Header;