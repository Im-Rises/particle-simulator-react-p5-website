import p5Types from 'p5';
import type Attractor from './Attractor';

// eslint-disable-next-line @typescript-eslint/naming-convention
const G = 1;
const friction = 0.99;
const mass = 1;
let forceInversion = 1;

class Particle {
	position: p5Types.Vector;
	velocity: p5Types.Vector;
	color: p5Types.Color;

	constructor(p5: p5Types, target: Attractor, x: number, y: number) {
		// this.position = p5.createVector(x, y);
		this.position = p5.createVector(0, 0);
		this.velocity = p5.createVector(0, 0);
		this.color = p5.color(0, 255, 255, 255);
	}

	update(p5: p5Types, target: Attractor, deltaTime: number) {
		/* Calculate acceleration */
		const toTarget = p5Types.Vector.sub(target.position, this.position);
		const m1m2 = target.mass * mass;
		const distanceSquared = toTarget.magSq();
		// const distanceSquared = Math.max(toTarget.dot(toTarget), 0.001 * 0.001);
		// const distanceSquared = p5.constrain(toTarget.magSq(), 1000, 10000);

		// Sum of forces = (G * m1 * m2 / r^2 ) multiplied by the normalized vector toTarget to get the direction of the force
		// const force = toTarget.copy().normalize().mult(G * m1m2 / distanceSquared);
		const force = p5.createVector(0, 9.81);
		// Acceleration = Force / mass
		const acceleration = force.copy().div(mass).mult(forceInversion);

		/* Integration */
		// p = p0 + v0 * t + 1/2 * a * t^2
		this.position.add(this.velocity.copy().mult(deltaTime)).add(acceleration.copy().mult(deltaTime * deltaTime / 2));
		// v = v0 + a * t
		this.velocity.add(acceleration.copy().mult(deltaTime));
		// this.velocity.mult(friction);

		/* Calculate new color according to velocity */
		// this.color = p5.lerpColor(p5.color(0, 255, 255, 255),
		// 	p5.color(0, 255, 0, 255),
		// 	this.velocity.mag() / 10);
	}

	show(p5: p5Types) {
		p5.stroke(this.color);
		p5.strokeWeight(4);
		p5.point(this.position.x, this.position.y);
	}

	toggleAttractedRepulsed = () => {
		forceInversion = -forceInversion;
	};
}

export default Particle;
