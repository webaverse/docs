---
id: mint-discord
title: Mint NFTs in Discord
---

Minting NFTs in Webaverse can be done by simply dragging and dropping into the [Webaverse Discord](https://discord.gg/R5wqYhvv53). If you're a server admin interested in minting NFTs with your community, drop by and ask us for some SILK to power your bot with!

### Prerequisites:
- Join the [Webaverse Discord](https://discord.gg/R5wqYhvv53).
- Have a balance of atleast 10 [SILK](../market/silk-guide.md).

## 1. Drag and drop file into Discord

> ![Dragging and dropping file into Discord](/img/discord-mint-1.png)

## 2. Run `.mint [number]` command
This command will tell the Discord Bot how many of your NFT you want to mint. The minimum is 1.

> ![Adding mint command to file comment](/img/discord-mint-2.png)

## 3. Get confirmation from Discord Bot
If minting was successful, the Discord Bot will return a message with the token id(s) of your newly minted NFTs, along with the file hash. You will now see the NFT(s) in your `.inventory`.

> ![Discord bot with token id and new file hash](/img/discord-mint-3.png)

#### Transaction failed 0x0

If your minting was not successful, you will get `mint transaction failed: 0x0`, which typically means that the file you are trying to mint already exists.

> ![Discord bot with transaction failed message](/img/discord-mint-4.png)
