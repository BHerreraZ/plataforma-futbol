import { useState } from 'react';
import matches from '../data/matches.json';

const MatchSchedule = () => {
  const [selectedRound, setSelectedRound] = useState(5); // Default to round 5

  
  const selectedMatches = matches.rounds.find((round) => round.round === selectedRound).matches;

  // Divide los partidos en dos columnas
  const firstColumnMatches = selectedMatches.slice(0, 4);
  const secondColumnMatches = selectedMatches.slice(4, 8);

  return (
    <div className="container mx-auto p-4">
      <div className="hidden  xl:flex space-x-2 mb-4 overflow-x-auto justify-between">
        {matches.rounds.map((round) => (
          <button
            key={round.round}
            className={`px-1.5 py-2  border rounded ${
              selectedRound === round.round ? 'bg-gray-800 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedRound(round.round)}
          >
            {round.round}°
          </button>
        ))}
      </div>
      <div className="xl:hidden mb-4">
        <select
          className="px-4 py-2 border rounded bg-gray-200"
          value={selectedRound}
          onChange={(e) => setSelectedRound(Number(e.target.value))}
        >
          {matches.rounds.map((round) => (
            <option key={round.round} value={round.round}>
              {round.round}°
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Fecha {selectedRound}</h2>
        <div className="grid grid-cols-2 gap-x-8">
          <div>
            {firstColumnMatches.map((match, index) => (
              <div key={index} className="flex justify-between bg-gray-100 p-2 rounded mb-2">
                <span>{match.home}</span>
                <span>vs</span>
                <span>{match.away}</span>
              </div>
            ))}
          </div>
          <div>
            {secondColumnMatches.map((match, index) => (
              <div key={index} className="flex justify-between bg-gray-100 p-2 rounded mb-2">
                <span>{match.home}</span>
                <span>vs</span>
                <span>{match.away}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchSchedule;