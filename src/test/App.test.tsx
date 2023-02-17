import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import {GITHUB_LINK_TEXT} from '../Constants/constant-particle-simulator';

test('Render GitHub Project Panel', () => {
	render(<App/>);
	const linkElement = screen.getByText(GITHUB_LINK_TEXT);
	expect(linkElement).toBeInTheDocument();
});

test('Render Particle Simulator', () => {
	render(<App/>);
	const canvasElement = screen.getByTestId('particle-sim-canvas');
	expect(canvasElement).toBeInTheDocument();
});
