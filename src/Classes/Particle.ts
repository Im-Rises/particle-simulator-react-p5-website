import p5Types from 'p5';

// eslint-disable-next-line @typescript-eslint/naming-convention
const G = 1000000000;

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

	update(target: p5Types.Vector, deltaTime: number) {
		/* Calculate new position */
		const toTarget = p5Types.Vector.sub(target, this.position);
		const m1m2 = 1;
		const distanceSquared = toTarget.magSq();

		const force = toTarget.normalize().mult(G * m1m2 / distanceSquared);
		const acceleration = force.div(this.mass);

		this.position.add(this.velocity.mult(deltaTime).add(acceleration.mult(deltaTime * deltaTime).div(2)));
		this.velocity.add(acceleration.mult(deltaTime));

		/* Calculate new color */
		// this.color.setAlpha(255 * (1 - this.position.dist(target) / 1000));
	}

	show(p5: p5Types) {
		p5.stroke(255);
		p5.strokeWeight(4);
		p5.point(this.position.x, this.position.y);
		console.log(this.position);
	}
}

export default Particle;
