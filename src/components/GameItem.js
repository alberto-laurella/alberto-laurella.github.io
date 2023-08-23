import React from 'react';
import './GameItem.css';

const GameItem = ({ href, imgSrc, altText, gameTitle, isMatching }) => {
    const isUrl = imgSrc.startsWith('http');
    const opacity = isMatching ? 1 : 0; // Opacity value for matching and non-matching items

    return (
        <div
            className={`game-item ${isMatching ? 'matching' : 'not-matching'}`}
            style={{ opacity }} // Set the opacity directly based on the isMatching value
        >
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="game-link"
            >
                <div className="game-image-container">
                    <img
                        src={isUrl ? imgSrc : process.env.PUBLIC_URL + '/thumbnails/' + imgSrc}
                        style={{ maxWidth: '100%', objectFit: 'contain' }}
                        alt={altText}
                    />
                </div>
                <p className="game-title">
                    {gameTitle}
                </p>
            </a>
        </div>
    );
};

export default GameItem;