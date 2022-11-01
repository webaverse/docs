---
id: items
title: Items
---
![NFTs in the same space](/img/nft_items.jpg)

The Webaverse 3D app composes unique digital items, technically known as non-fungible tokens (NFTs), in the same shared space. Anything from [Avatars](./avatars), [Parcels](./parcels), Images, and 3D items can be NFTs. The engine supports the most popular file formats for NFT content:

| ASSET type  | File format |
| ----------- | ----------- |
| 3D Models   | glTF (.glb) |
| Avatars     | VRM         |
| Images      | PNG, GIF, JPG (lossy)  |
| Video       | WEBM, MP4   |
| Audio       | MP3         |
| Voxels      | vox         |
| Text        | Txt         |
| Websites    | HTML        |
| Scripting   | Javascript, WebAssembly  |


Items are hosted on distributed filesystems ([IPFS](https://ipfs.io)) and built with the standards that power NFTs ([ERC-721](https://eips.ethereum.org/EIPS/eip-721)), ensuring that your avatars, parcels, items, and any other items are completely owned and managed by you.

## Inventory

You can access all of the digital assets you own in Webaverse in your inventory a couple different ways. From Discord you can type `.inventory` in a server the [Discord bot](https://webaverse.com/discordbot) is installed in. You can also go to the [main website](https://webaverse.com/) and click the icon on the top right to see your profile page that has your inventory there.
  
![profile inventory](/img/inventory.jpg)

## Trading Cards

Every NFT minted on Webaverse gets a trading card format version of it generated from the [preview server](../developer/architecture#preview-flow). Everything but the asset file itself is hosted on-chain. The asset file is hosted on IPFS.

The purpose of the cards is first that it's fun but second that it actually serves a utility by combining all the useful information about the NFT onto 1 object that can be brought into digital and physical worlds.

![](/img/tradingcards.jpg)

The battle stats are randomly generated attributed determined upon minting. The stats, such as hp, mp, attack, defense, etc, can be optionally used by developers or not. There are different elemental types such as fire, grass, water, as well as rarities like common up to legendary.

Whenever you mint a NFT you might just land some pretty epic stats that can provide additional collector appeal to your item!


## How Can I Mint NFTs?

![](/img/items_mint.jpg)

Creating your own unique items in Webaverse is very easy, you don't need any kind of crypto background to get started.

You can mint NFTs simply by dragging and dropping a file into the [Webaverse mint page](https://webaverse.com/mint) or [Discord](https://discord.gg/R5wqYhvv53). There's currently a 10 SILK fee for minting. If you want a step-by-step guide on how mint NFTs, check out [this guide](../create/mint).



## SILK vs NFTs

SILK is a fungible token which means that any one SILK is equivalent to another. You can think of currency or grains of rice as an example of something that's fungible.
  
![fungible token example](/img/equalft.png)
  
On the other hand, NFTs are non-fungible which means, no two NFTs are the same. Unique assets such as the Mona Lisa or land are considered non-fungible. 
  
![non-fungible token example](/img/nftsexample.png)

## FAQ


### Technically, what are NFTs?

NFT stands stands for Non-Fungible Token. The term and the NFTs in Webaverse are based off the Ethereum [ERC-721](https://eips.ethereum.org/EIPS/eip-721) token standard.

Non-fungible means that it is not interchangable, so while you can trade NFTs, you'll never have an exactly equivalent trade. NFTs are not interchangable, unlike a fungible token like [SILK](./silk).

By default, all transactions (buying, selling, trading, etc.) are done on the Webaverse sidechain. Using the Webaverse sidechain allows for extremely fast and completely free transactions.

If you want to transfer your SILK or NFTs to the main Ethereum chain, you can do so from the item page on the website. Note: users have to pay the gas transaction fee to do the transfer.

![Transfer to mainnet](/img/xfer_chain.jpg)

The ability to move to the Ethereum blockchain also allows you to sell your NFTs on a marketplace like OpenSea.

### What happens when I mint a NFT?

When you mint a file from the web interface or Discord bot it gets automatically uploaded to [IPFS](https://ipfs.io/) with data about the token uploaded to the Webaverse sidechain. Gas is free since it's all on the [sidechain](https://ethereum.org/en/developers/docs/layer-2-scaling/#sidechains), a separate blockchain which runs in parallel to mainnet and operates independently. You can choose to then move it to mainnet afterwards, just pay the transaction fees.