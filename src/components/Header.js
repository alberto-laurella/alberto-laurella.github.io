import SearchBar from './SearchBar';
import './Header.css';
import SteamApiButton from './SteamApiButton';
import { debounce } from 'lodash'; // Import debounce from Lodash

const Header = ({ setSearchQuery }) => {
    const debouncedSetSearchQuery = debounce((value) => {
        setSearchQuery(value);
    }, 100); // Adjust the debounce delay as needed

    return (
        <header className="App-header">
            <div className="header-text-container">
                <h1>Unredeemed Games</h1>
            </div>
            <div className="search-bar-container">
                <SearchBar
                    className="search-bar"
                    onChange={(e) => debouncedSetSearchQuery(e.target.value)}
                />
                <SteamApiButton />
            </div>
        </header>
    );
};

export default Header;