import p5Types from 'p5';
import type Attractor from './Attractor';

// eslint-disable-next-line @typescript-eslint/naming-convention
const G = 100000;
const friction = 0.99;

class Particle {
	position: p5Types.Vector;
	velocity: p5Types.Vector;
	prevPosition: p5Types.Vector;
	mass = 1;
	color: p5Types.Color;
	forceInversion = 1;

	constructor(p5: p5Types, target: Attractor, x: number, y: number) {
		this.position = p5.createVector(x, y);
		this.prevPosition = p5.createVector(x, y);
		this.velocity = p5.createVector(0, 0);
		this.color = p5.color(0, 0, 255, 255);
	}

	update(p5: p5Types, target: Attractor, deltaTime: number) {
		/* Calculate acceleration */
		const toTarget = p5Types.Vector.sub(target.position, this.position);
		const m1m2 = target.mass * this.mass;
		// const distanceSquared = Math.max(toTarget.dot(toTarget), 0.001 * 0.001); // Define a minimum distance to avoid division by zero
		const distanceSquared = p5.constrain(toTarget.magSq(), 1000, 10000); // Define a minimum distance to avoid division by zero
		// const distanceSquared = toTarget.magSq();

		// Sum of forces = (G * m1 * m2 / r^2 )
		const force = toTarget.normalize().mult(G * m1m2 / distanceSquared); // multiplied by the normalized vector toTarget to get the direction of the force
		// Acceleration = Force / mass
		const acceleration = force.div(this.mass).mult(this.forceInversion);

		/* Integration */
		// // Euler integration
		// this.position.add(this.velocity.mult(deltaTime)).add(acceleration.mult(deltaTime * deltaTime).div(2)); // p = p + v * dt + a * dt^2 / 2
		// this.velocity.add(acceleration.mult(deltaTime)); // v = v0 + a * t
		// this.velocity.mult(friction);// Friction

		// Verlet integration
		this.velocity = p5Types.Vector.sub(this.position, this.prevPosition).div(deltaTime);
		this.prevPosition = this.position.copy();
		this.position.add(this.velocity.mult(deltaTime)).add(acceleration.mult(deltaTime * deltaTime).div(2)); // p = p + v * dt + a * dt^2 / 2
		this.velocity.add(acceleration.mult(deltaTime)); // v = v0 + a * t
		this.velocity.mult(friction);// Friction

		/* Calculate new color according to velocity */
		this.color = p5.lerpColor(p5.color(0, 255, 255, 255),
			p5.color(0, 255, 0, 255),
			this.velocity.mag() / 10);
	}

	show(p5: p5Types) {
		p5.stroke(this.color);
		p5.strokeWeight(4);
		p5.point(this.position.x, this.position.y);
	}

	toggleAttractedRepulsed = () => {
		this.forceInversion = -this.forceInversion;
	};
}

export default Particle;
