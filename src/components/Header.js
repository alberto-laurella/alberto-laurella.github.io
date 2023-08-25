import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';
import SteamApiButton from "./SteamApiButton";

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
                <SteamApiButton/>
            </div>
        </header>
    );
};

export default Header;