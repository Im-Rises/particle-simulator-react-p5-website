import React from 'react';
import Sketch from 'react-p5';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import p5Types from 'p5';
import {isMobile} from 'react-device-detect';
import Attractor from '../Classes/Attractor';
import Particle, {toggleAttractedRepulsed} from '../Classes/Particle';

type ComponentProps = {
	canvasWidth: number;
	canvasHeight: number;
	particleCountMobile: number;
	particleCountComputer: number;
	frameRate: number;
	fixedDeltaTime: number;
	spawnAreaWidth: number;
	spawnAreaHeight: number;
	resizeGetter: () => {width: number; height: number};
};

const ParticleSimulator: React.FC<ComponentProps> = (props: ComponentProps) => {
	// Time variables
	let previousTime = 0;
	let fixedUpdateAccum = 0;
	// Attractor and Particles array
	const particleArray: Particle[] = [];
	let attractor: Attractor;
	// P5 variables
	let screenBuffer: p5Types.Graphics;

	// Sketch setup
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		// Create canvas
		const canvas = p5.createCanvas(props.canvasWidth, props.canvasHeight, p5.P2D).parent(canvasParentRef);
		// Create graphics
		screenBuffer = p5.createGraphics(props.canvasWidth, props.canvasHeight, p5.P2D);

		// Set frame rate to 60
		p5.frameRate(props.frameRate);

		// Create attractor
		attractor = new Attractor(p5);

		// Create and set the particles around the center of the screen as a square
		for (let i = 0; i < (isMobile ? props.particleCountMobile : props.particleCountComputer); i++) {
			particleArray.push(new Particle(p5,
				attractor,
				p5.random(-props.spawnAreaWidth / 2, props.spawnAreaWidth / 2) + (p5.width / 2),
				p5.random(-props.spawnAreaHeight / 2, props.spawnAreaHeight / 2) + (p5.height / 2)),
			);
		}

		// Callback mouse button
		canvas.mousePressed((p5: p5Types) => {
			toggleAttractedRepulsed();
		});
	};

	// Sketch draw call every frame (60 fps) game loop
	const draw = (p5: p5Types) => {
		/* Calculate deltaTime and update fixedUpdateAccum */
		const currentTime = p5.millis();
		const deltaTime = (currentTime - previousTime) / 1000;// in seconds
		previousTime = currentTime;
		fixedUpdateAccum += deltaTime;

		/* Read inputs */
		// At the moment it is directly in the attractor.update() function for the mouse position
		// And the toggleAttractedRepulsed() function is called in the mousePressed() callback

		/* Update physics (fixed update) */
		if (fixedUpdateAccum >= props.fixedDeltaTime) {
			// Update attractor
			attractor.update(p5);
			// Update particles
			particleArray.forEach(particle => {
				particle.update(p5, attractor, props.fixedDeltaTime);
			});
			fixedUpdateAccum = 0;
		}

		/* Update canvas */
		// Clear canvas
		screenBuffer.background(0);
		// Draw objects
		attractor.show(screenBuffer);
		particleArray.forEach(particle => {
			particle.show(screenBuffer);
		});
		// Swap buffers
		p5.image(screenBuffer, 0, 0);
	};

	// Sketch window resize
	const windowResized = (p5: p5Types) => {
		const newDim = props.resizeGetter();
		p5.resizeCanvas(newDim.width, newDim.height);
		screenBuffer.resizeCanvas(newDim.width, newDim.height);
	};

	return (
		<Sketch setup={setup} draw={draw} windowResized={windowResized}/>
	);
};

export default ParticleSimulator;
