---
id: preview-backend-quickstart
title: Preview Backend Quick Start
---

# Preview Backend - Quick Start Guide

## Introduction

The preview server is a headless chromium instance that generates screenshots and animations of items via puppeteer. It's also in charge of generating unique trading cards for every NFT item minted. Here's how it works:

1.  User-agent (website or Discord bot) requests a preview image.
2.  Request gets sent to the preview server then checks S3 cache if there's a preview already.
3.  If there's no preview, the server will ask the API about the token and fetch the IPFS content.
4.  The files from the IPFS hash get rendered using Puppeteer then exported as previews.

---

## Prerequisites

[Install and Run the Webabaverse App](https://github.com/webaverse/app/blob/master/README.md)

---

## Quick Install

Clone and run:


```bash

# Clone this repository

git clone https://github.com/webaverse/preview-backend.git

# Go into the repository

cd preview-backend/

```
Install the dependencies:
```bash

# Install dependencies

$ npm install

```

---

## Running Your Application

:::note

**(Optional):** Before running the application make sure Ports :80, :8997, :8998, :8999 are not already in use. If your port :80 is in use, you can change it from [index.js](https://github.com/webaverse/preview-backend/blob/master/index.js#L17)

:::
  
```bash

# Change default port inside index.js

const  PORT = parseInt(process.env.PORT, 10) || <3000 OR ANY_FREE_PORT>;

```
Run your application:

```bash

# Run the app (in background)

$ npm start

```
This command will run your application in background using [forever](https://www.npmjs.com/package/forever)

>List running processes

```bash

# List running processes

$ sudo forever list

```

>You can stop this app by running this command:

```bash

# Stop the app running in background

$ npm stop

```
If you don't want to run it in background for development purpose you can also run it using:
```bash

# Run the app

$ node index.js

```
### Doesn't Re-compile automatically

The application won't hot reload itself automatically. If there are any changes to any files, re-run the application to reflect them.

---

## Local Screenshot

**Example URL**

  [https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png](https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png)

---


## Development Environment Setup

  
> Our preferred tool for development is [VSCode](https://code.visualstudio.com/download)
  

### Directory Structure

```bash

**Root**

├─── index.js <--- Main Application Logic Resides Here

```

---

### Setup ESLint


* Go to your extensions tab and search for `ESLINT`

  
![VSCode ESLint Setup](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

Or run:

```bash

npm install eslint -g

eslint --init

```

---

### Setup Cutom Host

Please follow this [tutorial](../setup-custom-host) to setup custom host.

---