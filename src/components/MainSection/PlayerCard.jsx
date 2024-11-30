import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const PlayerCard = ({ player, choosePlayer }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md flex-col items-center">
      <img src={player.image} alt={player.name} className="w-96 h-56 object-cover rounded-lg mb-4 " />

	  <div className='flex gap-2 items-center '>
	  <FaUser />
      <h3 className="text-lg font-semibold text-left">{player.name}</h3>
	  </div>

      <div className='justify-between flex gap-4 font-semibold'>
	  <div className='flex gap-2 items-center'>
    <IoFlag />
	  	<p>{player.country}</p>
	  </div>  
      <div>
	  	<button className='btn'>Role: {player.role}</button>
	  </div>
	  </div>

    <hr className='mt-4 mb-4' />
	  <h2 className='font-bold mb-2'>Rating</h2>
	  <div className='flex justify-between gap-4 space-y-2 items-center'>
	  <h2 className='font-semibold'>{player.battingType}</h2>
	  <h2 className='text-gray-400 font-semibold'>{player.bowlingType}</h2>
	  </div>
      <div className='flex justify-between items-center gap-4 mt-2'>
	  <p className='font-semibold'>Price: $ {player.biddingPrice} coins</p>
      <button onClick={() => choosePlayer(player)} className="btn btn-outline  text-black  rounded-lg ">
        Choose Player
      </button>
	  </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    biddingPrice: PropTypes.number.isRequired,
    battingType: PropTypes.string.isRequired,
    bowlingType: PropTypes.string.isRequired
  }).isRequired,
  choosePlayer: PropTypes.func.isRequired,
};

export default PlayerCard;
