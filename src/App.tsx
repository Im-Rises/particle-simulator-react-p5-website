import React from 'react';
import logo from './res/imgs/logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
				<img src={logo} className='App-logo' alt='logo'/>
			</header>
		</div>
	);
}

export default App;
