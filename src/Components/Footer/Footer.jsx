import React from 'react';
import { Link } from 'react-router-dom'; 
import SocialMedia from '../SocialMedia/SocialMedia';
import { ReactComponent as Instagram } from './image/instagram.svg'; 
import './Footer.css';

const Footer = () => {
	return (
		<>
			<div className="divider"></div>
			<footer className="footer flex">
				<div className="media flex">
					<h2 className="media_title">SATLAB</h2>
					<div className="social flex">
						<SocialMedia 
							text={"Instagram"}  
							Logo={Instagram}
							link={"/"} 
						/>						
					</div>
				</div>
				<div className="sitemap flex">
					<h2 className="sitemap_title">Sitemap</h2>
					<Link to="/" className="sitemap_link">Home</Link>
					<Link to="/gallery" className="sitemap_link">Gallery</Link>
					<Link to="" className="sitemap_link">Contact Us</Link>
					<Link to="" className="sitemap_link">About</Link>
				</div>
				<div className="newsletter flex">
					<h3 className="newsletter_title">Newsletter</h3>
					<input type="text" className="newsletter_input" placeholder="Enter your email" />
					<button className="newsletter_button">Subscribe</button>
				</div>
			</footer>
		</>
	);
};

export default Footer;