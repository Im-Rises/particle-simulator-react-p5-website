// Newton's law of universal gravitation
// F = G * m1 * m2 / r^2

// eslint-disable-next-line @typescript-eslint/naming-convention
const G = 6.67408e-11; // m^3 / kg * s^2
const calculateForce = (m1: number, m2: number, r: number) => G * m1 * m2 / (r * r);

// F = m * a
const calculateAcceleration = (m: number, F: number) => F / m;

// v = a * t
const calculateVelocity = (a: number, t: number) => a * t;

export default {calculateForce, calculateAcceleration};
