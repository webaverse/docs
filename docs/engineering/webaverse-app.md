---
id: app
title: App
---
# App - Quick Start Guide

## Introduction

### Features

- Custom file type loaders (GLSL, VRM, VOX, GLTF, WBN)
- PhysX compiled to WebAssembly for collisions/raycasting
- Custom avatar IK + WebXR support
- Character controller w/ animation blend system
- Multiplayer powered by y.js, mediasoup, and WebRTC
- IPFS + Geth integration for pulling assets

---

## Examples

<a href="https://i.imgur.com/WhmtEDV.gif">
  <img alt="Wearables" target="_blank" src="https://i.imgur.com/WhmtEDV.gif" height="190" width="32%"/>
</a>
<a href="https://i.imgur.com/8MOpwnn.gif">
  <img alt="Pets" target="_blank" src="https://i.imgur.com/8MOpwnn.gif" height="190" width="32%"/>
</a>
<a href="https://i.imgur.com/g7RBgp6.gif">
  <img alt="WebXR" target="_blank" src="https://i.imgur.com/g7RBgp6.gif" height="190" width="32%"/>
</a>

<a href="https://i.imgur.com/QQg3z4A.jpg">
  <img alt="Editor" target="_blank" src="https://i.imgur.com/QQg3z4A.jpg" height="190" width="32%"/>
</a>
<a href="https://i.imgur.com/EFyvdx2.jpg">
  <img alt="Street" target="_blank" src="https://i.imgur.com/EFyvdx2.jpg" height="190" width="32%"/>
</a>
<a href="https://i.imgur.com/ydNfbwD.jpg">
  <img alt="Builder" target="_blank" src="https://i.imgur.com/ydNfbwD.jpg" height="190" width="32%"/>
</a>

---

 ## Before You Begin
 
Before you begin we recommend you read about the basic building blocks that assemble an application:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

---

## Quick Install

Once you've installed all basic building blocks, you're just a few steps away from starting to develop your application. To clone and run this repository excute these command using command line:


```bash

# Clone this repository

git clone --recurse-submodules https://github.com/webaverse/app.git

# Go into the repository

cd app/

```
To install the dependencies, run this in the application folder from the command-line:
```bash

# Install dependencies

$ npm install

```

---

## Running Your Application


Run your application using npm:

```bash

# Run the app (in background)

$ npm run dev

```


### Doesn't Re-compile automatically


The application uses vite to hot reload itself automatically if there is any changes to any file.

> Any change inside `packages` folder don't recompile automatically for which we have restart the development server by using `npm run dev`

---

## Development Environment Setup

  
> Preffered tool for development is [VSCode](https://code.visualstudio.com/download)
  

### Directory Structure

  

```bash

**Root**

│

├───src <--- React Application Resides Here

├───Main.jsx <-- Rgisters the routes of the React App and Load Dom

├───App.jsx <-- Loads Webaverse.js from Root directory

│

├─ index.js <-- This starts the vite server that serves the React App

│

├─ webaverse.js <-- This is the entry point of the Webaverse

│

├─ io-manager.js <-- Controls the input events within the application.

...

```

---

### Setup ESLint


* Go to your extensions tab and search for `ESLINT`
  
![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

```bash

npm install eslint -g

eslint --init

```

---

### Setup Cutom Host

Please follow this [tutorial](https://github.com/abeersaqib/webaverse-docs/blob/main/setup-custom-host.md) to setup custom host.

