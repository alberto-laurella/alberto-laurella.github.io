import React, { useState } from 'react';
import './App.css';
import GameList from './components/GameList';
import Header from './components/Header';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedMetacriticRange, setSelectedMetacriticRange] = useState([0, 100]); // Default range
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100]); // Default range
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const onFilterChange = (type, value) => {
        if (type === 'genre') setSelectedGenre(value);
        else if (type === 'category') setSelectedCategory(value);
        else if (type === 'language') setSelectedLanguage(value);
        else if (type === 'priceRange') setSelectedPriceRange(value);
        else if (type === 'metacriticRange') setSelectedMetacriticRange(value);
    }

    return (
        <div className="App">
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onFilterChange={onFilterChange}
                selectedPriceRange={selectedPriceRange}
                selectedMetacriticRange={selectedMetacriticRange}
                selectedGenre={selectedGenre}
                selectedCategory={selectedCategory}
                selectedLanguage={selectedLanguage}
            />
            <main>
                <GameList
                    searchQuery={searchQuery}
                    selectedGenre={selectedGenre}
                    selectedMetacriticRange={selectedMetacriticRange}
                    selectedCategory={selectedCategory}
                    selectedPriceRange={selectedPriceRange}
                    selectedLanguage={selectedLanguage}
                />
            </main>
        </div>
    );
}

export default App;
