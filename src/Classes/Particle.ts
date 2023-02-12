import p5Types from 'p5';
import type Attractor from './Attractor';

// eslint-disable-next-line @typescript-eslint/naming-convention
const G = 1;

class Particle {
	position: p5Types.Vector;
	velocity: p5Types.Vector;
	mass = 1;
	color: p5Types.Color;

	constructor(p5: p5Types, x: number, y: number) {
		this.position = p5.createVector(x, y);
		this.velocity = p5.createVector(0, 0);
		this.color = p5.color(255, 255, 255);
	}

	update(target: Attractor, deltaTime: number) {
		/* Calculate new position */
		const toTarget = p5Types.Vector.sub(target.position, this.position);
		const m1m2 = target.mass * this.mass;
		const distanceSquared = toTarget.dot(toTarget);

		const force = toTarget.normalize().mult(G * m1m2 / distanceSquared);
		const acceleration = force.div(this.mass);

		// p = p0 + v0 * t + a * t^2 / 2
		this.position.add(this.velocity.mult(deltaTime)).add(acceleration.mult(deltaTime * deltaTime).div(2));
		this.velocity.add(acceleration.mult(deltaTime));

		/* Calculate new color according to distance */
	}

	show(p5: p5Types) {
		p5.stroke(255);
		p5.strokeWeight(4);
		p5.point(this.position.x, this.position.y);
		console.log(this.position);
	}
}

export default Particle;
