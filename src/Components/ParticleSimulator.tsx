import React from 'react';
import Sketch from 'react-p5';
import type p5Types from 'p5';
import {isMobile} from 'react-device-detect';
import Attractor from '../Classes/Attractor';
import Particle from '../Classes/Particle';

type ComponentProps = {
	parentRef: React.RefObject<HTMLElement>;
	particleCountMobile: number;
	particleCountComputer: number;
	frameRate: number;
	fixedUpdate: number;
	spawnAreaRadius: number;
	gravitationalConstant: number;
	particlesMass: number;
	attractorMass: number;
	friction: number;
	distanceOffset: number;
	pixelsPerMeter: number;
};

const ParticleSimulator: React.FC<ComponentProps> = (props: ComponentProps) => {
	// Gravity constant
	const G = props.gravitationalConstant;

	// Pixels per meter (for the scale normalization)
	const pixelPerMeter = props.pixelsPerMeter;

	// Time variables
	let previousTime = 0;
	let fixedUpdateAccum = 0;
	const fixedDeltaTime = 1 / props.fixedUpdate;

	// Attractor and Particles array
	const particleArray: Particle[] = [];
	let attractor: Attractor;

	// P5 variables
	let screenBuffer: p5Types.Graphics;

	// Sketch setup
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		// Create canvas
		const canvas = p5.createCanvas(props.parentRef.current!.clientWidth, props.parentRef.current!.clientHeight, p5.P2D)
			.parent(canvasParentRef);

		// Create graphics
		screenBuffer = p5.createGraphics(props.parentRef.current!.clientWidth, props.parentRef.current!.clientHeight, p5.P2D);

		// Set frame rate to 60
		p5.frameRate(props.frameRate);

		// Create attractor
		attractor = new Attractor(p5, props.attractorMass);

		// Create and set the particles around the center of the screen as a square
		Particle.setMass(props.particlesMass);
		Particle.setFriction(props.friction);
		Particle.setDistanceCenterOffset(props.distanceOffset);
		Particle.setCenterColor(p5.color(255, 0, 0, 200));
		for (let i = 0; i < (isMobile ? props.particleCountMobile : props.particleCountComputer); i++) {
			// Define particles spawn in a circle
			const randomFloat = (min: number, max: number) => min + ((max - min) * Math.random());
			const randomAngle1 = randomFloat(0, 2 * Math.PI);
			const randomAngle2 = randomFloat(0, 2 * Math.PI);
			const posX = (p5.width / 2) + (props.spawnAreaRadius * Math.cos(randomAngle1) * Math.sin(randomAngle2));
			const posY = (p5.height / 2) + (props.spawnAreaRadius * Math.sin(randomAngle1) * Math.sin(randomAngle2));

			// Create particle
			particleArray.push(new Particle(p5,
				posX,
				posY,
				p5.color(0, 255, 255, 200)),
			);
		}

		// Callback mouse button
		canvas.mousePressed((p5: p5Types) => {
			attractor.toggleForceInversion();
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
		if (fixedUpdateAccum >= fixedDeltaTime) {
			// Update attractor
			attractor.update(p5);
			// Update particles
			particleArray.forEach(particle => {
				particle.update(p5, attractor, fixedDeltaTime, G, pixelPerMeter);
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
		p5.resizeCanvas(props.parentRef.current!.clientWidth, props.parentRef.current!.clientHeight);
		screenBuffer.resizeCanvas(props.parentRef.current!.clientWidth, props.parentRef.current!.clientHeight);
	};

	return (
		<Sketch setup={setup} draw={draw} windowResized={windowResized}/>
	);
};

export default ParticleSimulator;
