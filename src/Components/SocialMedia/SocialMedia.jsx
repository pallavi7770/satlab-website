import React from 'react';
import './SocialMedia.css';

const SocialMedia = ({ Logo, text, link }) => {
	return (
		<div class="social flex">
			<Logo class="social_logo" />
			<a href={link} class="social_link">{text}</a>
		</div>
	);
};

export default SocialMedia;