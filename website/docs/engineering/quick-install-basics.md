---
id: quick-start-basics
title: Quick Start Basics
---
# Quick Start Basics

Webaverse is composed of a number of opensource applications that work in tandem. Most of them can be installed and configured in your local dev environment easily following a few regular steps.

## Clone and Setup

All the repos can be found under the Webaverse account at GitHub: https://github.com/webaverse. The main ones required to stand up the Webaverse App can be found here: [Webaverse Repos](./webaverse-overview#systems-in-webaverse)

To begin, clone a repo as you would any other git repo. 
> For example, WSRTC


```bash

# Clone the WSRTC repo

git clone https://github.com/webaverse/wsrtc.git

cd wsrtc/

```

Most of Webaverse can be started with NPM from NodeJS. As with any npm script, before running it for the first time, you should install the dependencies.

Install the dependencies:

```bash

# Install dependencies

$ npm install

```

---


## Running Your Application

While most Webaverse apps can be started with the default `npm start` script. Some have other options such as `npm run dev`. Use `npm run` to list what scripts are available and/or read/edit package.json for more details.


### Forever

`Forever` is a Node package for continuously running applications like services. Several of the Webaverse npm scripts actually start their respective applications within the context of Forever. For example, when running `npm start` from the App repo, npm runs:

```bash

forever start index.mjs -p

```

#### Managing Forever Processes

For those repos that utilize Forever to run their application, there are some Forever commands that can be useful: 
    * `Forever list`: will list any running processes
    * `Forever stopall`: will stop all running processes
    * `Forever restartall`: will restart all running processes
    * ... `Forever --help` to learn more


### Hot Recompiling

Some applications will hot recompile or recompile automatically when files within the application are changed. Many will not, though; in that case, in order to have your changes reflected, you'll have to stop the application entirely with `npm stop` and then restart it with `npm start` (or you can restart it more succinctly with `npm stop && npm start`).

---

## Development Environment Setup

We prefer using [VSCode](https://code.visualstudio.com/download) for development, so the below notes reflect that toolset; however you should be able to adapt this guide to apply to any other IDEs.

### Setup ESLint

* For VSCode, go to your extensions tab and search for `ESLINT`
  
![VSCode ESLint Setup](/img/VSCodeESLintSetup.PNG)

Or from the terminal run:

```bash

npm install eslint -g

eslint --init

```

---

### Setup Cutom Host

While all of the Webaverse applications can be accessed locally with the default `localhost` hostname or IP `127.0.0.1`, several of them require being served from https://, which means they must have a certificate to work properly. And a certificate will be associated with a particular hostname, which you can assign locally by altering your hosts file. Please follow this [tutorial](./setup-custom-host) to setup a custom host.