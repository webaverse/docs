---
id: nfts 
title: NFTs 
---
![NFTs in the same space](/img/nftstogether.png)
  
The Webaverse 3D app is built by having a bunch of spatial NFTs together in the same shared space. Anything from [Avatars](./avatars), [Parcels](./parcels), Images, and 3D items can be NFTs. The engine supports the most popular file formats for NFT content:

| ASSET type  | File format |
| ----------- | ----------- |
| 3D Models   | glTF (.glb) |
| Avatars     | VRM         |
| Images      | PNG, GIF, JPG (lossy)  |
| Video       | WEBM, MP4   |
| Audio       | MP3         |
| Text        | Txt         |
| Scripting   | Javascript, WebAssembly  |


With NFTs you can have complete ownership over your digital assets. Your avatars, parcels, items, and any other NFTs are completely owned by you and can only be managed by you.

Working with NFTs in Webaverse is very easy, you don't need any kind of crypto background to get started.

## How Can I Mint NFTs?

You can mint NFTs simply by dragging and dropping a file into the [Webaverse mint page](https://webaverse.com/mint) or [Discord](https://discord.gg/R5wqYhvv53). There's currently a 10 SILK fee for minting. If you want a step-by-step guide on how mint NFTs, check out [this guide](../create/mint).

## Inventory

You can access all of the digital assets you own in Webaverse in your inventory a couple different ways. From Discord you can type `.inventory` in a server the [Discord bot](https://webaverse.com/discordbot) is installed in. You can also go to the [main website](https://webaverse.com/) and click the icon on the top right to see your profile page that has your inventory there.
  
![profile inventory](/img/inventory.png)

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

If you want to transfer your SILK or NFTs to the main Ethereum chain, you can do so from the ASSET item page on the website. Note: the user has to pay a gas transaction fee to do the transfer.

![Transfer to mainnet](/img/xfermainnet.jpg)

The ability to move to the Ethereum blockchain also allows you to sell your NFTs on a marketplace like OpenSea.

### What happens when I mint a NFT?

When you mint a file from the web interface or Discord bot it gets automatically uploaded to [IPFS](https://ipfs.io/) with data about the token uploaded to the Webaverse sidechain. This process takes 0 gas because its all on the [sidechain](https://ethereum.org/en/developers/docs/layer-2-scaling/#sidechains), a separate blockchain which runs in parallel to mainnet and operates independently. You can choose to then move it to mainnet afterwords, just pay the transaction fees.