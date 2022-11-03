---
id: monetization
title: Web Monetization
---

This guide will walk you through the basic steps for adding the ability to "unlock" features in your XRPackage when a user has web monetization enabled *or* when a user owns a NFT of your XRPackage.

**Note**: This guide assumes you have read [Creating Your First XRPackage](./creating-an-xrpk.md) or are familiar with what an XRPackage is.

## Prerequisites

- Understand and be able to [create an XRPackage](./creating-an-xrpk.md).
- Have an XRPackage you want to add the ability to unlock a feature when a user has web monetization enabled *or* own your XRPackage as an NFT.

## Add The Monetization Start Event Listener

Let's say you have a lightsaber XRPackage made with Three.js. You control the "intensity" of the lightsaber by changing the variable `particleIntensity`, and you want users that unlock your XRPackage to have a more "intense" lightsaber.

In order to know when a user unlocks your XRPackage, all you have to do is add an EventListener for `monetizationstart` on `document.monetization` as follows:

```js
document.monetization.addEventListener('monetizationstart', () => {
    particleIntensity = 0.1;
 })
```

That's it! Inside of the event listener, you can change whatever you want to change for users who unlock your XRPackage.
