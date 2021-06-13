---
id: discord-bot
title: Discord Bot
---

The Discord Bot is the easiest way to mint and trade NFTs. It allows anyone to manage their profile, items inventory, avatar, and create just by uploading files and typing commands into Discord.
 
![Minting a NFT with the bot](/img/discord-mint.jpg)


There’s no user setup required, anybody in the server the bot is invited to will have a Webaverse Ethereum address generated for them. The Discord Bot runs on an Ethereum sidechain which makes transactions nearly instant and cost nothing.


![See help menu](/img/discord-help.png)

You can interact the Webaverse Discord Bot by inviting it to your Discord server [here](https://discord.com/oauth2/authorize?client_id=758956702669209611&permissions=0&scope=bot) or you can interact with the bot by joining the [Webaverse Discord](https://discord.gg/3byWubumSa) server. First command you should try is `.help`.

---

This guide will walk you step-by-step to setting up your Webaverse profile. You will need a Discord account to continue. In the near future we will add support for email and metamask login.

You will set up your own avatar, name, and log into the Webaverse world for the first time!

## Login to the Website

1. Join the [Webaverse Discord](https://discord.gg/R5wqYhvv53)

2. Type `.login` in the #bot channel

## Login to the 3D World 

1. Join the [Webaverse Discord](https://discord.gg/R5wqYhvv53)

2. Type `.play ` in the #bot channel

3. Alternatively, visit https://app.webaverse.com/

## Setup your Profile

1. Drag and drop avatar into Discord
> ![Dropping file into Discord](/img/avatar-1.png)

2. Type `.mint 1` in the Discord comment
> ![Typing mint 1 command in Discord comment](/img/avatar-2.png)

The Discord Bot should respond with the id of the token and file hash:
> ![Discord bot responding with token id and file hash](/img/avatar-3.png)

3. Run `.avatar` + token id
The token id will be what the Discord Bot responded with in step #2, in this case it was 15.
> ![](/img/avatar-4.png)

4. Run `.name` + the name you want
> ![](/img/avatar-5.png)

If you type `.status`, you should now see your name and avatar set in your profile.
> ![](/img/avatar-6.png)

### 5. Run `.play` to get your Webaverse login link in a DM from the bot



---

## Info 

### `.help [command]`
show help menu for all commands by itself or specify a command

### `.help [topic]`
show help on a topic (info, tokens, account, minting, packing, trade, store, land, secure)

### `.status`
show your account details

### `.balance [@user|0xaddr]?`
show your FT (fungible token) balance, or that of a user/address

### `.inventory [@user|0xaddr]? [page]?`
show your NFTs, or those of a user/address

### `.address [@user]?`
print your address, or that of a user

### `.key [@user]?`
get your private key in a DM

### `.login`
get a login link in a DM

### `.play`
get a login link in a DM to go directly into the 3D Webaverse

### `.realm [num]`
play link in a DM to go directly into the 3D Webaverse in that realm [1-5]

---

## Tokens

### `.inspect [id]`
inspect token details

### `.send [@user|0xaddress|treasury] [amount]`
send [amount] of SILK to user/address

### `.transfer [@user|0xaddress|treasury] [id] [quantity]?`
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

### `.collab [@user|0xaddr] [tokenId]`
add collaborator to [tokenId]

### `.uncollab [@user|0xaddr] [tokenId]`
remove collaborator from [tokenId]

---

## Account 

### `.name [newname]`
set your name to [newname]

### `.monetizationpointer [mp]`
set your monetization pointer to [mp]

### `.avatar [id]`
set your avatar to NFT [id]

### `.loadout [num] [id]`
set loadout NFT [1-8] to NFT [id]

### `.homespace [id]`
set NFT as home space

### `.redeem`
redeem NFT for Discord roles

---

## Minting

### `.mint [count]? (in upload comment)`
mint [count] NFTs from file upload

### `.mint [count]? [url]`
mint [count] NFTs from the provided [url]

### `.update [id] (in upload comment)`
update NFT content

---

## Packing

### `.packs [@user|nftid]`
check packed NFT balances

### `.pack [nftid] [amount]`
pack [amount] FT from yourself into [nftid]

### `.unpack [nftid] [amount]`
unpack [amount] FT from [nftid] to yourself

---

## Trade

### `.trade [@user|0xaddr]`
start a trade with user/address

### `.addnft [tradeid] [nftid]`
add NFT to trade [tradeid]

### `.removenft [tradeid] [index]`
remove NFT at [index] from trade [tradeid]

### `.addft [tradeid] [amount]`
add fungible tokens to trade [tradeid]

---

## Store

### `.store [@user]?`
show the treasury store, or that of a user

### `.sell [nftid] [price]`
list [nftid] for sale at [price]

### `.unsell [saleid]`
unlist [saleid] from the store

### `.buy [saleid]`
buy the [saleid] from [@user]

---

## Land

### `.parcels`
list owned parcels

### `.deploy [parcelId] [nftId]`
deploy [nftId] to [parcelId]

### `.landcollab [@user|0xaddr] [parcelId]`
add collaborator to [parcelId]

---

## Key Management (DM to bot)

### `.key [new mnemonic key]`
set your Discord private key

### `.key reset`
generate and set a new Discord private key

### `.gets [nftId]`
get the unlockable sent via DM

### `.sets [nftId] [text]`
DM the bot to use this command. Sets unlockable content for the NFT.

---

