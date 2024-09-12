import React from 'react';

function Intro({ onStart }) {
  return (
    <div className="intro">
      <h1>Hold the Button Game</h1>
      <div className="intro-text">
        <p>Welcome to the Hold the Button Game! Test your patience and timing skills.</p>
        <p>How long can you hold the button? Compete with others and climb the leaderboard!</p>
      </div>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}

export default Intro;