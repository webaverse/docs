---
id: twitter-bot
title: Twitter Bot
---

> Note: The Twitter Bot is still in development and is highly experimental. We're [hiring](https://www.notion.so/webaverse/Webaverse-is-Hiring-8fb49c069c2f450f93ebb911149f21bd) developers interested in these tools to help us build them. Here's the [source code](https://github.com/webaverse/ethereum-bot/blob/master/twitterBot.js) if interested in learning more about it.

The Twitter Bot allows anyone to manage their profile, items inventory, avatar, and create just by sending tweets and messages in Twitter.

You can interact the Webaverse Twitter Bot by tweeting `@cryptotestbot1` and then the command you want to send.

The Twitter Bot runs on an Ethereum side-chain and allows you to interact with the blockchain by running commands on Twitter like `inventory`. There’s no setup required, anybody on Twitter will already have an Ethereum address with the bot.

## Help

### `help`
Show a help list of commands to use with the bot. (this list)

## Account 

### `status`
show your account details

### `balance` 
show your FT balance, or that of a user/address

### `inventory [@user|0xaddr]`
show your NFTs, or those of a user/address

### `address [@user]`
show your address, or that of a user

### `key`
get your private key in a DM

### `.play`
get a login link in a DM to go directly into the 3D Webaverse.

## Account 

### `.name [newname]`
set your name to [name]

### `.monetizationpointer [mp]`
set your monetization pointer to [mp]

### `.avatar [id]`
set your avatar to [id]

### `.homespace [id]`
set NFT as home space

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

## Store

### `.store [@user]`
show the treasury store, or that of a user

### `.sell [nftid] [price]`
list [nftid] for sale at [price]

### `.unsell [saleid]`
unlist [saleid] from the store

### `.buy [saleid]`
buy the [saleid] from [@user]
