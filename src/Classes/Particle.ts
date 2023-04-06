import p5Types from 'p5';
import type Attractor from './Attractor';

class Particle {
	static mass = 50;
	static friction = 0.99;
	static distanceCenterOffset = 10;

	static setMass(mass: number) {
		Particle.mass = mass;
	}

	static setFriction(friction: number) {
		Particle.friction = friction;
	}

	static setDistanceCenterOffset(distanceCenterOffset: number) {
		Particle.distanceCenterOffset = distanceCenterOffset;
	}

	position: p5Types.Vector;
	velocity: p5Types.Vector;
	color: p5Types.Color;

	constructor(p5: p5Types, x: number, y: number) {
		this.position = p5.createVector(x, y);
		this.velocity = p5.createVector(0, 0);
		this.color = p5.color(0, 255, 255, 255);
	}

	update(p5: p5Types, target: Attractor, deltaTime: number, G: number, pixelPerMeter: number) {
		/* Convert position to normalized units */
		const positionNormalized = this.position.copy().div(pixelPerMeter);

		/* Calculate acceleration */
		const toTarget = p5Types.Vector.sub(target.position, this.position).div(pixelPerMeter);
		const distance = (toTarget.copy().mag() / pixelPerMeter);
		const distanceSquared = (distance * distance) + Particle.distanceCenterOffset;

		// Sum of forces = (G * m1 * m2 / r^2 ) multiplied by the normalized vector toTarget to get the direction of the force
		const force = toTarget.copy().normalize().mult(G * target.mass * Particle.mass / distanceSquared);
		// Acceleration = Force / mass
		const acceleration = (force.copy().div(Particle.mass)).mult(target.forceInversion);
		// p = p0 + v0 * t + 1/2 * a * t^2
		positionNormalized.add(this.velocity.copy().mult(deltaTime)).add(acceleration.copy().mult(deltaTime * deltaTime / 2));
		// v = v0 + a * t
		this.velocity.add(acceleration.copy().mult(deltaTime));
		this.velocity.mult(Particle.friction);

		/* Convert position back to pixel units */
		this.position = positionNormalized.mult(pixelPerMeter);

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

export default Particle;
