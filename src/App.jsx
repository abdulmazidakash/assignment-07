
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  document.title = 'BPL-DREAM 11';
  const [coins, setCoins] = useState(0); // Start with initial coins
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const incrementCoins = () => {
    setCoins(coins + 6000);
    toast.success("Credit Added to your Account");
  };

  const choosePlayer = (player) => {
    // Check player limit
    if (selectedPlayers.length >= 6) {
      toast.error("You can't select more than 6 players!");
      return;
    }

    // Check user coins
    if (coins < player.biddingPrice) {
      toast.error("Not enough money to buy this player. Claim some credit");
      return;
    }

    // Check if player is already selected using .find()
    if (selectedPlayers.find(p => p.playerId === player.playerId)) {
      toast.error("Player already selected");
      return;
    }

    // Add player and deduct coins
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.biddingPrice);

    // Show success message
    toast.success(`Congrates !! ${player.name} is now in your squad`);
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== player.playerId));
    setCoins(coins + player.biddingPrice); // Restore the coins
    toast.info(`${player.name} removed`);
  };

  return (
    <>
      <div>
        <Navbar coins={coins} ></Navbar>
        <Banner incrementCoins={incrementCoins} />
        <MainSection 
          choosePlayer={choosePlayer} 
          selectedPlayers={selectedPlayers} 
          removePlayer={removePlayer} 
        ></MainSection>
        <ToastContainer 
          position="top-center" 
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
