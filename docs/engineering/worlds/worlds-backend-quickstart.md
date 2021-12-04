---
id: worlds-backend-quickstart
title: Worlds Backend Quick Start
---
# Worlds Backend - Quick Start Guide

## Quick Install

Clone and run:


```bash

# Clone this repository

git clone https://github.com/webaverse/worlds-backend.git

# Go into the repository

cd worlds-backend/

```
Install the dependencies:

```bash

# Install dependencies

$ npm install

```
---

## Running Your Application


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

### Doesn't Re-compile automatically

The application won't hot reload itself automatically. If there are any changes to any file, re-run the application to reflect them.

```bash

# Stop and start the application

$ npm stop && npm start

```

---


## Development Environment Setup

  
> Our preffered tool for development is [VSCode](https://code.visualstudio.com/download)
  
### Directory Structure

```bash

**Root**

├───	index.js <--- Main Application Logic Resides Here

```
---
### Setup ESLint


* Go to your extensions tab and search for `ESLINT`
  
![VSCode ESLint Setup](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

```bash

npm install eslint -g

eslint --init

```

---
### Setup Cutom Host

Please follow this [tutorial](../setup-custom-host) to setup custom host.

---