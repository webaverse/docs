---
id: bake-animations
title: Bake Animations To Use in Webaverse
---

This guide explains how you can export your 3D content from Blender to bring it into Webaverse.
 
## Method

### Prerequisites
- Have [npm installed](https://www.npmjs.com/get-npm)
- Have [Webaverse App Cloned](https://github.com/webaverse/app)


#### 1. Navigate to the directory where metaverse app is cloned.

#### 2. Open the terminal inside the root folder

#### 3. Run `npm install`

#### 4. Place your animations inside the `public/animations` folder

#### 5. Run the command `node animations-baker.mjs ./public/animations/*.fbx ./public/animations/animations.cbor`

#### 5. After that run `npm start`

#### 6. Open browser and navigate to [WebaverseApp](http://localhost:3000)


## Demo
[[Video](../../static/animation-baker.mov)]
