---
id: application-startup
title: Application Startup
---

# Webaverse - Ethereum Backend - Quick Start Guide

## Introduction

![image](https://user-images.githubusercontent.com/32600939/120109432-70841b00-c137-11eb-844e-e008430a20ac.png)


The Webaverse Bot utilizes an Ethereum sidechain to make it easy to create and trade NFTs for free inside Discord.

---

## Features

- Generates a wallet for everyone in the server for free
- Ability to import / export private keys
- Bring your inventory to other servers with the bot
- Redeem unlockable discord roles with a NFT
- Mint NFTs of different file types with drag and drop
- Trade and transfer NFTs + Fungible tokens in server
- Add unlockable content to NFTs
- Pack fungible tokens inside the NFTs
- Login to the dashboard and virtual world with a command
- Transfer NFTs to other chains like Ethereum / Polygon from web dashboard
---
## How does it work?

![image](https://user-images.githubusercontent.com/32600939/120109771-dfae3f00-c138-11eb-9077-9b86d23fbbe3.png)


1. User joins a Discord server that has the NFT bot, gets an Ethereum address (`.address` to verify)
2. The user uploads files with `.mint` as the comment (jpg, png, gif, mp3, mp4, webm, glb, VRM, WBN)
3. The file uploads to IPFS, Webaverse runs its own pinning server.
4. The IPFS hash is used as the asset URI when minting the token onto the Webaverse sidechain

After minting, the preview server generates a screenshot of 3d models, animated webm for avatars, and playing card version of the token that's viewable on the [dashboard](https://webaverse.com).

![mspaint_ymbV1KnjEf](https://user-images.githubusercontent.com/32600939/120110112-497b1880-c13a-11eb-9765-45c48d21a95e.png)

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

git clone https://github.com/webaverse/ethereum-bot

# Go into the repository  

cd ethereum-bot/

```

To install the dependencies, run this in the application folder from the command-line:

```bash

# Install dependencies

$ npm install

```

This command will install the dependencies needed for the application to run.
  
---

## Running Your Application

Run your application using npm:  

```bash

# Run the app (in background)

$ npm start

```

This command will run your application in background using [forever](https://www.npmjs.com/package/forever)

  

>You can stop this app by running this command:

```bash

# Stop the app running in background

$ npm stop

```

 If you don't want to run it in background for development purpose you can also run it using:

```bash

# Run the app

$ npm run dev

```

> Any changes don't recompile automatically for which we have to restart the development server by using `npm run dev`

---

## Development Environment Setup

> Preffered tool for development is [VSCode](https://code.visualstudio.com/download)

  
### Directory Structure

  

```bash

**Root**

├─── index.js <--- Main Application Logic Resides Here

```

### Setup ESLint

* Go to your extensions tab and search for `ESLINT`

![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

  
```bash

npm install eslint -g

eslint --init

```
### Setup Cutom Host

Please follow this [tutorial](https://github.com/abeersaqib/webaverse-docs/blob/main/setup-custom-host.md) to setup custom host.

---

## Add to your server


[Click me to invite the Webaverse bot to your server](https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot)

```

https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot

```