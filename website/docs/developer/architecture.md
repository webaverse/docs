---
id: architecture
title: Architecture Overview
---


View miro: https://miro.com/app/board/o9J_lbA81ag=/


- https://github.com/webaverse/ethereum-bot -- discord client
- https://github.com/webaverse/app -- front end game app
- https://github.com/webaverse/api-backend -- API backend
- https://github.com/webaverse/redis-server -- Redis server
- https://github.com/webaverse/ipfs-backend -- IPFS server
- https://github.com/webaverse/contracts -- contracts and deployment with truffle



---

## Minting Flow

This is what happens when a user uploads a file to a Webaverse interface be minted as a NFT.

1. User logs into website through Metamask, Discord, or Email or joins a Discord server with the NFT bot.
2. Uploads files to minting interface (jpg, png, gif, mp3, mp4, webm, glb, VRM, WBN)
3. The content uploads to IPFS. Webaverse runs its own pinning server.

![](/img/minting-flow.jpg)
[Link to vertical view](/img/minting-flow2.jpg)

After minting, the preview server captures a preview of the NFT and generates a trading card format. To learn more see [preview flow](./preview-flow).

---

## Transfer Flow

This is what happens when you want to transfer a NFT from the sidechain over to other blockchains like Polygon (previously Matic) and Ethereum mainnet.

1. Start with NFT that's on the Webaverse sidechain in your inventory
2. Hit "Current Location" to go to transfer menu, for this example can select Polygon
3. Transfer will call the Deposit() function on the smart contract to the sidechain
4. Get back transaction hash, Signing Oracle will say whether some fact of it is true or false
5. Whatever answer is, will signs off on that fact with ECDSA signature
6. The smart contract will then call Withdraw() to Polygon Network
7. The item will now be visible on [Opensea.io](https://opensea.io) with the Matic tag

![](/img/transfer-flow.jpg)
[Link to vertical view](/img/transfer-flow2.jpg)

---

## Loading Flow

This flow describes how the engine accesses and loads tokens. The loading and preview flow are both quite similar to each other, main difference being one loads in client for users while the other loads in a server for capturing preview media.

1. Starts with the user-agent (Webaverse website or NFT Discord bot) that wants token data.
2. Client request a token json which intiates sidechain sending token events to the Redis server.
3. The API server sends the token json containing an IPFS hash to the files
4. The IPFS hash is extracted from the token json to the IPFS server
5. The raw files linked from the IPFS hash (jpg, png, gif, mp3, mp4, webm, glb, VRM, WBN) get loaded into the interface (virtual world, Opensea).

![](/img/loading-flow.jpg)
[Link to vertical view](/img/loading-flow2.jpg)

---

## Preview Flow

The preview server is a headless chromium instance that generates screenshots and animations of items via puppeteer. It's also in charge of generating unique trading cards for every NFT item minted. Here's how it works:

1. Start with user-agent (website or Discord bot) requesting a preview image.
2. Request gets sent to the preview server, checks S3 cache if there's a preview already.
3. If there's no preview, the server will ask the API about the token and fetch the IPFS content
4. The files from the IPFS hash get rendered using Puppeteer, exported as previews.

![](/img/preview-flow.jpg)
[Link to vertical view](/img/preview-flow2.jpg)