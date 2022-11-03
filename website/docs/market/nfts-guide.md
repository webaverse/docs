---
id: nfts-guide
title: How To Buy And Sell NFTs
---


## Discord



The [NFT Discord bot](https://webaverse.com/discordbot) generates an Ethereum address and storefront for every person in a server. Buying and selling NFTs on Discord happens on the Webaverse sidechain.

The sidechain is fast and has no transaction fees which make it great for real-time gaming. The trade-off is that there isn't any real world value flowing through the network. See the [Opensea](./nfts-guide#opensea) documentation below for how to transfer your NFTs to open marketplaces.



### Sell on Discord

There are a couple ways to sell NFTs to other users over Discord.

- `.sell [NFT ID] [Price]`  (Sell an item in your store for SILK)
- `.trade @user` (Trade another user)

The trade command allows you to exchange both SILK and items at once with other users on the server.

![trade window](/img/trade.png)

When you initiate the `.trade` command you will get a trade # since multiple trades can be happening at the same time on a server. Below are commands on adding SILK and NFTs to the trade.

```
.addft [trade number] [number of tokens]
.addnft [trade number] [NFT ID]
```

Tip: You can always refer back to your `.inventory` and `.inspect` to double check what NFTs you want to add to the trade.

### Buy on Discord

First determine the NFT id of the item you want to purchase. View the server store or a user's personal store.

```
# View the server store
.store

# View a user's store
.store @user

# Buy a NFT from another users store
`.buy + sale id`
```

> ![](/img/store.jpg)



If you want to learn more about the Discord Bot, you can [read more here](../webaverse/discord-bot) or join our [Discord server](https://discord.gg/R5wqYhvv53).

---

## Opensea

[Opensea](https://opensea.io) is the largest NFT marketplace. You can buy and sell Webaverse NFTs on there with a few different cryptocurrencies such as Ethereum, DAI, and USDC.


### Buy on Opensea

Webaverse NFTs are located here: [https://opensea.io/assets/asset-v3?search[chains][0]=MATIC)](https://opensea.io/assets/asset-v3?search[chains][0]=MATIC)


### Sell on Opensea

In order to sell your [items](/webaverse/items) on [Opensea](https://opensea.io) you need to transfer it to another chain such as Polygon or Ethereum mainnet. 

1. Login to [Webaverse.com](https://webaverse.com/) (could also type `.login` on Discord)
2. Go to the item asset page (can click on your profile)
3. Press current location on the left side of the page to see Transfer menu

![](/img/xfer_chain.jpg)

4. You will have to pay the gas fee to transfer to Ethereum or Polygon. If you want to transfer to Polygon, switch Metamask network to Matic ([see guide](./matic-guide)) before clicking Transfer.

