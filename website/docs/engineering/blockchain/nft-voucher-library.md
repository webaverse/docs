---
id: nft-voucher-library
title: NFT Voucher Library
---

# NFT Voucher Library

This is a sub module in the web3 integration module that is utilzied to create and sign the NFT vouchers for the NFT `drop` and `redeem` features in the Webaverse app.

```js
const { ClaimableVoucher } = require("./integration/web3/lib");
```

## Usage

### `initialize`

```js
const  claimableVoucher = new  ClaimableVoucher({ contract:  contract, signer:  signer });
```
Initializes an instance of `claimableVoucher` library
#### Inputs
* **Object: {Object} [Required]**
	* **`contract: {object}`**
	ethers contract instance
	* **`signer: {object}`**
	ethers signer instance

---

### `createVoucher`

```js
let voucher = await  claimableVoucher.createVoucher(tokenID, balance, nonce, timestamp);
```
Creates a signed voucher of the given token ID using `ethers` library and returns the instance of it.
#### Inputs
* **`tokenId: {int|string}` [Required]**
The smart contract generated token ID of the object that is to be dropped in the world
* **`balance: {int|string}` [Required]**
Integer value for token balance(NOT APPLICABLE YET i.e. should be "0")
* **`nonce: {int|string}` [Required]**
`4` bytes random integer
* **`timestamp: {int|string}` [Required]**
Unix timestamp that would be stored as an expiry for the NFT drop

#### Return
* **`voucher: {object}`**
A voucher object signed by the user metamask wallet that contains tokenId, nonce, expiry, and user wallet's signature.

---

### `Example`

```js
const  claimableVoucher = new  ClaimableVoucher({ contract:  contract, signer:  signer });
const  tokenID = localStorageSlotIndex;
const  timestamp = Math.round(new  Date().getTime() / 1000) + 1000;
const  nonce = await  ethers.BigNumber.from(ethers.utils.randomBytes(4)).toNumber();
const  balance = 0;
try {
  voucher = await  claimableVoucher.createVoucher(tokenID, balance, nonce, timestamp);
  } catch (err) {
    console.log(err);
   }
```

---

## Architecture

### Location

```
Webaverse App
└───integration
   └───web3
       └───lib
```

---

### `Methods`


#### `createVoucher`

```js
async  createVoucher(tokenId, balance, nonce, expiry) {
    const  voucher = { tokenId, balance, nonce, expiry };
    const  domain = await  this._signingDomain();
    const  types = {
    NFTVoucher: [
       { name:  "tokenId", type:  "uint256" },
       { name:  "balance", type:  "uint256" },
       { name:  "nonce", type:  "uint256" },
       { name:  "expiry", type:  "uint256" },
      ],
     };
    const  signature = await  this.signer._signTypedData(domain, types, voucher);
    return {...voucher, signature};
}
```

---
