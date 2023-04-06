import React from 'react';
import ParticleSimulator from './Components/ParticleSimulator';
import GitHubProjectPanel from './Components/GitHubProjectPanel';
import './App.css';
import {
	GITHUB_LINK_TEXT,
	GITHUB_URL,
	PARTICLES_COUNT_COMPUTER,
	PARTICLES_COUNT_MOBILE,
} from './Constants/constant-particle-simulator';

const App: React.FC = () => {
	// Define div ref
	const divRef = React.useRef<HTMLDivElement>(null);
	const resizeGetter = () => ({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	return (
		<div className='App'>
			<header>
				<GitHubProjectPanel link={GITHUB_URL}
					linkText={GITHUB_LINK_TEXT}/>
			</header>
			<div className={'particle-sim-canvas'} ref={divRef}>
				<ParticleSimulator
					parentRef={divRef}
					particleCountMobile={PARTICLES_COUNT_MOBILE}
					particleCountComputer={PARTICLES_COUNT_COMPUTER}
					fixedUpdate={60}
					frameRate={60}
					spawnAreaRadius={100}
					gravitationalConstant={1}
					particlesMass={50}
					attractorMass={250}
					friction={0.99}
					distanceOffset={10}
					pixelsPerMeter={100}
				/>
			</div>
		</div>
	);
};

export default App;
