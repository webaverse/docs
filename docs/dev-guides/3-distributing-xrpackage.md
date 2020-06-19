---
id: distributing-xrpackage
title: Distributing XRPackages
---

Once you've [created your first XR Package](./2-creating-an-xrpk.md), you can optionally publish your package the the IPFS/Ethereum network!

**Note: Publishing your package to the IPFS/Ethereum network is completely optional. You can use any hosting and distribution platform to share your XRPackages. IPFS is the preferred hosting solution for the Webaverse due to its decentralized trustless infrastructure.**

We've now successfully packaged our demo application into a bundle that can easily be shared and consumed by Webaverse users. This guide explains how to distribute XRPackages by publishing them to the decentralized IPFS network. This allows our packages to be browsed from a central directory and removes the requirement of package hosting.

<a href="https://xrpackage.org/browse.html" target="_blank" rel="noopener noreferrer">You can browse previously published packages here</a>.

## What is IPFS?

IPFS is the <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">InterPlanetary File System</a>. IPFS is a way to store and find files by storing them against a _cryptographic hash_. This just means some function goes through the contents of your file to automatically calculate a value that uniquely identifies your file (your XRPackage).

IPFS is also an open source, _decentralized_ system - it uses a peer-to-peer protocol instead of storing your files on a single centralized server. This means you can publish your packages yourself, without needing to rely on your own (costly), or someone else's (unreliable or potentially insecure) server!

## What is Ethereum?

<a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer">Ethereum</a> is another decentralized open source system with a programmable blockchain. A blockchain is a global shared, transactional database. Data is stored as _blocks_ which are cryptographically linked together - each block contains a cryptographic hash to the previous block and a timestamp. This means the data cannot be altered once it has been published.

Ethereum has a native cryptocurrency ('digital money') called <a href="https://ethereum.org/eth/" target="_blank" rel="noopener noreferrer">Ether (ETH)</a>.

Ethereum gives ownership and interoperability of your packages -- you will always have a complete sense of ownership for anything you create and can provably sell anything you own.

## What is the Registry?

The Registry is a simple database that maps user-friendly names to the unique long hashes produced by the IPFS. This means you can give your package the name `chicken` instead of its hash `QmdVXHq9TWdcDeHQmYAWQpCp8pnXx96Jc9PxJVdUVstTB9` (see <a href="https://xrpackage.org/inspect.html?p=chicken" target="_blank" rel="noopener noreferrer">here</a>) making it more discoverable and user-friendly.

You can browse the XRPackage Registry at <a href="https://xrpackage.org/browse.html" target="_blank" rel="noopener noreferrer">xrpackage.org</a>.

## Publishing to IPFS

**Note: The publish functionality in the XRPackage CLI currently only publishes to the Rinkeby testnet. You will need to have a sufficient ETH balance in order to publish packages. You can get free Rinkeby testnet ETH <a href="https://faucet.rinkeby.io/" target="_blank" rel="noopener noreferrer">at the faucet</a>.**

Just like in the previous steps, we're going to be using the XRPackage CLI to login to our Ethereum wallet and publish our packages to the network. The following steps assume you have at least a basic familiarity with the Ethereum network.

The first step is to use the login command to either login to an existing wallet, or create a new wallet. This is the wallet we will be using to pay the gas fees for publishing our package. If you create a new wallet using the CLI, make sure to visit the faucet and load it with ETH before attempting to publish a package.

```bash
$ xrpk login
# Follow the on-screen prompts to create or import an existing wallet
```

Once we've associated our wallet, it's always a good idea to double check your information and make sure everything looks as it should:

```bash
$ xrpk whoami
```

Once we're happy with our wallet and we're ready to publish, simply issue the `publish` command with the path to your bundle from earlier:

```bash
$ xrpk publish ./path/to/.wbn
```

**<a href="https://github.com/webaverse/contracts" target="_blank" rel="noopener noreferrer">Click here to view the smart contracts for XRPackage Publishing</a>**.

Congratulations! You've successfully created and published your first XRPackage!

See [`Examples`](./4-examples.md) for more fully open-source examples of content you could package with XRPackage!
