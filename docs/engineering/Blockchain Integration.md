---
id: blockchain-integration
title: Blockchain Integration
---
# Blockchain Integration

### Smart contracts to be deployed: 
[WebaverseERC721](#WebaverseERC721-method-specifications),  
[WebaverseERC1155](#WebaverseERC1155-method-specifications),  
[WebaverseERC20](#WebaverseERC20-method-specifications),  
WBVRSVoucher

### Integration framework:
Web3.js,  
ethers.js

### Testing framework & tools:
Hardhat(will move to Truffle),  
chai,  
mocha

### Repos:
[Webaverse/drop-contracts](https://github.com/webaverse/drop-contracts)  
[Webaverse/app](https://github.com/webaverse/drop-contracts)  
[Webaverse/redis-server](https://github.com/webaverse/drop-contracts)  

---

## Web3 interface to connect with smart contracts
```js
function mint(tokenURI)
function drop(localStorageSlotIndex)
function redeem(voucher)
```
---

## WebaverseERC721 method specifications

```js
function tokenURI(uint256 tokenId)
```
---

```js
@notice View function that takes the unique tokenId and returns the uri against it.
@param tokenId The integer id of the NFT.
@dev The token being queried should already exist.
@dev URI of the token should already be set.
@return 'uri' URL of the the NFT against the given 'tokenId'.
```


```js
function mint(address account, string memory uri) public returns (uint256)
```

```js
@notice Mints the a single NFT with given parameters.
@param account The address on which the NFT will be minted.
@param uri The URL of the NFT.
@notice 'tokenId' must be unique and must not overlap any existing tokenId.
@notice 'uri' should be a metadata json object stored on IPFS or HTTP server.
```


```js
function claim(address claimer, NFTVoucher calldata voucher)
```

```js
@notice Redeems an NFTVoucher for an actual NFT, authorized by the owner.
@param claimer The address of the account which will receive the NFT upon success.
@param voucher A signed NFTVoucher that describes the NFT to be redeemed.
@dev Verification through ECDSA signature of 'typed' data.
@dev Voucher must contain valid signature, nonce, and expiry.
```

```js
function externalClaim(address claimer,address contractAddress, NFTVoucher calldata voucher) public returns (uint256)
```

```js
@notice Redeems an NFTVoucher for an actual NFT, authorized by the owner from an external contract.
@param claimer The address of the account which will receive the NFT upon success.
@param contractAddress The address of the contract from which the token is being transferred
@param voucher A signed NFTVoucher that describes the NFT to be redeemed.
@dev Verification through ECDSA signature of 'typed' data.
@dev Voucher must contain valid signature, nonce, and expiry.
```

```js
function ownerOf(tokenId)
To check the ownership of a token
```

```js
function balanceOf(account)
To check multiple balances at the same time
```

```js
function approve(to, tokenId)
Setting the approval of another account to transfer on your behalf.
```

```js
function isApprovedForAll(account, operator)
Checking for the approvals
```

```js
function safeTransferFrom(from, to, tokenId)
Transfer from another account for which you have approval for. 
```

```js
function safeBatchTransferFrom(from, to, ids, amounts, data)
function _setURI(newuri)
function _mintBatch(to, ids, amounts, data)
function _burn(account, id, amount)
function _burnBatch(account, ids, amounts)
function _beforeTokenTransfer(operator, from, to, ids, amounts, data)
```
---

## WebaverseERC1155 method specifications

```js
function mint(
       address account,
       uint256 tokenId,
       uint256 amount,
       string memory _uri,
       bytes memory data
   )
```

```js
@notice Mints a single NFT with given parameters.
@param account The address on which the NFT will be minted.
@param uri The URL of the NFT.
@notice 'tokenId' must be unique and must not overlap any existing tokenId.
@notice 'uri' should be a metadata json object stored on IPFS or HTTP server.
```

```js
function claim(address claimer, NFTVoucher calldata voucher)
```

```js
@notice Redeems an NFTVoucher for an actual NFT, authorized by the owner.
@param claimer The address of the account which will receive the NFT upon success.
@param voucher A signed NFTVoucher that describes the NFT to be redeemed.
@dev Verification through ECDSA signature of 'typed' data.
@dev Voucher must contain valid signature, nonce, and expiry.
```

```js
function externalClaim(address claimer, address contractAddress, NFTVoucher calldata voucher)
```

```js
@notice Redeems an NFTVoucher for an actual NFT, authorized by the owner from an external contract.
@param claimer The address of the account which will receive the NFT upon success.
@param contractAddress The address of the contract from which the token is being transferred
@param voucher A signed NFTVoucher that describes the NFT to be redeemed.
@dev Verification through ECDSA signature of 'typed' data.
@dev Voucher must contain valid signature, nonce, and expiry.
```

```js
function balanceOf(account, id)
To check the balance of a token i-e to check number of copies
```

```js
function balanceOfBatch(accounts, ids)
To check multiple balances at the same time
```

```js
function setApprovalForAll(operator, approved)
Setting the approval of another account to transfer on your behalf.
```

```js
function isApprovedForAll(account, operator)
Checking for the approvals
```

```js
function safeTransferFrom(from, to, id, amount, data)
Transfer from another account for which you have approval for. 
function safeBatchTransferFrom(from, to, ids, amounts, data)
```

```js
function _setURI(newuri)
function _mintBatch(to, ids, amounts, data)
function _burn(account, id, amount)
function _burnBatch(account, ids, amounts)
function _beforeTokenTransfer(operator, from, to, ids, amounts, data)
```
---

## WebaverseERC20 method specifications

```js
function claim(address claimer, NFTVoucher calldata voucher)
```


```js
@notice Redeems an Voucher for actual ERC20 tokens, authorized by the owner from an external contract.
@param claimer The address of the account which will receive the balance upon success.
@param contractAddress The address of the contract from which the token is being transferred
@param voucher A signed Voucher that describes the ERC20 tokens to be redeemed.
@dev Verification through ECDSA signature of 'typed' data.
@dev Voucher must contain valid signature, nonce, and expiry.
```


```js
function externalClaim(address claimer,address contractAddress, NFTVoucher calldata voucher) public returns (uint256)
```

```js
@notice Redeems an Voucher for actual ERC20 tokens, authorized by the owner from an external contract.
@param claimer The address of the account which will receive the balance upon success.
@param contractAddress The address of the contract from which the token is being transferred
@param voucher A signed Voucher that describes the ERC20 tokens to be redeemed.
@dev Verification through ECDSA signature of 'typed' data.
@dev Voucher must contain valid signature, nonce, and expiry.
```

