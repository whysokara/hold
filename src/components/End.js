import React from 'react';

function End({ winner, onRestart }) {
  return (
    <div className="end">
      <h2>Game Over!</h2>
      <p>The winner is:</p>
      <div className="winner">{winner}</div>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default End;