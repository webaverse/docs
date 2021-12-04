---

id: ethereum-bot-quickstart
title: Ethereum Bot Quick Start

---
# Ethereum Bot - Quick Start Guide

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

After minting, the preview server generates a screenshot of 3d models, animated webm for avatars, and playing card version of the token that's viewable with the .preview command.

---

## Quick Install

  

Clone and run this repository:

```bash

# Clone this repository

git clone https://github.com/webaverse/ethereum-bot

# Go into the repository  

cd ethereum-bot/

```

Install the dependencies:

```bash

# Install dependencies

$ npm install

```
  
---

## Running Your Application

Run your application:  

```bash

# Run the app (in background)

$ npm start

```

This command will run your application in background using [forever](https://www.npmjs.com/package/forever)

>List running processes:

```bash

# List processes

$ sudo forever list

```

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

> The app won't recompile automatically upon files changing so you'll have to restart the app to reflect said changes:  `npm stop && npm run dev`

---

## Development Environment Setup

> Our preferred tool for development is [VSCode](https://code.visualstudio.com/download)

  
### Directory Structure

  

```bash

**Root**

├─── index.js <--- Main Application Logic Resides Here

```
---

### Setup ESLint

* Go to your extensions tab and search for `ESLINT`

![VSCode ESLint Setup](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

  
```bash

npm install eslint -g

eslint --init

```
---
### Setup Cutom Host

Please follow this [tutorial](../setup-custom-host) to setup custom host.

---

## Add to your server


[Invite the Webaverse bot to your server](https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot)

---