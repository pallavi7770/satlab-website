import React from 'react';
import Box from '../Box/Box.jsx';
import "./Home.css";
import visionImg from './images/vision.jpg';
import obcImg from './images/obc.png';
import communicationImg from './images/communication.png';
import powerImg from './images/power.jpg';
import adcsImg from './images/adcs.jpg';
import structureImg from './images/structure.png';


const Home = () => {
	return (
		<>
			<div className="header_container">
				<div className="header_content">
					<div className="header_title">Team Pathik</div>
					<p className="header_text">Don't tell sky is the limit, when there are footprints on the moon.</p>
				</div>
			</div>
			<main className="main flex">
				<Box 
					title={"Vision"}
					img={visionImg}
					modifier={"--vision"}
				>We vision to develop the cheap cubesat for the purpose of contributing in the safety of our planet. We also inspire youth to work on such platform that enhance
				</Box>
				<h1 className="title">Subsystems</h1>
				<Box 
					title={"OBCS"}
					img={obcImg}
				>We vision to develop the cheap cubesat for the purpose of contributing in the safety of our planet. We also inspire youth to work on such platform that enhance
				</Box>
				<Box 
					title={"Communication"}
					img={communicationImg}
				>We vision to develop the cheap cubesat for the purpose of contributing in the safety of our planet. We also inspire youth to work on such platform that enhance
				</Box>
				<Box 
					title={"Structure"}
					img={structureImg}
				>We vision to develop the cheap cubesat for the purpose of contributing in the safety of our planet. We also inspire youth to work on such platform that enhance
				</Box>
				<Box 
					title={"Power"}
					img={powerImg}
				>We vision to develop the cheap cubesat for the purpose of contributing in the safety of our planet. We also inspire youth to work on such platform that enhance
				</Box>
				<Box 
					title={"Altitude determination control system"}
					img={adcsImg}
					modifier={"--adcs"}
				>We vision to develop the cheap cubesat for the purpose of contributing in the safety of our planet. We also inspire youth to work on such platform that enhance
				</Box>
			</main>
		</>
	);
};

export default Home;