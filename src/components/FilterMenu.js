import React, { useState } from 'react';
import './FilterMenu.css';
import {
    genres,
    categories,
    supportedLanguages
} from './gameData';
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider';

const FilterMenu = ({
                        onFilterChange,
                        selectedCategory,
                        selectedGenre,
                        selectedLanguage,
                        selectedMetacriticRange,
                        selectedPriceRange
                    }) => {
    const [metacriticRange, setMetacriticRange] = useState(selectedMetacriticRange || [0, 100]);
    const [priceRange, setPriceRange] = useState(selectedPriceRange || [0, 100]);
    const [selectedCategoryValue, setSelectedCategoryValue] = useState(selectedCategory || '');
    const [selectedGenreValue, setSelectedGenreValue] = useState(selectedGenre || '');
    const [selectedLanguageValue, setSelectedLanguageValue] = useState(selectedLanguage || '');

    const handlePriceChange = (values) => {
        setPriceRange(values);
        onFilterChange('priceRange', values);
    };

    const handleMetacriticChange = (values) => {
        setMetacriticRange(values);
        onFilterChange('metacriticRange', values);
    };

    const handleCategoryChange = (value) => {
        setSelectedCategoryValue(value);
        onFilterChange('category', value);
    };

    const handleGenreChange = (value) => {
        setSelectedGenreValue(value);
        onFilterChange('genre', value);
    };

    const handleLanguageChange = (value) => {
        setSelectedLanguageValue(value);
        onFilterChange('language', value);
    };

    return (
        <div className="filter-menu">
            <h2>Filter Options</h2>
            {/* Other filter sections and controls */}
            <div className="filter-section">
                <h3>Category</h3>
                <select
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    value={selectedCategoryValue}
                >
                    <option value="">All</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-section">
                <h3>Genre</h3>
                <select
                    onChange={(e) => handleGenreChange(e.target.value)}
                    value={selectedGenreValue}
                >
                    <option value="">All</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-section">
                <h3>Supported Language</h3>
                <select
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    value={selectedLanguageValue}
                >
                    <option value="">All</option>
                    {supportedLanguages.map((language) => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))}
                </select>
            </div>
            <div className="filter-section">
                <h3>Metacritic Score Range</h3>
                <div className="slider">
                    <span>Min Metacritic: {metacriticRange[0]}</span>
                    <span>Max Metacritic: {metacriticRange[1]}</span>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={metacriticRange}
                        onChange={handleMetacriticChange}
                        range
                    />
                </div>
            </div>
            <div className="filter-section">
                <h3>Price Range</h3>
                <div className="slider">
                    <span>Min Price: {priceRange[0]}€</span>
                    <span>Max Price: {priceRange[1]}€</span>
                    <Slider
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={priceRange}
                        onChange={handlePriceChange}
                        range
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterMenu;