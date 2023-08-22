import React from 'react';
import './GameItem.css';

const GameItem = ({ href, imgSrc, altText, gameTitle }) => {
    const isUrl = imgSrc.startsWith('http');

    return (
        <div className="game-item">
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
                <p className="game-title">{gameTitle}</p>
            </a>
        </div>
    );
};

export default GameItem;