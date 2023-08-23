import React, { useState } from 'react';
import './App.css';
import GameList from './components/GameList';
import Header from './components/Header';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="App">
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <main>
                <GameList searchQuery={searchQuery} />
            </main>
        </div>
    );
}

export default App;
