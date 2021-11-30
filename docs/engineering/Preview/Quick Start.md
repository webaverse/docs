---
id: preview-backend
title: Preview Backend
---

# Webaverse - Preview Backend - Quick Start Guide

## Introduction

The preview server is a headless chromium instance that generates screenshots and animations of items via puppeteer. It's also in charge of generating unique trading cards for every NFT item minted. Here's how it works:

1.  Start with user-agent (website or Discord bot) requesting a preview image.
2.  Request gets sent to the preview server, checks S3 cache if there's a preview already.
3.  If there's no preview, the server will ask the API about the token and fetch the IPFS content
4.  The files from the IPFS hash get rendered using Puppeteer, exported as previews.


 ## Before You Begin
 
Before you begin we recommend you read about the basic building blocks that assemble an application:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.


## Prerequisites

Make sure you are running  [Webaverse App](https://github.com/webaverse/app)
Follow this [documentation](https://github.com/webaverse/app/blob/master/README.md) to setup Webaverse App.

## Quick Install

Once you've installed all basic building blocks and all the prerequisites, you're just a few steps away from starting to develop your application. To clone and run this repository excute these command using command line:


```bash

# Clone this repository

git clone https://github.com/webaverse/preview-backend.git

# Go into the repository

cd preview-backend/

```
To install the dependencies, run this in the application folder from the command-line:
```bash

# Install dependencies

$ npm install

```
This command will install the dependencies needed for the application to run.


## Running Your Application

**Note (Optional):** Before running application please make sure Port :80, :8997, :8998, :8999 is not already in use. If your port :80 is in use, you can change it from [index.js](https://github.com/webaverse/preview-backend/blob/master/index.js#L17)
  
```bash

# Change default port inside index.js

const  PORT = parseInt(process.env.PORT, 10) || <3000 OR ANY_FREE_PORT>;

```
Run your application using npm:

```bash

# Run the app (in background)

$ npm start

```
This command will run your application in background using [forever](https://www.npmjs.com/package/forever)

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

The application won't hot reload itself automatically if there is any changes to any file. You have re-run application to effect new changes.

## Local Screenshot

**Example URL**

  [https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png](https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png)


## Development Environment Setup

  
> Preffered tool for development is [VSCode](https://code.visualstudio.com/download)
  

### Directory Structure

```bash

**Root**

├─── index.js <--- Main Application Logic Resides Here

```


### Setup ESLint


* Go to your extensions tab and search for `ESLINT`

  
![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

  

```bash

npm install eslint -g

eslint --init

```

### Setup Cutom Host

Please follow this [tutorial](https://github.com/abeersaqib/webaverse-docs/blob/main/setup-custom-host.md) to setup custom host.
