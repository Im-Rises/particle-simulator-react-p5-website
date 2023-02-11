import p5Types from 'p5';

// const G = 1;

class Particle {
	position: p5Types.Vector;
	acceleration: p5Types.Vector;
	velocity: p5Types.Vector;

	constructor(p5: p5Types, x: number, y: number) {
		this.position = p5.createVector(x, y);
		this.acceleration = p5.createVector(0, 0);
		this.velocity = p5.createVector(0, 0);
	}

	update(target: p5Types.Vector, deltaTimes: number) {
		// const force = p5Types.Vector.sub(target, this.position);
		// force.mult(0.01);
		// this.acceleration.add(force);
		// this.velocity.add(this.acceleration);
		// this.position.add(this.velocity);

		const force = p5Types.Vector.sub(target, this.position);
		const distance = force.mag();
		const strength = (G * this.mass * target.mass) / (distance * distance);
	}

	show(p5: p5Types) {
		p5.stroke(255);
		p5.strokeWeight(4);
		p5.point(this.position.x, this.position.y);
	}
}

export default Particle;
