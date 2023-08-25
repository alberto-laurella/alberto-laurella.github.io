import React, { useState } from 'react';
import config from '../config';
import './SteamApiButton.css';

const STEAM_API_KEY = config.steamApiKey; // Replace with your actual Steam API key
const SteamAPI = require('steamapi');
const steam = new SteamAPI(STEAM_API_KEY);

const SteamApiButton = ({ appId }) => {
    const [gameTitle, setGameTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = async () => {
        setIsLoading(true);
        try {
            steam.getUserSummary('76561198146931523').then(summary => {
                console.log(summary);
                setGameTitle(summary.nickname)
            })
        } catch (error) {
            console.error('Error fetching game title:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="steam-api-button">
            <button onClick={handleButtonClick} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Get Game Title from API'}
            </button>
            {gameTitle && <p>Game Title: {gameTitle}</p>}
        </div>
    );
};

export default SteamApiButton;