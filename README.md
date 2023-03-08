# particle-simulator-react-p5

<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascriptLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescriptLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="scssLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="cssLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/p5%20js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white" alt="cssLogo" style="height:50px;">
</p>

# NOT WORKING WIP ISSUES SORRY

## Description

This is a particle simulator package made with React Typescript and p5.js.

## 🚀🚀[You can try it online from your browser](https://im-rises.github.io/particle-simulator-react-p5/) 🚀🚀

It works on desktop and mobile as well with different controls (check the `controls` section).

The particles are set randomly on the screen in a square shape. Their color change according to their speed from blue to
purple and then to pink.

## 🚀🚀 [The package is available on npm](https://www.npmjs.com/package/particle-simulator-react-p5) 🚀🚀

## Screenshots

![screenshot1](https://user-images.githubusercontent.com/59691442/223539432-98ed98bd-2aed-47f6-9463-740bf3a77640.png)
![screenshot2](https://user-images.githubusercontent.com/59691442/223539428-e51d349e-aaee-4012-9d8b-7c21806af833.png)
![screenshot3](https://user-images.githubusercontent.com/59691442/223539427-0c7616ed-8d45-4aa5-a060-f49c54c97885.png)

## Demo video

https://user-images.githubusercontent.com/59691442/219550627-16660c09-dbea-41f3-ba15-3d7aaafca6d9.mp4

## Package installation

To install it type `npm install particle-simulator-react-p5` in your terminal to install it.

Then you can import it in your project with `import ParticleSimulator from 'particle-simulator-react-p5'`.

## Usage

To use it you can simply add the component in your project like this:

```jsx
<ParticleSimulator particleCount={isMobile ? 1000 : 3000}
                   fixedDeltaTime={1 / 50}
                   frameRate={60}
                   spawnAreaWidth={100} spawnAreaHeight={100}/>
```

The component takes 6 props:

- `particleCount`: the number of particles to spawn
- `fixedDeltaTime`: the fixed delta time to use for the physics simulation (in seconds)
- `frameRate`: the frame rate to use for the physics simulation (in frames per second)
- `spawnAreaWidth`: the width of the spawn area
- `spawnAreaHeight`: the height of the spawn area

This will create a canvas with 3000 particles on desktop and 1000 on mobile.

> **Note**  
> The number of particles can be limited by the browser. That's why you should not set a too high number of particles.
> To check if your app is running under a mobile device you can use the `isMobile` variable from
> the `react-device-detect` and set the number of particles accordingly.

You can find an example of the project in the github
repository [here](https://github.com/Im-Rises/particle-simulator-react-p5).

## Controls

The particles are initially attracted to the mouse, but you can toggle attract/repel by clicking with the mouse
button on a screen.  
On tablet and mobile de the touch screen to move the particles by dragging your finger. To toggle
attract/repel tap on the screen.

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
