---
id: preview-flow
title: Preview Flow
---

![](/img/preview-flow.jpg)

The preview server is a headless chromium instance that generates screenshots and animations of items via puppeteer. It's also in charge of generating unique trading cards for every NFT item minted. Here's how it works:

1. Start with user-agent (website or Discord bot) requesting a preview image.
2. Request gets sent to the preview server, checks S3 cache if there's a preview already.
3. If there's no preview, the server will ask the API about the token and fetch the IPFS content
4. The files from the IPFS hash get rendered using Puppeteer, exported as previews.



---

## Vertical view

![](/img/preview-flow2.jpg)