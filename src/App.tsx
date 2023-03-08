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
	console.log('App.tsx');

	return (
		<div className='App'>
			<header>
				<GitHubProjectPanel link={GITHUB_URL}
					linkText={GITHUB_LINK_TEXT}/>
			</header>
			<div className={'particle-sim-canvas'}>
				<ParticleSimulator canvasWidth={window.innerWidth} canvasHeight={window.innerHeight}
					particleCountMobile={PARTICLES_COUNT_MOBILE}
					particleCountComputer={PARTICLES_COUNT_COMPUTER}
					fixedDeltaTime={1 / 50}
					frameRate={60}
					spawnAreaWidth={100} spawnAreaHeight={100}/>
			</div>
		</div>
	);
};

export default App;
