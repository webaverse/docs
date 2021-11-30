---
id: ipfs-backend
title: IPFS Backend
---

# Webaverse - IPFS Backend - Quick Start Guide

## Introduction

Node server hosted on AWS, mainly used for REST endpoints.

 ## Before You Begin
 
Before you begin we recommend you read about the basic building blocks that assemble an application:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.


## Quick Install

Once you've installed all basic building blocks, you're just a few steps away from starting to develop your application. To clone and run this repository excute these command using command line:


```bash

# Clone this repository

git clone https://github.com/webaverse/ipfs-backend.git

# Go into the repository

cd ipfs-backend/

```
1. To install the dependencies, run this in the application folder from the command-line:
```bash

# Install dependencies

$ npm install

```
2. Create a  `config.json`  and paste this in, ask [Avaer](https://github.com/avaer) for credentials:

```bash

{
    "accessKeyId": "<ACCESS_KEY_ID>",
    "secretAccessKey": "<SECRET_ACCESS_KEY>"
}

```
3.  Create a  `cert/`  folder. Create 2 new files inside:  `fullchain.pem`  and  `privkey.pem`. Ask [Avaer](https://github.com/avaer) for the certificates.

## Running Your Application


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

### Doesn't Re-compile automatically

The application won't hot reload itself automatically if there is any changes to any file. You have re-run application to effect new changes.

```bash

# First stop the application

$ npm stop

# Then run it again

$ npm start

```

## Development Environment Setup

  
> Preffered tool for development is [VSCode](https://code.visualstudio.com/download)
  
### Directory Structure

```bash

**Root**

├───	index.js <--- Main Application Logic Resides Here

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

## API Docs

### worlds.exokit.org

`GET` worlds.exokit.org/{worldId}
*Returns an object with: Host, World Name and Uptime of server.*

`POST` worlds.exokit.org/create
*Returns an object with: Host, World Name and Uptime of server.*

`DELETE` worlds.exokit.org/{worldId}
*Terminates the ec2 associated with world.*


## How to Deploy New `world-server` code.

1. Make sure your `dialog` repo changes are commited to the `dialog/worlds` branch.
2. Go to `world-server` repo and bump the `package.json` version number. (this triggers the GH action to execute and create a new release, it will pull `dialog/worlds`)
3. After the GH action is done, copy the hash of the release and paste it into `exokit-backend/routes/worlds.js` in the `updateZipFile()` fetch url.
4. SSH into `exokit-backend` EC2 server (can get the IP from AWS dashboard), and delete the `world-server.zip` file. (it exists inside `~/exokit-backend/`)
5. `npm run start` inside of `exokit-backend`. (this will start a forever process and start downloading the new ZIP file from the Github release.
6. After it is done, verify the logs. (`sudo forever list`, `sudo forever logs [index]`) The server is up and running and will create new world-servers with the fresh codebase.

P.S. To truly wipe the old servers and start fresh, you need to login to AWS and terminate the old world servers OR you can use the DELETE API for worlds.