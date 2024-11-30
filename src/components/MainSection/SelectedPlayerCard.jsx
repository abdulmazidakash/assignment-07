import PropTypes from 'prop-types';
import { IoTrashOutline } from "react-icons/io5";

const SelectedPlayerCard = ({ player, removePlayer }) => {
  return (
    <div className="border rounded-lg p-4 flex items-center justify-between  shadow-md">
      <div className='flex items-center'>
      <img src={player.image} alt={player.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
      <div>
        <h3 className="text-lg font-bold">{player.name}</h3>
        <p className='font-semibold text-gray-400'>{player.role}</p>
        <p className='font-semibold text-gray-400'>Price: $ {player.biddingPrice} coins</p>
      </div>
      </div>
      <button onClick={() => removePlayer(player)} className=" text-red-500 text-2xl px-4 py-2 rounded-lg">
      <IoTrashOutline />
      </button>
      
    </div>
  );
};

SelectedPlayerCard.propTypes = {
  player: PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    biddingPrice: PropTypes.string.isRequired,
  }).isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayerCard;
