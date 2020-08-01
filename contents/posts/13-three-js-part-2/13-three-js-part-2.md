---
title: Three JS (part-2)
slug: /13-three-js-part-2
date: 2019-03-23
desc: Meshes and Geometry in Three-js
# Old URL
# Minute Read
cover:
  img: ../../../photos/13-three-js-part-2.png
banner: ../../banners/13-three-js-part-2.png
tags:
  - JS
---

import ImgPost from '../../../src/components/imgPost'
import LinkPost from '../../../src/components/linkPost'
import SphereGif from './1.gif'
import Stat from './2.gif'
import Triangle from './3.png'
import TrianglesType from './4.png'

## Introducing Meshes and Geometry

<mark>Meshes:</mark>
Meshes are made up of two different things:

1. Geometry
2. Material

### 1️⃣ Geometry

It’s made of an array which is X, Y and Z coordinate called vertices. They          are linked together with faces(___).

**Two important attribute:**
- Vertices
- Faces

**There are three types of geometry:**
<ImgPost src={TrianglesType} alt="types of triangle" />
A. Inbuilt Geometry
B. Custom Geometry
C. Exported Geometry(geometric exported from three js modelling packages )

### 2️⃣ Material

A material defines a covering for skeleton structure. There are lots of different types of material in Three.js:

We can create a dull, mate-like material or shiny , slightly  transparent material.

Material are a big area and have their own module.

**Types of Geometry:**

### A. Inbuilt Geometry 📐

Three.js has large number of inbuilt geometry.

There are different set of geometry comes here in <LinkPost href='https://threejs.org/docs/index.html#api/en/core/Object3D' name='Geometries' /> section.

*Example: sphereGeometry*

```js
THREE.SphereGeometry(
  radius,
  widthSegments,
  heightSegments
)
```

Most of inbuilt geometry has two different types of properties:
- First parameter is a Size related properties => this will define how large should be property. (While working with sphereGeometry size will be radius.)
- Second and third parameter allow us to specify the number of segments the object made up of. The more segment the more smooth object will be. (If we give more segment, it needs super device so it should support that.)

<u>index.html</u>

```html
<!DOCTYPE html>
<html>
<head>
	<title>Sphere</title>

</head>
<body>
	<div id="webgl-container">
	</div>
	<script src="script/three.js"></script>
	<script src='script/app.js'></script>
</body>
<style type="text/css">
	body{
		margin: 0;
	}
</style>
</html>
```
<u>app.js</u>

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
		var material = new THREE.MeshBasicMaterial({
			color: 0xff0000,
			wireframe: true
		})

		// Adding box
		box = new THREE.Mesh(
			// First argument BoxGeometry is for defining dimesion of cube
			new THREE.SphereGeometry(20,30,30),
			// Second Parameter MeshBasicMaterial is sort of covering of the cube.
			material
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
<ImgPost src={SphereGif} alt='Sphere Gif' width={60} />

To check the performance of the object we can use stats library. Stats library is separate from Three.js library. Let’s include it in our application now

We can add <LinkPost href='https://github.com/mrdoob/stats.js' name='stats' /> reference into index.html

<u>index.html</u>

```html
<script src="script/stats.js"></script>
```

<u>app.js</u>

```js
var stats;
Inside InitScene():
// adding stats to check performance
	stats = new Stats();
	stats.setMode(0);
	stats.domElement.style.position = 'absolute'
	stats.domElement.style.left = '0px'
	stats.domElement.style.top = '0px'
	document.body.appendChild(stats.domElement);
render()

Inside render() function:
stats.update();
```

#### OutPut
<ImgPost src={Stat} alt='Stat Gif' width={20} />

### B. Custom Geometry 🔺

To create a custom geometry from scratch we need to do following steps:

You can find Code Snippet for custom triangle <LinkPost href='https://github.com/suprabhasupi/Three-JS-Demos/tree/master/custon-trinagle' name='here' />.

#### <mark>3D Model</mark>
- Three.js does have support for various 3D modeling package formats, it’s replay not the best format to load. The reason for this is they never really meant for the web because the can be quiet large. Some web server requires you to specify something called a MIME type before they will serve them up correctly. Three.js is using Three.js own modeling format.
- Three.js supplies number of different converters, which we can plugin into 3d modelling application to export your model in three.js format. This can be doable using **Blender**.
- Blender is a free open source 3D modeling package.
- How to export a blender model to three.js:
    - To install Three.js exporter for, blender.

*Example:*

```js
var triangleGeometry;
In initScence() function:
// Adding custom triangle
		var triangleGeometry = new THREE.Geometry();
		// define the shapes with vertices
		triangleGeometry.vertices.push(new THREE.Vector3(0.0, 1.0, 0.0));
		triangleGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
		triangleGeometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
		// we need to define how these link together using faces
		triangleGeometry.faces.push(new THREE.Face3(0,1,2,3));

		// trial we can deifne color to each vertice
		triangleGeometry.faces[0].vertexColors[0] = new THREE.Color(0xFF0000);		// red for both side
		triangleGeometry.faces[0].vertexColors[1] = new THREE.Color(0x00FF00);		// green for above
		triangleGeometry.faces[0].vertexColors[2] = new THREE.Color(0xFF0000);		// red for both side

		// adding mesh
		var manualGeometry = new THREE.Mesh(triangleGeometry, material)
		// add into scence
		scene.add(manualGeometry);


// If we don't create mesh material THREE.js will create automatic some color here
	var material = new THREE.MeshBasicMaterial({
		vertexColors: THREE.VertexColors,
// we have written dobleside here because if we don't write then on other side there will no color.
		side: THREE.DoubleSide
    })
```

#### OutPut
<ImgPost src={Triangle} alt='Sphere Gif' width={40} />

### C. Exported Geometry △

Geometry Exporter will export only shape or geometry individually.

Once we want to export the whole screen, we can use `sceneExporter.js`

Import GeometryExporter in `index.html`

(You can find full snippet in <LinkPost href='https://github.com/suprabhasupi/Three-JS-Demos/tree/master/export-geometry' name='github' />)

```js
<script src="script/GeometryExporter.js"></script>
	sphere = new THREE.Mesh(
		new THREE.SphereGeometry(
			20,
			10,
			10)
		,material)

	sphere.name = 'sphere'

// create the instance for geometry exporter
	var exporter = new THREE.GeometryExporter();
	// then tell we need to pass the geometry sphere here
	var exportedSphereObject = exporter.parse(sphere.geometry);
	// and then can serialize it by using JSON.stringify
	var seializedExportedGeo = JSON.stringify(exportedSphereObject);

	// We can save it anywhere. local storage or directly console log it.

	console.log('serialized--->>', seializedExportedGeo)
	// We can load the above created geometry here:
	// create new three json loader
	var loader = new THREE.JSONLoader();
	// tell the loader to parse JSON
	var model = loader.parse(JSON.parse(seializedExportedGeo));
	// create a new instance of the mesh passing geometry and material
	var mesh = new THREE.Mesh(model.geometry, material);
	// then finally add it to the scene
	scene.add(mesh);

    render();
```

#### Output can be checked in console block as:


`{“metadata”:{“version”:4,”type”:”geometry”,”generator”:”GeometryExporter”},”vertices”:[0,20,0 ….. ……………………………}`



## Reference ※

- <LinkPost href='https://app.pluralsight.com/player?course=webgl-threejs-fundamentals&author=alex-mackey&name=webgl-threejs-fundamentals-m3&clip=3&mode=live' name='Pluralsight webgl threejs' />





