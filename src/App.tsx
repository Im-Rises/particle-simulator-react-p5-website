import React from 'react';
import './App.css';
import ParticleSimulator from './Components/ParticleSimulator';
import GitHubProjectPanel from './Components/GitHubProjectPanel';

const App: React.FC = () => (
	<div className='App'>
		<header>
			<GitHubProjectPanel link={'https://github.com/Im-Rises/particle-simulator-react-p5'}
				linkText={'Im-Rises/particle-simulator-react-p5'}/>
		</header>
		<div className='App-body'>
			<ParticleSimulator particleCount={1000} fixedDeltaTime={1 / 50} canvasSizeCoefficient={4 / 5}
				particlesPosSizeCoeff={1 / 4}/>
		</div>
	</div>
);

export default App;
