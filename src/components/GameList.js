import React from 'react';
import GameItem from './GameItem';
import './GameList.css';
import gameData from './gameData'

const GameList = () => {
        let customId = Math.max(...gameData.map(game => game.appId === undefined ? 0 : game.appId)) // this way I get certainly unique custom keys

        return (
            <div className="game-list">
                    {gameData.map((game) => (
                        <GameItem
                            key={game.appId === undefined ? customId+=1 : game.appId}     //I use the steamAppId as a unique key and a customId should the app not be in steam
                            href={game.storePageUrl}
                            imgSrc={game.thumbnail}
                            altText={game.altText}
                            gameTitle={game.gameTitle}
                        />
                    ))}
            </div>
        );
};

export default GameList;