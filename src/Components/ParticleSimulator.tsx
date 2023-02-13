import React from 'react';
import Sketch from 'react-p5';
import type p5Types from 'p5';
import Attractor from '../Classes/Attractor';
import Particle from '../Classes/Particle';

const canvasSizeCoefficient = 4 / 5;
const particlesPosSizeCoeff = 1 / 4;

type ComponentProps = {
	particleCount: number;
};

const particleArray: Particle[] = [];
let attractor: Attractor;

const ParticleSimulator: React.FC<ComponentProps> = (props: ComponentProps) => {
	let previousTime = 0;
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		const canvas = p5.createCanvas(outerWidth * canvasSizeCoefficient, outerHeight * canvasSizeCoefficient).parent(canvasParentRef);
		attractor = new Attractor(p5);
		// Set the particles around the center of the screen as a square
		for (let i = 0; i < props.particleCount; i++) {
			particleArray.push(new Particle(p5,
				attractor,
				p5.random((p5.width / 2) - (p5.width * particlesPosSizeCoeff), (p5.width / 2) + (p5.width * particlesPosSizeCoeff)),
				p5.random((p5.height / 2) - (p5.height * particlesPosSizeCoeff), (p5.height / 2) + (p5.height * particlesPosSizeCoeff))),
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
		// calculate delta time
		const currentTime = p5.millis();
		const deltaTime = (currentTime - previousTime) / 1000;// in seconds
		previousTime = currentTime;

		// Draw background
		p5.background(0);

		// Update and draw attractor
		attractor.update(p5);
		attractor.show(p5);

		// Update and draw particles
		particleArray.forEach(particle => {
			particle.update(p5, attractor, Math.min(deltaTime, 0.16));
			particle.show(p5);
		});
	};

	return <Sketch setup={setup} draw={draw}/>;
};

export default ParticleSimulator;
