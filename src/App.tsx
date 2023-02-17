import React from 'react';
import ParticleSimulator from './Components/ParticleSimulator';
import GitHubProjectPanel from './Components/GitHubProjectPanel';
import {isMobile} from 'react-device-detect';
import './App.css';

const App: React.FC = () => (
	<div className='App'>
		<header>
			<GitHubProjectPanel link={'https://github.com/Im-Rises/particle-simulator-react-p5'}
				linkText={'Im-Rises/particle-simulator-react-p5'}/>
		</header>
		<div className={'particle-sim-canvas'}>
			<ParticleSimulator particleCount={isMobile ? 2000 : 5000} fixedDeltaTime={1 / 50}
				frameRate={60}
				spawnAreaWidth={100} spawnAreaHeight={100}/>
		</div>
	</div>
);

export default App;
