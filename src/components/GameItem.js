import React from 'react';
import './GameItem.css';

const GameItem = ({ href, imgSrc, altText, gameTitle }) => {
    const isUrl = imgSrc.startsWith('http');

    return (
        <div className="game-item-container">
            <div className="game-item">
                <div className="game-item-content">
                    <a
                        href={href}
                        target="_blank"
                        className="game-link"
                        rel="noreferrer"
                    >
                        <img
                            src={isUrl ? imgSrc : process.env.PUBLIC_URL + '/thumbnails/' + imgSrc}
                            style={{ maxWidth: '100%', objectFit: 'contain' }}
                            alt={altText}
                        />
                        <p>{gameTitle}</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GameItem;