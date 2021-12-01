---
id: application-startup
title: Application Startup
---

# Webaverse Quick Start Guide

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone --recurse-submodules https://github.com/webaverse/app.git
# Go into the repository
cd app/
# Install dependencies
npm install
# Run the app
npm run dev
# Navigate to the URL mentioned in the terminal

```
---

## Development Environment Setup

> Preffered tool for development is [VSCode](https://code.visualstudio.com/download)


### Technologies

* [NodeJS](https://nodejs.org/)
* [ThreeJS](https://threejs.org/)
* [ViteJS](https://vitejs.dev/)
* [ReactJS](https://reactjs.org/)

### Directory Structure

```bash
**Root**
│
├───src <--- React Application Resides Here
	├───Main.jsx <-- Rgisters the routes of the React App and Load Dom
	├───App.jsx <-- Loads Webaverse.js from Root directory
│
├─ index.js <-- This starts the vite server that serves the React App
│
├─ webaverse.js <-- This is the entry point of the Webaverse
│
├─ io-manager.js <-- Controls the input events within the application.
...
```

### Setup ESLint

* Go to your extensions tab and search for `ESLINT`

	![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--gWL807Xl--/c_limit,f_auto,fl_progressive,q_auto,w_880/https://thepracticaldev.s3.amazonaws.com/i/9rmkgbk7nio6ravjm0rx.PNG)

	```bash
		npm install eslint -g
		eslint --init
	```

### Re-compile automatically

The application uses vite to hot reload itself automatically if there is any changes to any file.

```bash
npm run dev
```
> Any change inside `packages` folder don't recompile automatically for which we have restart the development server by using `npm run dev`

---


