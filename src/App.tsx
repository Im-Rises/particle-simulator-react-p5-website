import React, {useEffect, useState} from 'react';
import ParticleSimulator from 'particle-simulator-react-p5';
import GitHubProjectPanel from './Components/GitHubProjectPanel';
import './App.scss';
import {
	GITHUB_LINK_TEXT,
	GITHUB_URL,
	PARTICLES_COUNT_COMPUTER,
	PARTICLES_COUNT_MOBILE,
} from './Constants/constant-particle-simulator';

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
							initColor={[0, 255, 255, 200]}
							finalColor={[255, 0, 255, 200]}
							// initColor={[0xFF, 0x4C, 0x19, 0x80]}
							// finalColor={[0xFF, 0xFF, 0xFF, 0xFF]}
							colorModifierMeters={0.3}
							backColor={[0, 0, 0, 255]}
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
