---
id: avatar-system
title: Avatar System
---
# Avatar System

Webaverse supports many avatars in the game. By default the player has one avatar.

## Activating Avatars

We can add many more avatars into a scene. Those avatars can be activated if the player gets near the avatar and then activates the swap command with the `E` button.

---

## Avatar Setup

Avatars can be set up as objects in a .scn (Scene) file.

```js
{
    "position": [
        -26,
        0,
        -2
    ],
    "quaternion": [
        0,
        0.707,
        0,
        0.707
    ],
    "start_url": "https://webaverse.github.io/app/public/avatars/scillia.vrm",
    "dynamic": true
}
```

### Breakdown

* `Position`
    * Object's position in 3D world. (0,0,0) is the center of the world

* `Quaternion`
    *   Object's rotation calculated in Qaternions. (0,0,0,0) is default. For more information take a look here https://threejs.org/docs/#api/en/math/Quaternion

* `Start_url`
    * Location where the avatar object is located. We have many options to choose from to provide information about an object's definition. Look for the Object loading system for more information. In this particular example we are loading a 3D model from a remote location via url https://webaverse.github.io/app/public/avatars/scillia.vrm

* `Dynamic`
    * Should we load object dynamically?

---

## Object loading system

We can load many object types into our 3D world. Supported object types are: 
* `.glb` 
* `.vox` 
* `.vrm` 
* and our own custom types for scene configuration 

We can load an object from a **local directory** *(for example `"start_url": "/public/avatars/scillia.vrm"`)* or from a **remote location** *(for example `"start_url": "https://webaverse.github.io/app/public/avatars/scillia.vrm"`)*.

Webaverse provides solutions for complex object loading with JavaScript file loading.
The folder structure looks like this:

```
.
└───textures
└───.metaversefile
└───index.js
└───manifest.js
└───README.md
```

.totum is the entry point for loading.

```js
{   
    "start_url": "index.js",
    "components": []
}
```

---

### Breakdown
* `start_url` – it can be 3D model file `.glb` `.vox` `.vrm` or JavaScript file. If we provide JavaScript file, we can import complex Three.js objects with many custom properties and with update function as well.

* `components` – custom components passed directly to Webaverse app object

---
