---
id: distributing-xrpackage
title: Distributing XRPackages
---

Once you've [bundled your application into an XR Package](./2-creating-an-xrpk.md), you can optionally publish it to the the IPFS/Ethereum network, so that it can easily be shared and consumed by Webaverse users. This guide explains how to distribute XRPackages by publishing them to the decentralized IPFS network. This allows our packages to be browsed from a central directory and removes the requirement of package hosting.

<a href="https://xrpackage.org/browse.html" target="_blank" rel="noopener noreferrer">You can browse previously published packages here</a>.

**Note: Publishing your package to the IPFS/Ethereum networks is completely optional. You can use any hosting and distribution platform to share your XRPackages. IPFS is the preferred hosting solution for the Webaverse due to its decentralized trustless infrastructure.**

## Baking

Before your package is ready for distribution, we need to **bake** it.

Baking is the process where a `.wbn` XRPackage is taken as input and run within a browser, where it is rewritten with an added generated icons that store collision meshes and preview screenshots for packages.

Our CLI tool does this for you completely automatically! The rest of this page assumes you have the XRPackage CLI tool (`xrpk`) installed (see [the previous section](./2-creating-an-xrpk.md#install-xrpackage)) and have performed the baking process on your `.wbn` XRPackage:

```bash
$ xrpk bake ./path/to/.wbn
```

## Publishing Modes

Now that we understand the terminology and have _baked_ our package, let's publish it!

There are two modes in which we officially suggest publishing your packages: via IPFS (Webaverse Package Registry) or Ethereum (Webaverse Blockchain). You may choose whichever method you prefer, and can even choose to host your XRPackage yourself, or send it via any other means!

**Note:** The uniqueness of your XRPackage's `name` is enforced, as this is what will identify your package on the registry.

### What is IPFS?

IPFS is the <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">InterPlanetary File System</a>, which is a publicly distributed hypermedia file-sharing protocol system. IPFS uses distributed hash tables to store and find files by referencing a _cryptographic hash_ which encrypts the file contents to assign a unique data identifier for your XRPackage file.

IPFS is also an open source, _decentralized_ system - it uses a peer-to-peer protocol to spread data across the network of computers instead of storing your files on a single centralized server. This means you can publish your packages yourself, without needing to rely on your own (costly), or someone else's (unreliable or potentially unsecure) server!

Put simply, IPFS is a decentralized hosting solution for publicly storing and sharing your XRPackage files.

#### What is the Webaverse Package Registry?

The Webaverse Package Registry is a public online package repository of user-created published packages hosted within Webaverse's site. Published packages map user-friendly names to the unique long hashes produced by the IPFS. This means you can give your package the name `chicken` instead of its hash `QmdVXHq9TWdcDeHQmYAWQpCp8pnXx96Jc9PxJVdUVstTB9` (see <a href="https://xrpackage.org/inspect.html?p=chicken" target="_blank" rel="noopener noreferrer">here</a>) making it more discoverable and user-friendly.

You can browse the XRPackage Registry at <a href="https://xrpackage.org/browse.html" target="_blank" rel="noopener noreferrer">xrpackage.org</a>.

#### Using the Webaverse Package Registry

You can use the Registry to publish your XRPackage using the CLI or web-interface.

To use a web-interface, go to <a href="https://xrpackage.org/inspect.html" target="_blank" rel="noopener noreferrer">the XRPackage.org</a> website and click "Create from file" &mdash; this will allow you to select your entry-point file, and create a package in your browser!

To use the CLI, run the following two commands:

```bash
$ xrpk login # this will send an email code
$ xrpk publish
```

That's it! Your XRPackage should now be available on the Registry &mdash; try <a href="https://xrpackage.org/browse.html" target="_blank" rel="noopener noreferrer">checking it out</a>!

### What is Ethereum?

<a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer">Ethereum</a> is a decentralized open-source platform for writing and distributing blockchain applications, known as _decentralized apps (dapps)_. Dapps are backed by Ethereum smart contracts, which are transaction protocols that enforce a contract, and rely on the blockchain to run a trustless, autonomous peer-to-peer network that stores an immutable record of all transactions. Data is stored as a ledger of _blocks_ that are cryptographically linked together - each block contains a cryptographic hash to the previous block and a timestamp. This means the data cannot be altered once it has been published. In addition, the most recent state of each smart contract is stored along with a complete record of ether transactions.

The Ethereum network has a native cryptocurrency ('digital money') called <a href="https://ethereum.org/eth/" target="_blank" rel="noopener noreferrer">Ether (ETH)</a>. Ether is used as the fuel to cover cost of fees in exchange for usage of network processing power. This ether fee, calculated in units of Ethereum gas, will depend on the amount of computational power and time required for the action being processed. Ether is validated by miners who provide 'proof-of-work' for the Ethereum network and create new Ether tokens by validating smart contracts. The faster the hashrate of the miners, the more secure the Ethereum system. Like other cryptocurrencies, Ethereum can be used to buy and sell Ether tokens via blockchain technology.

Ethereum gives ownership and interoperability of your packages &mdash; you will always have a complete sense of ownership for anything you create and can provably sell anything you own. As a reliable decentralized platform, Ethereum serves to provide complete freedom with blockchain technology to build and distribute applications without third-party interferences.

#### Using the Webaverse Blockchain

**Note:** The publish functionality in the XRPackage CLI currently only publishes to the [Rinkeby](https://www.rinkeby.io/) testnet. You will need to have a sufficient ETH balance in order to publish packages. You can get free Rinkeby testnet ETH <a href="https://faucet.rinkeby.io/" target="_blank" rel="noopener noreferrer">at the faucet</a>.

The following steps assume you have at least a basic familiarity with the Ethereum network; we will login to our Ethereum wallet and publish our packages to the network.

First, use the `login` command to either login to an existing wallet, or create a new wallet. This is the wallet we will be using to pay the gas fees for publishing our package. If you create a new wallet using the CLI, make sure to visit the faucet and load it with ETH before attempting to publish a package.

```bash
$ xrpk login # or `xrpk wallet`
# Follow the on-screen prompts to create or import an existing wallet
```

Once we've associated our wallet, it's always a good idea to double check your information and make sure everything looks as it should:

```bash
$ xrpk whoami
```

Once we are happy with our wallet and are ready to publish, we can use the `mint` and `publish` commands!

```bash
$ xrpk mint ./path/to/.wbn # mint the token on the registry
$ xrpk publish ./path/to/.wbn # publish it to IPFS
```

<a href="https://github.com/webaverse/contracts" target="_blank" rel="noopener noreferrer">Click here to view the smart contracts for XRPackage Publishing</a>.

---

**Congratulations! You've successfully created and published your first XRPackage!**

See [`Examples`](./4-examples.md) for more (fully open-source!) examples of content you could create and package with XRPackage!
