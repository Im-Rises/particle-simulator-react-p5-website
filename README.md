# particle-simulator-react-p5

<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascriptLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescriptLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="scssLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="cssLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/p5%20js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white" alt="cssLogo" style="height:50px;">
</p>

## Description

This is a particle simulator package made with React Typescript and p5.js.

## 🚀🚀[You can try it online from your browser](https://im-rises.github.io/particle-simulator-react-p5/) 🚀🚀

It works on desktop and mobile as well with different controls (check the `controls` section).

The particles are set randomly on the screen in a square shape. Their color change according to their speed from blue to
purple and then to pink.

## 🚀🚀 [The package is available on npm](https://www.npmjs.com/package/particle-simulator-react-p5) 🚀🚀

## Screenshots

|                                                      Attraction                                                       |                                                         Drag                                                          |                                                       Repulsion                                                       |
|:---------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|
| ![screenshot1](https://user-images.githubusercontent.com/59691442/223539432-98ed98bd-2aed-47f6-9463-740bf3a77640.png) | ![screenshot2](https://user-images.githubusercontent.com/59691442/223539428-e51d349e-aaee-4012-9d8b-7c21806af833.png) | ![screenshot3](https://user-images.githubusercontent.com/59691442/223539427-0c7616ed-8d45-4aa5-a060-f49c54c97885.png) | ![screenshot4](https://user-images.githubusercontent.com/59691442/223539426-0c7616ed-8d45-4aa5-a060-f49c54c97885.png) |

## Demo video

[//]: # (https://user-images.githubusercontent.com/59691442/219550627-16660c09-dbea-41f3-ba15-3d7aaafca6d9.mp4)

https://user-images.githubusercontent.com/59691442/230523799-9afbf327-3cf4-4530-8127-594339d94334.mp4

## Controls

The particles are initially attracted to the mouse, but you can toggle attract/repel by clicking with the mouse
button on a screen.  
On tablet and mobile de the touch screen to move the particles by dragging your finger. To toggle
attract/repel tap on the screen.

You can also toggle fullscreen mode by pressing the `F11` key.

## Package installation

To install it type `npm install particle-simulator-react-p5` in your terminal to install it.

Then you can import it in your project with `import ParticleSimulator from 'particle-simulator-react-p5'`.

## Usage

To use it you can simply add the component in your project like this:

```tsx
import React, {useEffect, useState} from 'react';
import ParticleSimulator from './Components/ParticleSimulator';
import './App.css';

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const divRef = React.useRef <HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current) {
            setIsLoaded(true);
        }
    }, [divRef]);

    return (
        <div className='App'>
            <div ref={divRef}>
                {isLoaded ? (
                    <div className={'particle-sim-canvas'}>
                        <ParticleSimulator
                            parentRef={divRef}
                            particleCountMobile={PARTICLES_COUNT_MOBILE}
                            particleCountComputer={PARTICLES_COUNT_COMPUTER}
                            fixedUpdate={60}
                            frameRate={60}
                            spawnAreaRadius={100}
                            gravitationalConstant={1}
                            particlesMass={50}
                            attractorMass={250}
                            friction={0.99}
                            distanceOffset={10}
                            pixelsPerMeter={100}
                            initColor={[0, 255, 255, 200]}
                            finalColor={[255, 0, 255, 200]}
                            colorModifierMeters={0.3}
                            backColor={[0, 0, 0, 255]}
                        />
                    </div>
                ) : (
                    <p className={'wait-sim-canvas'}>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default App;
```

The component takes 6 props:

- `parentRef` - a reference to the parent div of the canvas. It is used to get the size of the canvas.
- `particleCountMobile` - the number of particles on mobile devices.
- `particleCountComputer` - the number of particles on desktop devices.
- `fixedUpdate` - the number of fixed updates per second.
- `frameRate` - the number of frames per second.
- `spawnAreaRadius` - the radius of the spawn area of the particles (in pixels).
- `gravitationalConstant` - the gravitational constant of the simulation.
- `particlesMass` - the mass of the particles.
- `attractorMass` - the mass of the attractor.
- `friction` - the friction of the particles.
- `distanceOffset` - the distance offset of the particles.
- `pixelsPerMeter` - the number of pixels per meter (in meters).
- `initColor` - the initial color of the particles (in RGB).
- `finalColor` - the final color of the particles (in RGB).
- `colorModifierMeters` - the number of meters after which the color of the particles changes.

This will create a canvas with 3000 particles on desktop and 1000 on mobile in fullscreen which will be resized
when the window is resized.

You can find the complete example of the project in the GitHub
repository [here](https://github.com/Im-Rises/particle-simulator-react-p5).

> **Note**  
> Be sure to do like in the example, the parent div of the canvas must be set before the p5 canvas is created.

## Calculations

The calculations are made with the [Newtonian mechanics](https://en.wikipedia.org/wiki/Newtonian_mechanics) equations.

$$ F = G \frac{m_1 m_2}{r^2} $$

There is a small offset between the particles to avoid the particles from having an infinite acceleration if they are
too close from the attractor.

$$ F = G \frac{m_1 m_2}{(r + d)^2} $$

r is the distance between the particles and d is the offset (the offset parameter is the `distanceOffset` prop of the
component).

## Known issues

> **Warning**  
> The React-p5 dependency may have issues with the index.js file.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

```

Please delete the React.StrictMode tag in the index.js file and replace it with the code below.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App/>
    </>
);
```

## GitHub Actions

[![pages-build-deployment](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/pages/pages-build-deployment)
[![Node.js CI](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/node.js.yml)
[![ESLint](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/eslint.yml/badge.svg?branch=main)](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/codeql.yml)
[![Node.js Package](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Im-Rises/particle-simulator-react-p5/actions/workflows/npm-publish.yml)

The project is set up to run the following actions:

- pages-build-deployment : Builds the website and deploys it to GitHub Pages.
- node.js.yml : Runs the tests for the Node.js project.
- eslint.yml : Runs the ESLint linter on the project.
- codeql.yml : Runs the CodeQL linter on the project.
- npm-publish.yml : Publishes the package to npm.

## Libraries

React:  
<https://reactjs.org/docs/getting-started.html>

Xo:  
<https://github.com/xojs/xo>  
<https://github.com/xojs/eslint-config-xo-react>  
<https://github.com/xojs/eslint-config-xo-typescript>

ESLint:  
<https://eslint.org/docs/latest/user-guide/getting-started>

GitHub gh-pages:  
<https://github.com/gitname/react-gh-pages>

P5.js:  
<https://p5js.org/>  
<https://www.npmjs.com/package/react-p5>

react-device-detect:  
<https://www.npmjs.com/package/react-device-detect>

## Documentation

The Coding Challenge (math and physics):  
<https://www.youtube.com/watch?v=OAcXnzRNiCY>

P5.js:  
<https://p5js.org/>

P5.js React:  
<https://www.npmjs.com/package/react-p5>

## Links

Check the source code
on [![github](https://user-images.githubusercontent.com/59691442/223556058-6244e346-8117-43cd-97c6-bf68611bf286.svg)](https://github.com/im-rises/particle-simulator-react-p5)

Check the package
on [![npm](https://user-images.githubusercontent.com/59691442/223556055-4e9ef014-79d4-4136-ac07-b837b49066c8.svg)](https://www.npmjs.com/package/particle-simulator-react-p5)

## Contributors

Quentin MOREL :

- @Im-Rises
- <https://github.com/Im-Rises>

[![GitHub contributors](https://contrib.rocks/image?repo=Im-Rises/particle-simulator-react-p5)](https://github.com/Im-Rises/particle-simulator-react-p5/graphs/contributors)
