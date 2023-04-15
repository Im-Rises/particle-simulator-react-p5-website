import React from 'react';
import {render, screen} from '@testing-library/react';
import {GITHUB_LINK_TEXT} from '../Constants/constant-particle-simulator';
import App from '../App';

test('Render GitHub Project Panel', () => {
	// render(<App/>);
	// const linkElement = screen.getByText(GITHUB_LINK_TEXT);
	// expect(linkElement).toBeInTheDocument();
});

test('Render Particle Simulator', () => {
	render(<App/>);
	const canvasElement = screen.getByTestId('react-p5');
	expect(canvasElement).toBeInTheDocument();
});

