---
id: loading-flow
title: Loading Flow
---

![](/img/loading-flow.jpg)

This flow describes how the engine accesses and loads tokens. The loading and [preview flow](./preview-flow) are both quite similar to each other, main difference being one loads in client for users while the other loads in a server for capturing preview media.

1. Starts with the user-agent (Webaverse website or NFT Discord bot) that wants token data.
2. Client request a token json which intiates sidechain sending token events to the Redis server.
3. The API server sends the token json containing an IPFS hash to the files
4. The IPFS hash is extracted from the token json to the IPFS server
5. The raw files linked from the IPFS hash (jpg, png, gif, mp3, mp4, webm, glb, VRM, WBN) get loaded into the interface (virtual world, Opensea).

---

## Vertical view

![](/img/loading-flow2.jpg)