---
id: scenes
title: Create Scenes
---

> This workflow is mostly for testing purposes because it will change in the future to become more streamlined, especially for artists.

![](/img/desert_world.jpg)

This guide is to teach you how to setup a custom scene to test the Webaverse app locally with. Included in the example is a mirror and floor portals (floortals!) that can link to other worlds seamlessly.


## Local Development

First need to download and install the app repo locally from: https://github.com/webaverse/app

```
$ git clone https://github.com/webaverse/app.git
$ cd app/
$ npm run install
$ node index
```

Once you've tested the local app to be working, we'll construct a custom home world to launch into. We'll build a sample project from scratch to understand each component. Download these two  repos into the root folder of the Webaverse app directory:

```
$ git clone https://github.com/madjin/desert.git
$ git clone https://github.com/webaverse/party.git
```

First go into the desert folder. Inside you will see the .glb 3D model file, the `manifest.json` which describes the model, and `desert.scn` which describes the world.

### Manifest.json

The `physics: true` line inside the `manifest.json` file instructs the app to bake the physics mesh at load time, enabling collisions. There's also a manual method that is documented here: https://docs.webaverse.com/docs/create/bake-physics.

```
{
  "name": "desert",
  "description": "Desert XRPackage",
  "start_url": "desert.glb",
  "physics": true
}
```

### Scene files

The other important file in there is `desert.scn` which is a JSON file describing the world and basic positioning info of apps being loaded into it.

```
{
  "objects": [
    {
      "position": [
        0,
        0,
        0
      ],
      "start_url": "http://webaverse.github.io/skybox/index.js"
    },
    {
      "position": [
        6,
        0.1,
        -4
      ],
      "quaternion": [
        0,
        0,
        0,
        1
      ],
      "start_url": "http://localhost:3000/party/party.url"
    },
    {
      "position": [
        0,
        0,
        0
      ],
      "start_url": "http://localhost:3000/desert/manifest.json"
    },	
    {
      "position": [
        0,
        0,
        -2
      ],
      "start_url": "https://webaverse.github.io/mirror/index.js"
    }
  ]
}
```

In one of those lines is `party.url`, which refers to the portal that can take you to other worlds. Lets take a look at the party directory located at the root of the Webaverse app project. Open `party.url` by drag and dropping it into your favorite text editor. If you change this line to point to another .scn file, you can target a different world to teleport to in-game.

### Constants.js

Return back to the root directory of the Webaverse app project and open `constants.js`. On line 43 you can change to a relative or hosted link to a .scn file to open the app with. For example:

`export const homeScnUrl = "./desert/desert.scn";`

Now refresh the browser page at http://localhost:3000 and you should see the desert with the mirror and floortal in front of you. Walk over to the floortal and press `E` to test it. You can hit backspace to return to the previous scene.

That's it, happy testing!
