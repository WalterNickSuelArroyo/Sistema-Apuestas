import React from 'react';
import './MatchCard.css';
const matches = [
    { country1: '🇧🇷', country2: '🇦🇷', time: '2024-06-04 19:00', location: 'São Paulo' },
    { country1: '🇪🇸', country2: '🇩🇪', time: '2024-06-04 21:00', location: 'Madrid' },
    { country1: '🇮🇹', country2: '🇫🇷', time: '2024-06-05 18:00', location: 'Rome' },
    { country1: '🇳🇱', country2: '🇧🇪', time: '2024-06-05 20:00', location: 'Amsterdam' },
    { country1: '🇵🇹', country2: '🇬🇧', time: '2024-06-06 19:30', location: 'Lisbon' },
    { country1: '🇷🇺', country2: '🇸🇪', time: '2024-06-06 21:30', location: 'Moscow' },
    { country1: '🇲🇽', country2: '🇺🇸', time: '2024-06-07 18:00', location: 'Mexico City' },
    { country1: '🇨🇴', country2: '🇧🇷', time: '2024-06-07 20:00', location: 'Bogota' },
    { country1: '🇦🇷', country2: '🇨🇱', time: '2024-06-08 19:00', location: 'Buenos Aires' },
    { country1: '🇩🇪', country2: '🇸🇪', time: '2024-06-08 21:00', location: 'Berlin' },
    { country1: '🇮🇹', country2: '🇪🇸', time: '2024-06-09 18:00', location: 'Milan' },
    { country1: '🇫🇷', country2: '🇵🇹', time: '2024-06-09 20:00', location: 'Paris' },
    { country1: '🇳🇱', country2: '🇬🇧', time: '2024-06-10 19:00', location: 'Rotterdam' },
    { country1: '🇺🇸', country2: '🇨🇦', time: '2024-06-10 21:00', location: 'New York' },
    { country1: '🇧🇪', country2: '🇷🇺', time: '2024-06-11 18:00', location: 'Brussels' },
    { country1: '🇲🇽', country2: '🇨🇴', time: '2024-06-11 20:00', location: 'Monterrey' }
  ];
  function MatchCard({ country1, country2, time, location }) {
    return (
      <div className="match-card">
        <div className="match-info">
          <span className="flag">{country1}</span>
          <span> - </span>
          <span className="flag">{country2}</span>
        </div>
        <div className="match-time">{time}</div>
        <div className="match-location">{location}</div>
      </div>
    );
  }
  function MatchGrid() {
    return (
      <div className="match-grid">
        {matches.map((match, index) => (
          <MatchCard
            key={index}
            country1={match.country1}
            country2={match.country2}
            time={match.time}
            location={match.location}
          />
        ))}
      </div>
    );
  }
  export default MatchGrid;