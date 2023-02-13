import React from 'react';
import Sketch from 'react-p5';
import type p5Types from 'p5';
import Attractor from '../Classes/Attractor';
import Particle from '../Classes/Particle';

type ComponentProps = {
	particleCount: number;
	fixedDeltaTime: number;
	canvasSizeCoefficient: number;
	particlesPosSizeCoeff: number;
};

const particleArray: Particle[] = [];
let attractor: Attractor;

const ParticleSimulator: React.FC<ComponentProps> = (props: ComponentProps) => {
	let previousTime = 0;
	let fixedUpdateAccum = 0;
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		const canvas = p5.createCanvas(outerWidth * props.canvasSizeCoefficient,
			outerHeight * props.canvasSizeCoefficient).parent(canvasParentRef);
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

		canvas.mousePressed((p5: p5Types) => {
			// Toggle particles to be attracted or repelled by the attractor
			particleArray.forEach(particle => {
				particle.toggleAttractedRepulsed();
			});
		});
	};

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

		/* Update video */
		p5.background(0);
		attractor.show(p5);
		particleArray.forEach(particle => {
			particle.show(p5);
		});
	};

	return <Sketch setup={setup} draw={draw}/>;
};

export default ParticleSimulator;
