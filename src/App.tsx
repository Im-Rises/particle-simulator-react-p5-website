import React from 'react';
import ParticleSimulator from './Components/ParticleSimulator';
import GitHubProjectPanel from './Components/GitHubProjectPanel';
import {isMobile} from 'react-device-detect';
import './App.css';
import {
	GITHUB_LINK_TEXT,
	GITHUB_URL,
	PARTICLES_COUNT_COMPUTER,
	PARTICLES_COUNT_MOBILE,
} from './Constants/constant-particle-simulator';

const App: React.FC = () => (
	<div className='App'>
		<header>
			<GitHubProjectPanel link={GITHUB_URL}
				linkText={GITHUB_LINK_TEXT}/>
		</header>
		<div className={'particle-sim-canvas'}>
			<ParticleSimulator canvasWidth={window.innerWidth} canvasHeight={window.innerHeight}
				particleCount={isMobile ? PARTICLES_COUNT_MOBILE : PARTICLES_COUNT_COMPUTER}
				fixedDeltaTime={1 / 50}
				frameRate={60}
				spawnAreaWidth={100} spawnAreaHeight={100}/>
		</div>
	</div>
);

export default App;
