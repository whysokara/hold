import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Simulating fetching leaderboard data
    const fetchLeaderboardData = () => {
      const mockData = [
        { rank: 1, name: 'Player 1', wins: 5 },
        { rank: 2, name: 'Player 2', wins: 4 },
        { rank: 3, name: 'Player 3', wins: 3 },
        { rank: 4, name: 'Player 4', wins: 2 },
        { rank: 5, name: 'Player 5', wins: 1 },
      ];
      setLeaderboardData(mockData);
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div className="leaderboard-container">
      <button className="toggle-leaderboard" onClick={() => setShowLeaderboard(!showLeaderboard)}>
        {showLeaderboard ? 'Hide Leaderboard' : 'Show Leaderboard'}
      </button>
      {showLeaderboard && (
        <div className="leaderboard">
          <h3>Leaderboard</h3>
          {leaderboardData.length > 0 ? (
            <ul>
              {leaderboardData.map((entry) => (
                <li key={entry.rank} className={`rank-${entry.rank}`}>
                  <span className="rank">{entry.rank}</span>
                  <span className="name">{entry.name}</span>
                  <span className="wins">{entry.wins} wins</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No leaderboard data available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Leaderboard;