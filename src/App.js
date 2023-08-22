import './App.css';
import GameList from './components/GameList';

function App() {
  return (
    <div className="App">
      <h1>Unredeemed Games</h1>
        <main>
            <GameList />
        </main>
    </div>
  );
}

export default App;
