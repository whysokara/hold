import React, { useState } from 'react';
import './App.css';
import PlayerInput from './components/PlayerInput';
import Game from './components/Game';
import End from './components/End';
import Leaderboard from './components/Leaderboard';

function App() {
  const [gameState, setGameState] = useState('playerInput');
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState(null);

  const startGame = (playerNames) => {
    setPlayers(playerNames.map(name => ({ name, isPlaying: true, isReady: false })));
    setGameState('preparation');
  };

  const beginGameplay = () => {
    setGameState('game');
  };

  const endGame = (winnerName) => {
    setWinner(winnerName);
    setGameState('end');
  };

  return (
    <div className="page-container">
      {gameState === 'playerInput' && <PlayerInput onSubmit={startGame} />}
      {(gameState === 'preparation' || gameState === 'game') && 
        <Game 
          players={players} 
          onEnd={endGame} 
          gameState={gameState}
          onAllPlayersReady={beginGameplay}
        />
      }
      {gameState === 'end' && <End winner={winner} onRestart={() => setGameState('playerInput')} />}
      <Leaderboard />
      <footer className="footer">
        <a href="https://github.com/yourusername/hold-the-button-game" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;