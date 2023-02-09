import React from 'react';
import logo from './res/imgs/logo.svg';
import './App.css';
import ParticleSimulator from './App/ParticleSimulator';

const App: React.FC = () => (
	<div className='App'>
		<header className='App-header'>
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
			<img src={logo} className='App-logo' alt='logo'/>
			<ParticleSimulator myText='Hello World!'/>
		</header>
	</div>
);

export default App;
