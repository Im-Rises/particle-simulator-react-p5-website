import type p5Types from 'p5';

class Attractor {
	position: p5Types.Vector;
	mass = 176;

	constructor(p5: p5Types) {
		p5.mouseX = p5.width / 2;
		p5.mouseY = p5.height / 2;
		this.position = p5.createVector(p5.mouseX, p5.mouseY);
	}

	update(p5: p5Types) {
		this.position.x = p5.mouseX;
		this.position.y = p5.mouseY;
	}

	show(p5: p5Types) {
		p5.stroke(255);
		p5.strokeWeight(4);
		p5.point(this.position.x, this.position.y);
	}
}

export default Attractor;
