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
		<body className='App-body'>
			<ParticleSimulator particleCount={10}/>
		</body>
	</div>
);

export default App;
