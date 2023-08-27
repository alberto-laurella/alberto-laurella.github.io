import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Header.css';
import SteamApiButton from './SteamApiButton';
import FilterMenuToggle from "./FilterMenuToggle";
import FilterMenu from './FilterMenu';
import { debounce } from 'lodash';

const Header = ({
                    setSearchQuery,
                    onFilterChange,
                    selectedPriceRange,
                    selectedMetacriticRange,
                    selectedGenre,
                    selectedLanguage,
                    selectedCategory
                }) =>
{
    const debouncedSetSearchQuery = debounce((value) => {
        setSearchQuery(value);
    }, 100); // Adjust the debounce delay as needed
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const onFilterToggle = () => {
        setFilterMenuOpen(!filterMenuOpen);
    };

    return (
        <header className="App-header">
            <div className="header-text-container">
                <h1>Unredeemed Games</h1>
            </div>
            <div className="search-bar-container">
                <SearchBar
                    className="search-bar"
                    onChange={(e) => debouncedSetSearchQuery(e.target.value)}
                />
                <SteamApiButton />
                <FilterMenuToggle onToggle={onFilterToggle} />
                {filterMenuOpen && (
                    <FilterMenu
                        onFilterChange={onFilterChange}
                        selectedPriceRange={selectedPriceRange}
                        selectedMetacriticRange={selectedMetacriticRange}
                        selectedGenre={selectedGenre}
                        selectedCategory={selectedCategory}
                        selectedLanguage={selectedLanguage}
                    />
                )}
            </div>
        </header>
    );
};

export default Header;