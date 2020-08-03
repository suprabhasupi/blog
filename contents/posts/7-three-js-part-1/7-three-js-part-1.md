---
title: Three JS (part-1)
slug: /7-three-js-part-1
date: 2019-02-24
desc: Three.js provides a lot of functionality that makes it very easy to develop WebGL application.
# Old URL
# Minute Read
cover:
  img: ../../../photos/7-three-js-part-1.png
banner: ../../banners/7-three-js-part-1.png
tags:
  - JS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import Cube from './1.gif'


<p><span class='first-letter'>T</span>hree.js is one of the libraries of *WebGL*. Three.js provides a lot of functionality that makes it very easy to develop WebGL application.</p>

We will be covering it in two parts:
1. <LinkPost href='/7-three-js-part-1' name='Basics of Three.js' />
2. <LinkPost href='/12-three-js-part-2' name='Introducing Meshes and Geometry' />

## 1️⃣ Basics of <LinkPost href='https://threejs.org/' name='Three.js' />


Three.js provides a high level functionality:

- Graphical Primitives
- Three.js has own format optimized for web.
- Useful Math and helper functions.
- We have limited effect in Three.js: sprites, fog, particle engine
- WebGL is not supported in IOS.
- Need knowledge of JS as closure passing function.

#### Below are the basic steps to get started with Three.js:

1. Web browser as chrome
2. Some kind of web server (python or live-server)
3. VS Code
4. To run models and texture we need web server (IIS/ virtual directories)
    - https://github.com/mrdoob/three.js/
5. Document for run things locally
    - https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally
6. It uses R67 API’s
7. To create Three.js scene component we need:
    - Scene
    - Camera
    - Lighting
    - Anchor
8. Three.js uses cartesian coordinate system.

## Object 3D properties 

1. <mark>ID</mark> => Unique number of object instance will assigned automatically by Three.js.
2. <mark>UUID</mark> => Unique identifier again, created automatically by Three.js.
3. <mark>Name</mark> => we used for label the cube as ”box”. We can retrieve object by name.
4. <mark>Position</mark> => Location at the scene.
5. <mark>userData</mark> => Allows user object instance.
6. <mark>Parent/children</mark> => Scene is tree hierarchical and n number of children. The child/parent properties allows us to navigate the hierarchy.
7. <mark>lookAt</mark> => It will allow to rotate an object to face a vector.
8. <mark>getObjectByName</mark> => Retrieve the object by name.
9. <mark>getObjectById</mark> => Retrieve the object by Id.
10. In **debugger console**

```js
var box = exam.scence.getObjectByName(‘box’)
// check the value of box
box
// And here we can manipulate the value:
box.position.x = 10
box.position.y = 10
```

Check out <LinkPost href='https://threejs.org/docs/index.html#api/en/core/Object3D' name='here' />, to get more understanding about Object 3D.

Now we can create cube using Three.js by following steps:

Import `Three.js` from <LinkPost href='https://cdnjs.cloudflare.com/ajax/libs/three.js/101/three.js' name='here' /> into index.html file.

<u>index.html:</u>

```html
<!DOCTYPE html>
<html>
<head>
	<title>Cube</title>
</head>
<body>
	<div id="webgl-container">
	</div>
	<script src="script/three.js"></script>
	<script src='script/app.js'></script>
</body>
</html>
```


<u>app.js:</u>

```js
var exam = (function() {
	"use strict";
	// after importing scene from three.js we can use camera, lights adn any objects that we want to display.
	// Once we create scene, we need renderer. Renderer will tell how content will displayed on webpage by specifying the type of renderer to use.

	var scene = new THREE.Scene(),
		// Three.js has three rendering layer:
		// webgl: This is most feature rich and most performant.
		// canvas: Canvas doesn’t support all feature as WebGL does. It’s back option for those using older browser.
		// SVG: It’s not part of core library But it is available in example folder.
		renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
		light = new THREE.AmbientLight(0xffffff),
		camera,
		box;

	function initScence() {
		// rendering content should present
		renderer.setSize(window.innerWidth, window.innerHeight);
		// where to render
		document.getElementById("webgl-container").appendChild(renderer.domElement);
		// add light
		scene.add(light)
		// initialize camera
		// Three.js has two main type of camera:
		// 1. PerspectiveCamera which we using, 2. called autographic camera (it will show as SimCity Game. In that we have to integrate multiple camera)

		camera = new THREE.PerspectiveCamera(
			// First varibale id FOV is camera frustum vertical field of view. Its' a view from top to bottom of the screen and is specified in degrees.
			// CHanging first varibale is like changing lens on the camera. For most values between 35 to 45 good match.
			// But we need to modify while creating games.
			35,
			// Next parameter is aspect ratio. And this is same sa TV or monitor. This is width/height of the container. We can use window. if we are using
			// for full screen. But if it takes just portion of the page then we need to modify this containing elemnt width and height.
			window.innerWidth / window.innerHeight,
			// last parameter defines near and far planes. Only objects that are inside this will be rendered. These values are useful for performance.
			// Three.js doesn't calculate outside the boundaries. when we add in our camera by default is's going to point to -Z access, so be looking
			//  into this screen, We can modify with LookAt method, but we are going to leave it for now.
			1,
			1000
		);
		camera.position.z = 100;
		// adding camera to scene
		scene.add(camera)

		// Adding box
		box = new THREE.Mesh(
			// First argument BoxGeometry is for defining dimesion of cube
			new THREE.BoxGeometry(20,20,20),
			// Second Parameter MeshBasicMaterial is sort of covering of the cube.
			new THREE.MeshBasicMaterial({color: 0xCCCCCC})
		);

		// box.name = "box";
		scene.add(box);
		// call the render function here
		render();
	}

	// To render the scene
	function render() {
		// rotating around y axis
		box.rotation.y += 0.01;
		// box.rotation.x += 0.01;
		// box.rotation.y += 0.01;
		// here we can call renderer
		renderer.render(scene, camera);
		// requestAnimationFrame si supported in modern browser and it will amke possible that animation should work smoothly.
		requestAnimationFrame(render);
	}

	// We need to kick off scene initialization here:
	window.onload = initScence;

	// Its doing foe debugging purposes.
	return {
		scene: scene
	}
})();
```

#### OutPut
<ImgPost src={Cube} alt='three js Cube' />

### Manipulating Objects:

1. How to change Position of object?
    - We can position by individual axis
    ```js
    Object.position.x = value
    Object.position.set(x,y,z)
    // Assign new vector free object by new position
    object.position = new THREE.Vector3(0,0,0);
    ```

2. Modified the size (scale):
    ```js
    Object.scale.x = value
    // Change the x axis to 2.5 means 25 units long.
    ```

3. How to rotate:
    - Radian is measured at the centre of the circle and then draw a line at its edge, let’s called the distance is R. Now wrap it at around of circle , this would be one radian.. There’s roughly 6.28 radian in a circle. which is 2* pi
      - Convert radians to degree: radians = degrees * (pi/180)
      - Convert degree into radians: degree = radians * (180/pi)

4. Child Objects and transforms:
    All transform property will apply reltaively to the parent on any child objects.


### Common Problems 🧐

Need to take care of few points:
- Don’t forget to add light into scene
- Check all scripts are loaded correctly in console or network tab
- Scale, sometime we forget to increase size
- The scene should come under the camera near and far position.


We have covered the basics concept of asics of three.js, bject 3D Properties and how can we manipulate objects.

We’ll check <LinkPost href='/8-three-js-part-2' name='Introducing Meshes and Geometry' /> in next section. 😋

