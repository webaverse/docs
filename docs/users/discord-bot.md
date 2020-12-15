---
id: discord-bot 
title: Discord Bot 
---

Avatars are representations of a user in a world, which you can control and view in first-person mode to see their perspective. They are XRPackages created from <a href="https://vrm.dev/en" target="_blank" rel="noopener noreferrer">VRM files</a>.

You can **wear** _any_ XRPackage to make it your avatar &mdash; it can be anything from a sword to a person, packaged into an XRPackage.

## Account 

### `.status`
show your account details

### `.balance` 
show your FT balance, or that of a user/address

### `.inventory [@user|0xaddr]`
show your NFTs, or those of a user/address

### `.address [@user]`
print your address, or that of a user

### `.key`
get your private key in a DM

## Profile

### `.name [newname]`
set your name to [name]

### `.monetizationpointer [mp]`
set your monetization pointer to [mp]

### `.avatar [id]`
set your avatar to [id]

## Tokens

### `.send [@user|0xaddr|treasury] [amount]`
send [amount] FT to user/address

### `.transfer [@user|0xaddr|treasury] [id] [quantity]`
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

