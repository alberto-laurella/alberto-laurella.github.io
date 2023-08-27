import GameItem from './GameItem';
import './GameList.css';
import {
    gameData,
    steamApiData
} from './gameData'


const GameList = ({
                      searchQuery,
                      selectedGenre,
                      selectedMetacriticRange,
                      selectedCategory,
                      selectedPriceRange,
                      selectedLanguage
                  }) => {
    let customId = Math.max(...gameData.map(game => game.appId === undefined ? 0 : game.appId)) // this way I get certainly unique custom keys
    const isDefault = (selectedRange) => {
        if (!Array.isArray(selectedRange) || selectedRange?.length !== 2) {
            return false
        }
        return selectedRange[0] === 0 && selectedRange[1] === 100
    }

    const filteredGameData = gameData.filter((game) => {
        const matchesSearch = (
            game.gameTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            game.altText.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (game.appId === undefined) {
            return matchesSearch && !selectedGenre && isDefault(selectedMetacriticRange) && !selectedCategory && isDefault(selectedPriceRange) && !selectedLanguage
        }

        const matchesGenre = !selectedGenre || steamApiData[game.appId].genres.includes(selectedGenre);
        const matchesLanguage = !selectedLanguage || steamApiData[game.appId].supported_languages.includes(selectedLanguage);
        let matchesMetacriticScore
        if (steamApiData[game.appId].metacriticScore === undefined) {
            matchesMetacriticScore = isDefault(selectedMetacriticRange)
        } else {
            matchesMetacriticScore = !selectedMetacriticRange || (
                parseFloat(steamApiData[game.appId].metacriticScore) >= selectedMetacriticRange[0] &&
                parseFloat(steamApiData[game.appId].metacriticScore) <= selectedMetacriticRange[1]
            );
        }
        let matchesCategory
        if (steamApiData[game.appId].metacriticScore === undefined) {
            matchesCategory = !selectedCategory
        } else {
            matchesCategory = !selectedCategory || steamApiData[game.appId]?.categories.includes(selectedCategory);
        }
        let matchesPrice
        if (steamApiData[game.appId].metacriticScore === undefined) {
            matchesPrice = isDefault(selectedPriceRange)
        } else {
            matchesPrice = !selectedPriceRange || (
                parseFloat(steamApiData[game.appId].price_overview) >= selectedPriceRange[0] &&
                parseFloat(steamApiData[game.appId]?.price_overview) <= selectedPriceRange[1]
            );
        }

        return matchesSearch && matchesGenre && matchesMetacriticScore && matchesCategory && matchesPrice && matchesLanguage;
    })
    return (
        <div className="game-list">
            {filteredGameData.map((game) => (
                <GameItem
                    key={game.appId === undefined ? customId += 1 : game.appId} // Use a fallback ID if appId is undefined
                    href={game.storePageUrl}
                    imgSrc={game.thumbnail}
                    altText={game.altText}
                    gameTitle={game.gameTitle}
                    isMatching={filteredGameData.includes(game)}
                />
            ))}
        </div>
    );
};

export default GameList;