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

## [Quick Start Basics](../quick-start-basics)

### Directory Structure

```bash

**Root**

├─── index.js <--- Main Application Logic Resides Here

```
---

## Add to your server


[Invite the Webaverse bot to your server](https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot)

---