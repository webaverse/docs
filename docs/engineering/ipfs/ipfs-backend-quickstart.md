---
id: ipfs-backend-quickstart
title: IPFS Backend Quick Start
---

# IPFS Backend - Quick Start Guide

The IPFS Backend is a node server hosted on AWS, mainly used for REST endpoints.

---

## Quick Install

Clone and run:


```bash

# Clone this repository

git clone https://github.com/webaverse/ipfs-backend.git

# Go into the repository

cd ipfs-backend/

```
Install dependencies:
```bash

# Install dependencies

$ npm install

```
Create a `config.json` populated with the following:
>Ask [Avaer](https://github.com/avaer) for credentials:

```bash

{
    "accessKeyId": "<ACCESS_KEY_ID>",
    "secretAccessKey": "<SECRET_ACCESS_KEY>"
}

```
Create a  `cert/`  folder and copy into it the `fullchain.pem`  and  `privkey.pem` files for a valid certificate
>You can ask [Avaer](https://github.com/avaer) for the certificates

---

## Running Your Application


Run your application:

```bash

# Run the app (in background)

$ npm start

```
This command will run your application in background using [forever](https://www.npmjs.com/package/forever)

>List running processes:

```bash

# List running processes

$ sudo forever list

```

>You can stop this app by running this command:

```bash

# Stop the app running in background

$ npm stop

```

### Doesn't Re-compile automatically

The application won't hot reload itself automatically. If there are any changes to any files, re-run  the application to reflect any changes.

```bash

# Stop and Start the application

$ npm stop && npm start

```
---

## Development Environment Setup

  
> Our preferred tool for development is [VSCode](https://code.visualstudio.com/download)
  
### Directory Structure

```bash

**Root**

├───	index.js <--- Main Application Logic Resides Here

```
---
### Setup ESLint


* Go to your extensions tab and search for `ESLINT`
  
![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

Or run:

```bash

npm install eslint -g

eslint --init

```
---
### Setup Cutom Host

Please follow this [tutorial](../setup-custom-host) to setup a custom host.

---


## API Docs

### worlds.exokit.org

`GET` worlds.webaverse.org/{worldId}
*Returns an object with: Host, World Name and Uptime of server.*

`POST` worlds.webaverse.org/create
*Returns an object with: Host, World Name and Uptime of server.*

`DELETE` worlds.webaverse.org/{worldId}
*Terminates the ec2 associated with world.*

---

<!-- for internal docs only

## How to Deploy New `world-server` code.

1. Make sure your `dialog` repo changes are commited to the `dialog/worlds` branch.
2. Go to `world-server` repo and bump the `package.json` version number. (this triggers the GH action to execute and create a new release, it will pull `dialog/worlds`)
3. After the GH action is done, copy the hash of the release and paste it into `exokit-backend/routes/worlds.js` in the `updateZipFile()` fetch url.
4. SSH into `exokit-backend` EC2 server (can get the IP from AWS dashboard), and delete the `world-server.zip` file. (it exists inside `~/exokit-backend/`)
5. `npm run start` inside of `exokit-backend`. (this will start a forever process and start downloading the new ZIP file from the Github release.
6. After it is done, verify the logs. (`sudo forever list`, `sudo forever logs [index]`) The server is up and running and will create new world-servers with the fresh codebase.

P.S. To truly wipe the old servers and start fresh, you need to login to AWS and terminate the old world servers OR you can use the DELETE API for worlds. -->