import GameItem from './GameItem';
import './GameList.css';
import gameData from './gameData'


const GameList = ({searchQuery}) => {
    console.log(searchQuery)
    let customId = Math.max(...gameData.map(game => game.appId === undefined ? 0 : game.appId)) // this way I get certainly unique custom keys

    const filteredGameData = gameData
        .filter((game) =>
            game.gameTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            game.altText.toLowerCase().includes(searchQuery.toLowerCase())
        )
    return (
        <div className="game-list">
            {filteredGameData.map((game) => (
                <GameItem
                    key={game.appId === undefined ? customId += 1 : game.appId}
                    href={game.storePageUrl}
                    imgSrc={game.thumbnail}
                    altText={game.altText}
                    gameTitle={game.gameTitle}
                    isMatching={
                        game.gameTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        game.altText.toLowerCase().includes(searchQuery.toLowerCase())
                    }
                />
            ))}
        </div>
    );
};

export default GameList;