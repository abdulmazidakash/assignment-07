
import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard';
import SelectedPlayerCard from './SelectedPlayerCard';
import players from '../../data/players.json';
import { useState } from 'react';

const MainSection = ({ choosePlayer, selectedPlayers, removePlayer }) => {
  // Toggle state to control which section to display
  const [showAvailable, setShowAvailable] = useState(true);

  return (
    <div className="w-11/12 mx-auto mt-8 mb-72">

      <div className="flex items-center justify-between mb-8">
        {/* Conditionally render heading text based on showAvailable */}
        <h2 className="text-3xl font-bold">
          {showAvailable ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}
        </h2>
        
        <div className="join">
          <button 
            className={`btn ${showAvailable ? 'bg-[#E7FE29]' : ''} rounded-r`} 
            onClick={() => setShowAvailable(true)}
          >
            Available
          </button>
          <button 
            className={`btn ${!showAvailable ? 'bg-[#E7FE29]' : ''} rounded-l`} 
            onClick={() => setShowAvailable(false)}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* Display Available or Selected Players based on toggle state */}
      {showAvailable ? (

        // Available Players Section
        <div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {players.map(player => (
              <PlayerCard key={player.playerId} player={player} choosePlayer={choosePlayer} />
            ))}
          </div>
        </div>
      ) : (
        
        // Selected Players Section
        <div>
          <div className="grid grid-cols-1 gap-4">
            {selectedPlayers.map(player => (
              <SelectedPlayerCard key={player.playerId} player={player} removePlayer={removePlayer} />
            ))}
          </div>
          <div className='border border-black w-40 p-2 rounded-lg mt-6'>
          <button 
            className="btn bg-[#E7FE29]" 
            onClick={() => setShowAvailable(true)}
          >
            Add More Player
          </button>
		  </div>
        </div>
      )}
    </div>
  );
};

MainSection.propTypes = {
  choosePlayer: PropTypes.func.isRequired,
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string,
      image: PropTypes.string,
      role: PropTypes.string.isRequired,
      biddingPrice: PropTypes.number
    })
  ).isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default MainSection;

