import React, { useState, useEffect } from 'react';

function Game({ players, onEnd }) {
  const [activePlayers, setActivePlayers] = useState(players);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handlePlayerRelease = (index) => {
    const newActivePlayers = activePlayers.map((player, i) => 
      i === index ? { ...player, isPlaying: false } : player
    );
    setActivePlayers(newActivePlayers);

    const remainingPlayers = newActivePlayers.filter(player => player.isPlaying);
    if (remainingPlayers.length === 1) {
      onEnd(remainingPlayers[0].name);
    }
  };

  return (
    <div className="game">
      <h2>Hold the Button!</h2>
      <div className="timer">{time.toFixed(1)}s</div>
      <div className="player-buttons">
        {activePlayers.map((player, index) => (
          player.isPlaying && (
            <button
              key={index}
              className="hold-button"
              onMouseUp={() => handlePlayerRelease(index)}
              onTouchEnd={() => handlePlayerRelease(index)}
            >
              {player.name}
            </button>
          )
        ))}
      </div>
    </div>
  );
}

export default Game;