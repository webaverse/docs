---
id: monetization-api
title: Web Monetization API
---

The Web Monetization API allows you to lock or unlock content in your XRPackage based on whether a user has [Web Monetization](https://webmonetization.org/) enabled or if they are a NFT owner of your XRPackage.

For a step-by-step guide on how to implement this API in your app, checkout [Create An XRPackage](./creating-an-xrpk.md).

## Document.monetization

The browser exposes the `document.monetization` DOM object that implements
[`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
and has a read-only `state` property.

The object allows you to track Monetization events and see whether the user has web monetization enabled *or* is a NFT owner of your XRPackage.

```js
document.monetization: EventTarget
document.monetization.state: 'stopped' | 'started'
```

## States

Check the value of `document.monetization.state` to see if a user is has web monetization enabled *or* is a NFT owner of your XRPackage.

### `stopped`

The user is not currently an NFT owner of your XRPackage and does not have Web Monetization enabled.

```js
document.monetization.state === 'stopped'
```

### `started`

The user is an NFT owner of your XRPackage *or* has Web Monetization enabled and Webaverse is currently sending micropayments.

```js
document.monetization.state === 'started'
```

## Browser events


### `monetizationstart`

Determine when Monetization has started by adding an event
listener for `monetizationstart` to `document.monetization`.

#### Event listener

```js
function startEventHandler (event) {
  console.log(event)
}

document.monetization.addEventListener('monetizationstart', startEventHandler)
```

### `monetizationstop`

Determine when Monetization has stopped by adding an event listener for
`monetizationstop` to `document.monetization`.

#### Event listener

```js
function stopEventHandler (event) {
  console.log(event)
}

document.monetization.addEventListener('monetizationstop', stopEventHandler)
```
