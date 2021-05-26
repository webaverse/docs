---
id: transfer-flow
title: Transfer Flow
---


![](/img/transfer-flow.jpg)

This is what happens when you want to transfer a NFT from the sidechain over to other blockchains like Polygon (previously Matic) and Ethereum mainnet.

1. Start with NFT that's on the Webaverse sidechain in your inventory
2. Hit "Current Location" to go to transfer menu, for this example can select Polygon
3. Transfer will call the Deposit() function on the smart contract to the sidechain
4. Get back transaction hash, Signing Oracle will say whether some fact of it is true or false
5. Whatever answer is, will signs off on that fact with ECDSA signature
6. The smart contract will then call Withdraw() to Polygon Network
7. The item will now be visible on [Opensea.io](https://opensea.io) with the Matic tag

---

## Vertical view

![](/img/transfer-flow2.jpg)