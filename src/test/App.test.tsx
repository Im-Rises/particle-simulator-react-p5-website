import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import {
	GITHUB_LINK_TEXT,
	PARTICLES_COUNT_COMPUTER,
	PARTICLES_COUNT_MOBILE,
} from '../Constants/constant-particle-simulator';
import ParticleSimulator from '../Components/ParticleSimulator';
import {isMobile} from 'react-device-detect';

test('Render GitHub Project Panel', () => {
	render(<App/>);
	const linkElement = screen.getByText(GITHUB_LINK_TEXT);
	expect(linkElement).toBeInTheDocument();
});

test('Render Particle Simulator', () => {
	render(<App/>);
	const canvasElement = screen.getByTestId('react-p5');
	expect(canvasElement).toBeInTheDocument();
});
