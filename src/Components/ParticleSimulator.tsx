import React from 'react';
import Sketch from 'react-p5';
import type p5Types from 'p5';
import Attractor from '../Classes/Attractor';
import Particle, {toggleAttractedRepulsed} from '../Classes/Particle';

type ComponentProps = {
	particleCount: number;
	frameRate: number;
	fixedDeltaTime: number;
	particlesPosSizeCoeff: number;
};

const ParticleSimulator: React.FC<ComponentProps> = (props: ComponentProps) => {
	// Time variables
	let previousTime = 0;
	let fixedUpdateAccum = 0;
	// Attractor and Particles array
	const particleArray: Particle[] = [];
	let attractor: Attractor;

	// Sketch setup
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		// Create canvas
		const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.P2D).parent(canvasParentRef);
		attractor = new Attractor(p5);

		// Set the particles around the center of the screen as a square
		for (let i = 0; i < props.particleCount; i++) {
			particleArray.push(new Particle(p5,
				attractor,
				p5.random((p5.width / 2) - (p5.width * props.particlesPosSizeCoeff),
					(p5.width / 2) + (p5.width * props.particlesPosSizeCoeff)),
				p5.random((p5.height / 2) - (p5.height * props.particlesPosSizeCoeff),
					(p5.height / 2) + (p5.height * props.particlesPosSizeCoeff))),
			);
		}

		// Callback mouse button
		canvas.mousePressed((p5: p5Types) => {
			toggleAttractedRepulsed();
		});

		// // Callback window fullscreen
		// canvas.doubleClicked((p5: p5Types) => {
		// 	const fs = p5.fullscreen();
		// 	p5.fullscreen(!fs);
		// });

		// // Callback
		// canvas.touchStarted((p5: p5Types) => {
		//
		// });

		// Set frame rate to 60
		p5.frameRate(props.frameRate);
	};

	// Sketch draw call every frame (60 fps) game loop
	const draw = (p5: p5Types) => {
		/* Calculate deltaTime and update fixedUpdateAccum */
		const currentTime = p5.millis();
		const deltaTime = (currentTime - previousTime) / 1000;// in seconds
		previousTime = currentTime;
		fixedUpdateAccum += deltaTime;

		/* Read inputs */
		// At the moment it is directly in the attractor.update() function

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
		p5.background(0);
		attractor.show(p5);
		particleArray.forEach(particle => {
			particle.show(p5);
		});
	};

	const windowResized = (p5: p5Types) => {
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
	};

	return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};

export default ParticleSimulator;
