import React, { useState } from 'react';

function PlayerInput({ onSubmit }) {
  const [players, setPlayers] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (players.every(player => player.trim() !== '')) {
      onSubmit(players);
    } else {
      alert('Please enter names for all players');
    }
  };

  return (
    <div className="player-input">
      <h2>Enter Player Names</h2>
      <form onSubmit={handleSubmit}>
        {players.map((player, index) => (
          <input
            key={index}
            type="text"
            value={player}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Player ${index + 1} Name`}
            required
          />
        ))}
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

export default PlayerInput;