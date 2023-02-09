// Newton's law of universal gravitation
// F = G * m1 * m2 / r^2

const calculateForce = (m1: number, m2: number, r: number, G: number) => G * m1 * m2 / (r * r);

export default calculateForce;
