import PropTypes from 'prop-types';

const Banner = ({ incrementCoins }) => {

	const bannerStyle = {
		backgroundImage: "url('https://i.ibb.co/k9C0GTz/bg-shadow.png')",
		backgroundColor: 'black',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '545px', // Adjust height as needed
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		borderRadius: '24px',
	  };

  return (
    <section className='w-11/12 mx-auto mt-4'>
      <div style={bannerStyle} className="hero min-h-64 bg-base-200 text-center">
	  <div className="hero-content">
        <div className=' space-y-4'>
			<img className='w-[248px] mx-auto' src="https://i.ibb.co/c6GD4dh/banner-main.png" alt="" />
          <h2 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <p className="text-lg mt-2 text-white font-bold">Beyond Boundaries Beyond Limits</p>
          <div className='border w-40 mx-auto p-2 rounded-lg'>
		  <button onClick={incrementCoins} className="btn bg-[#E7FE29]">
		  Claim Free Credit
          </button>
		  </div>
        </div>
      </div>
	  </div>
    </section>
  );
};

Banner.propTypes = {
  incrementCoins: PropTypes.func.isRequired,
};

export default Banner;
