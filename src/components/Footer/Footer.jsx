

const Footer = () => {

	const footerStyle = {
		  backgroundImage: "url('https://i.ibb.co/zF33ZZs/bg-shadow.png')",
		  backgroundColor: 'white',
		  backgroundSize: 'cover',
		  backgroundPosition: 'center',
		  height: '300px', // Adjust height as needed
		  alignItems: 'center',
		  justifyContent: 'center',
		  color: 'white',
		  borderRadius: '24px',
	  // padding: '20px',
		};
	return (
	  <footer className="relative bottom-0 w-full mt-52 ">
	
	 <div className="absolute -top-48 w-full">
		  {/* Newsletter Subscription Fieldset */}
		  <div className="p-4 border border-white w-3/4 mx-auto rounded-[24px] shadow-2xl mb-8 justify-center items-center">
		  <div style={footerStyle} className="text-center space-y-6 pt-20">
			<h2 className="text-2xl text-black font-bold">Subscribe to our Newsletter</h2>
			<h4 className="text-xl text-gray-400 font-semibold">Get the latest updates and news right in your inbox!</h4>
			<div className="space-x-2">
			  <input
				type="text"
				placeholder="Enter your email"
				className="input input-bordered w-6/12"
			  />
			  <button className="btn bg-gradient-to-r from-[#E58DB7] to-[#FCCD56]">Subscribe</button>
			</div>
		  </div>
		  </div>
		</div>
  
  
		{/* Main Footer Section */}
		<main className="bg-[#07091a]  pt-52 mt-20 text-white text-center">
		  <img
			className="mx-auto mb-4"
			src="https://i.ibb.co/CJ0fN60/logo-footer.png"
			alt="Footer Logo"
		  />
  
		  {/* Footer Content */}
		  <div className="footer p-10 w-11/12 mx-auto justify-between">
			{/* Services Section */}
			<nav>
			  <h6 className="footer-title">About Us</h6>
			  <p className="text-left">
				We are a passionate team dedicated to
				<br />
				providing the best services to our customers.
			  </p>
			</nav>
  
			{/* Quick Links Section */}
			<nav>
			  <h6 className="footer-title">Quick Links</h6>
			  <a className="link link-hover" href="#">
				Home
			  </a>
			  <a className="link link-hover" href="#">
				Service
			  </a>
			  <a className="link link-hover" href="#">
				About
			  </a>
			  <a className="link link-hover" href="#">
				Contact
			  </a>
			</nav>
  
			{/* Subscription Form */}
			<form>
			  <h6 className="footer-title">Subscribe</h6>
			  <fieldset className="-ml-8 md:-ml-0">
				<label className="label">
				  <span className="label-text text-white">
					Subscribe to our newsletter for the latest updates.
				  </span>
				</label>
				<div className="join">
				  <input
					type="text"
					placeholder="Enter your email"
					className="input input-bordered join-item text-black"
				  />
				  <button className="btn bg-gradient-to-r from-[#E58DB7] to-[#FCCD56] join-item">Subscribe</button>
				</div>
			  </fieldset>
			</form>
		  </div>
  
		  {/* Bottom Footer */}
		  <hr className="my-4 border-gray-600" />
		  <div className="footer footer-center bg-inherit text-white p-4">
			<aside>
			  <p>Copyright © 2024 - All rights reserved by Abdul Mazid Akash</p>
			</aside>
		  </div>
		</main>
	  </footer>
	);
  };
  
  export default Footer;
  