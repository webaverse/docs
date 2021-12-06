---
id: ipfs-backend-quickstart
title: IPFS Backend Quick Start
---

# IPFS Backend - Quick Start Guide

The IPFS Backend is a node server hosted on AWS, mainly used for REST endpoints.

---

## [Quick Start Basics](../quick-start-basics)

### Additional Setup

> After installing dependencies and before running your application, do the following:

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


## API Docs

### worlds.webaverse.org

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