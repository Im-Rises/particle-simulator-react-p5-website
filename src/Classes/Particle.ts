import p5Types from 'p5';
import type Attractor from './Attractor';

// Can be member of Particle class
let forceInversion = 1;

// eslint-disable-next-line @typescript-eslint/naming-convention
const G = 1;
const friction = 0.99;
const pixelPerMeter = 100;
const distanceCenterOffset = 10;

class Particle {
	position: p5Types.Vector;
	velocity: p5Types.Vector;
	color: p5Types.Color;
	mass: number;

	constructor(p5: p5Types, x: number, y: number, mass: number) {
		this.position = p5.createVector(x, y);
		this.velocity = p5.createVector(0, 0);
		this.color = p5.color(0, 255, 255, 255);
		this.mass = mass;
	}

	update(p5: p5Types, target: Attractor, deltaTime: number) {
		// console.log('All variables : ', 'deltaTime', deltaTime, 'forceInversion', forceInversion, 'G', G, 'friction', friction, 'pixelPerMeter', pixelPerMeter, 'distanceCenterOffset', distanceCenterOffset);
		// console.log('All variables : ', 'this.position', this.position, 'this.velocity', this.velocity, 'this.color', this.color, 'this.mass', this.mass);
		// console.log('All variables : ', 'target.position', target.position, 'target.mass', target.mass);

		/* Calculate acceleration */
		const toTarget = p5Types.Vector.sub(target.position, this.position).div(pixelPerMeter);
		const distance = (toTarget.copy().mag() / pixelPerMeter);
		const distanceSquared = (distance * distance) + distanceCenterOffset;

		// Sum of forces = (G * m1 * m2 / r^2 ) multiplied by the normalized vector toTarget to get the direction of the force
		const force = toTarget.copy().normalize().mult(G * target.mass * this.mass / distanceSquared);
		// Acceleration = Force / mass
		const acceleration = (force.copy().div(this.mass)).mult(forceInversion);
		// p = p0 + v0 * t + 1/2 * a * t^2
		this.position.add(this.velocity.copy().mult(deltaTime)).add(acceleration.copy().mult(deltaTime * deltaTime / 2));
		// v = v0 + a * t
		this.velocity.add(acceleration.copy().mult(deltaTime));
		this.velocity.mult(friction);

		console.log('This.velocity', this.velocity);
		console.log('This.position', this.position);
		console.log('Acceleration', acceleration);

		/* Prevent particles from going out of the screen */
		if (this.position.x < 0) {
			this.position.x = p5.width;
		}

		if (this.position.x > p5.width) {
			this.position.x = 0;
		}

		if (this.position.y < 0) {
			this.position.y = p5.height;
		}

		if (this.position.y > p5.height) {
			this.position.y = 0;
		}

		/* Calculate new color according to velocity */
		// const velocityMagnitudeNormalized = velocityMagnitude / colorNormalizer;
		// const velocityMagnitude = this.velocity.mag();
		// this.color = p5.color(velocityMagnitudeNormalized * 255, 255 - (velocityMagnitudeNormalized * 255), 255, 255);
	}

	show(p5: p5Types) {
		p5.stroke(this.color);
		p5.strokeWeight(4);
		p5.point(this.position.x, this.position.y);
	}
}

const toggleAttractedRepulsed = () => {
	forceInversion = -forceInversion;
};

export {toggleAttractedRepulsed};

export default Particle;
