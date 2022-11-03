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

## [Quick Start Basics](../quick-start-basics)

### Additional Setup

**(Optional):** Before running the application make sure Ports :80, :8997, :8998, :8999 are not already in use. If your port :80 is in use, you can change it from [index.js](https://github.com/webaverse/preview-backend/blob/master/index.js#L17)
  
```bash

# Change default port inside index.js

const  PORT = parseInt(process.env.PORT, 10) || <3000 OR ANY_FREE_PORT>;

```

### Directory Structure

```bash

**Root**

├─── index.js <--- Main Application Logic Resides Here

```

---

## Local Screenshot

**Example URL**

  [https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png](https://127.0.0.1:3001/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png)

---