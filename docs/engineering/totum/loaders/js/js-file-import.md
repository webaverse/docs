---
id: js-file-import
title: JavaScript File Import
---
# JavaScript File Import

With JavaScript we can import complex Three.js objects into our game. Those objects can even have custom update functionality that enables interaction with physics, etc.

## Example File

A typical file looks like:

```js
import * as THREE from 'three';
import totum from 'totum';
const {useApp, useFrame, useActivate, removeApp, usePhysics} = totum;

export default () => {

    const app = useApp();
    const physics = usePhysics();

    const mesh = new THREE.Mesh(geometry, material);
    app.add(mesh);
    physics.addGeometry(mesh);

    useFrame(() => {
        mesh.position.set(0,0,0);
    });

    useActivate((0 => {
        removeApp(app);
        app.destroy();
    });

    return app;  
};
```

### Options

There are many options here, most importantly:

* Our custom loader can access Webaverse via 'totum' import.
* A Webaverse scene is composed of apps. Every 3D object that we want to add needs to have its own app. 
* Useful functions are:
    * `useApp` – it creates an app for our new 3D object. App is chained in internal Webaverse system
    * `useFrame` – update function. It will be called from Webaverse update function in every frame
    * `usePhysics` – it gives access to physics subsystem. PhysX compiled with WASM is our physics engine. When we get access to physics system, we can create capsule or box collider for our object and physics subsystem which will take control of our 3D object
    * `useActivate` – when a player gets near our object it will be presented with `E` icon. If he press `E` button this function will be called. That way we can trigger some action, like object transformation, animation or we can remove the object from the scene
    * `removeApp` – it is used for unchaining our app from the Webaverse scene

    ---
