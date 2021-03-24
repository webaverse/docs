---
id: discord-bot 
title: Discord Bot 
---

The Discord Bot allows anyone to manage their profile, items inventory, avatar, and create just by typing into Discord.

You can interact the Webaverse Discord Bot by inviting it to your Discord server [here](https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot). Or you can interact with the bot by joining the [Webaverse Discord](https://discord.gg/3byWubumSa) server.

The Discord Bot runs on an Ethereum side chain and allows you to interact with the blockchain by running commands in Discord like `.inventory`. There’s no setup required, anybody in the Discord server the bot is installed in will already have an Ethereum address generated for them.


## Info 

### `.help`
show help

### `.status`
show your account details

### `.balance [@user|0xaddr]`
show your FT balance, or that of a user/address

### `.inventory [@user|0xaddr]`
show your NFTs, or those of a user/address

### `.address [@user]`
print your address, or that of a user

### `.key`
get your private key in a DM

### `.login`
get a login link in a DM

### `.play`
get a login link in a DM to go directly into the 3D Webaverse

### `.realm [num]`
play link in a DM to go directly into the 3D Webaverse in that realm [1-5]

## Tokens

### `.send [@user|0xaddress|treasury] [amount]`
send [amount] of SILK to user/address

### `.transfer [@user|0xaddress|treasury] [id] [quantity]`
send [quantity] [id] NFTs to user/addr/treasury

### `.preview [id]`
show preview of NFT [id] in channel

### `.gif [id]`
show animated gif of NFT [id] in channel

### `.wget [id]`
get NFT [id] delivered in DM

### `.get [id] [key]`
get metadata key [key] for NFT [id]

### `.set [id] [key] [value]`
set metadata key [key] to [value] for NFT [id]

### `.tokencollab [@user|0xaddr] [tokenId]`
add collaborator to [tokenId]


## Account 

### `.name [newname]`
set your name to [name]

### `.monetizationpointer [mp]`
set your monetization pointer to [mp]

### `.avatar [id]`
set your avatar to [id]

### `.loadout [num] [id]`
set loadout NFT [1-8] to [id]

### `.homespace [id]`
set NFT as home space

### `.redeem`
redeem NFT roles

## Minting

### `.mint [count] (in upload comment)`
mint [count] NFTs from file upload

### `.mint [count] [url]`
mint [count] NFTs from the provided [url]

### `.update [id] (in upload comment)`
update nft content

## Packs

### `.packs [@user|nftid]`
check packed ft balances of [@user] or [nftid]

### `.pack [nftid] [amount]`
pack [amount] ft from yourself into [nftid]

### `.unpack [nftid] [amount]`
unpack [amount] ft from [nftid] to yourself

## Trade

### `.trade [@user|0xaddr]`
start a trade with user/address

### `.addnft [tradeid] [nftid]`
add nonfungible token to trade [tradeid]

### `.removenft [tradeid] [index]`
remove nonfungible token at [index] from trade [tradeid]

### `.addft [tradeid] [amount]`
add fungible tokens to trade [tradeid]

## Store

### `.store [@user]`
show the treasury store, or that of a user

### `.sell [nftid] [price]`
list [nftid] for sale at [price]

### `.unsell [saleid]`
unlist [saleid] from the store

### `.buy [saleid]`
buy the [saleid] from [@user]

## Land

### .parcels
list owned parcels

### .deploy [parcelId] [nftId]
deploy [nftId] to [parcelId]

### .landcollab [@user|0xaddr] [parcelId]
add collaborator to [parcelId]

## Key Management (DM to bot)

### `.key [new mnemonic key]`
set your Discord private key

### `.key reset`
generate and set a new Discord private key