---
id: smart-contracts-integration
title: Smart Contracts Integration Module
---

# Smart Contracts Integration Module

This module implements the core methods to interact with Webaverse smart contracts. The core features are `mint`, `drop` and `redeem`.

```js
const {mint, drop, redeem} = require('./integration/web3');
```

## Usage

### `mint`

```js
mint(tokenURI)
```
Mints an NFT on the Blockchain using the Webaverse ERC721 smart contract with the given IPFS unique identifier
#### Inputs
* tokenURI: {string}  **[Required]**
The IPFS contend ID (cid) of the object. 

---

### `drop`

```js
const voucher = drop(tokenId)
```
Creates a signed voucher of the given token ID and stores it in the local storage.
#### Inputs
* tokenId: {int|string} **[Required]**
The smart contract generated token ID of the object that is to be dropped in the world

#### Return
* voucher: {string}
A Stringified object signed by the user metamask wallet that contains tokenId, nonce, expiry, and user's wallet signature.

---

### `redeem`

```js
redeem(voucher)
```
Parses the given stringified voucher object and calls the WebaverseERC721 smart contract to verify the voucher. Upon succesful verification, the smart contract transfers the NFT object to the redeemer.
#### Inputs
* voucher: {string} **[Required]**
A Stringified object that contains tokenId, nonce, expiry, and NFT object's owner's signature.

---

## Architecture

<!-- ### Flow Diagram

> TO DO

--- -->

### Location

```
Webaverse App
└───integration
   └───web3
         └─── index.js
```

---

### `Exports`

#### `mint`

```js
async  function  mint(tokenURI) {
  const  tokenID = ethers.BigNumber.from(ethers.utils.randomBytes(4)).toNumber();

try {
  await  contract.mint(await  signer.getAddress(), tokenID, tokenURI);
  localStorage.setItem("mintedIDs", JSON.stringify([...JSON.parse(localStorage.getItem("mintedIDs")), tokenID]));
} catch (err) {
	console.log(err.error);
  }
}

```
---

#### `drop`

```js
async  function  drop(localStorageSlotIndex) {
  const  claimableVoucher = new  ClaimableVoucher({contract:  contract, signer:  signer });
  const  tokenID = localStorageSlotIndex;
  const  timestamp = Math.round(new  Date().getTime() / 1000) + 1000;
  const  nonce = await  ethers.BigNumber.from(ethers.utils.randomBytes(4)).toNumber();
  const  balance = 0;

try {
  voucher = await  claimableVoucher.createVoucher(tokenID, balance, nonce, timestamp);
  } catch (err) {
    console.log(err);
  }  

  localStorage.setItem("latestvoucher", JSON.stringify(voucher));
  let  mintedIDs = JSON.parse(localStorage.getItem("mintedIDs"));
  mintedIDs.splice(mintedIDs.indexOf(tokenID), 1);
  await  localStorage.setItem("mintedIDs", JSON.stringify(mintedIDs));
  return  Promise.resolve(JSON.stringify(voucher));
}

```

---

#### `redeem`
```js
async  function  redeem(voucher) {

try {
  await  contract.claim(await  signer.getAddress(), voucher);
  contract.on("Transfer", (from, to, tokenId) => {
    if (from != ethers.constants.AddressZero)
      console.log("From : ", from, "To :", to, "Token ID :", tokenId.toNumber());
});
    } catch (err) {
      console.log(err);
      }
}
```
