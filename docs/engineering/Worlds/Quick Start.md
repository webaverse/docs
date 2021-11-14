# Webaverse - Worlds Backend - Quick Start Guide

 ## Before You Begin
 
Before you begin we recommend you read about the basic building blocks that assemble an application:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.


## Quick Install

Once you've installed all basic building blocks, you're just a few steps away from starting to develop your application. To clone and run this repository excute these command using command line:


```bash

# Clone this repository

git clone https://github.com/webaverse/worlds-backend.git

# Go into the repository

cd worlds-backend/

```
To install the dependencies, run this in the application folder from the command-line:
```bash

# Install dependencies

$ npm install

```

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
