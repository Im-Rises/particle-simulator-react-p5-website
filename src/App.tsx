import React from 'react';
import ParticleSimulator from './Components/ParticleSimulator';
import GitHubProjectPanel from './Components/GitHubProjectPanel';
import './App.css';

const App: React.FC = () => (
	<div className='App'>
		<header>
			<GitHubProjectPanel link={'https://github.com/Im-Rises/particle-simulator-react-p5'}
				linkText={'Im-Rises/particle-simulator-react-p5'}/>
		</header>
		<div>
			<ParticleSimulator particleCount={1000} fixedDeltaTime={1 / 50} frameRate={60}
				particlesPosSizeCoeff={1 / 4}/>
		</div>
	</div>
);

export default App;
