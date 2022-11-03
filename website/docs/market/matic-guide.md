---
id: matic-guide
title: Matic Marketplace Instructions
---

If you want to sell your NFTs on the Opensea marketplace without paying crazy high gas fees with Ethereum then the Matic option is for you. After you have minted your NFT, there is an option on the item's page under `Trade` to transfer to Matic mainnet. There is some setup involved first before you can use this option.

Please note: this feature is still under heavy development. If you get stuck or have any questions reach out to us on [Discord](https://discord.gg/3byWubumSa)!

**Pre-requisites**

- Metamask: https://metamask.io/
- Ethereum in your wallet (gas fees)

## 1. Getting Matic

You can either buy Matic off a centralized exchange like [Binance](https://www.binance.com/en/trade/MATIC_BTC) or exchange some Ethereum for it using a decentralized exchange like [Uniswap](https://app.uniswap.org/#/swap). There's a gas fee to do the swap, hopefully it's not too much. If Uniswap asks if you want to add MATIC to Metamask say yes and add token, your balance will then appear in your wallet.


## 2. Switching Metamask Networks

The easy way to do this is to go to https://quickswap.exchange/ and then click `Switch to Matic` at the top right next. This will open up Metamask with Matic's URL configured for you. You can verify the settings or do this manually as well: https://docs.matic.network/docs/develop/metamask/config-matic/.

![Matic configuration](/img/matic-config.jpg)

## 3. Move funds to Polygon Network

Next we have to move the Matic from ETH mainnet to Polygon network (Layer 2). Go to https://wallet.matic.network and login via Metamask. Now click the button `Move Funds to Matic Mainnet`.

![move to matic](/img/move-to-matic.jpg)

In the `FROM` section, change from Ethereum to Matic token. Add however many you want to transfer to the Matic network then hit transfer. This process will typically take 7-8 minutes and cost some gas. Hit continue and wait.

## 4. Transfer NFT to Matic Network

At this point you are ready to transfer any NFT that you [mint](../create/mint) to the polygon network. If you already minted something, head over to the asset's page directly or from your profile on the Webaverse [website](https://webaverse.com).

Make sure your Metamask is set to Matic network, then:
  1. Open Metamask and click the network button
  2. Select Matic Network (configured from step 2)
  
![Set metamask to Matic network](/img/metamask_matic.jpg)

Then head to the page for your asset and click current location to open the transfer menu. Hitting transfer will open up Metamask asking you to pay the transaction fee to move the NFT to the other chain.

![Transfer to polygon](/img/transfer-polygon.jpg)

After you signed the transaction, wait a few moments for the opensea page to be updated. Check https://opensea.io/account?tab=activity to see when it shows up.

## 5. Selling on Opensea

The item you transferred to Polygon network will automatically appear in your [Opensea account](https://opensea.io/account?tab=activity). You can click "Sell" to list it for purchase with Ethereum on the open marketplace. Cheers!
