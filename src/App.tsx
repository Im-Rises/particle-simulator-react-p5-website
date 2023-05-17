import React, {useEffect, useState} from 'react';
import ParticleSimulator from 'particle-simulator-react-p5';
import GitHubProjectPanel from './components/GitHubProjectPanel';
import './App.scss';
import {
	GITHUB_LINK_TEXT,
	GITHUB_URL,
} from './constants/constant-particle-simulator';

const App: React.FC = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const divRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divRef.current) {
			setIsLoaded(true);
		}
	}, [divRef]);

	return (
		<div className='App'>
			<header>
				<GitHubProjectPanel link={GITHUB_URL}
					linkText={GITHUB_LINK_TEXT}/>
			</header>
			<div ref={divRef}>
				{isLoaded ? (
					<div className={'particle-sim-canvas'}>
						<ParticleSimulator
							parentRef={divRef}
						/>
					</div>
				) : (
					<p className={'wait-sim-canvas'}>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default App;
