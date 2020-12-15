---
id: technical-notes
title: Technical Notes
---

This page contains technical notes that might help in development of specific kinds of XRPKs.

## Avatars

Avatars are representations of a user in a world, which you can control and view in first-person mode to see their perspective. They can be anything from a sword to a person, packaged into an XRPackage.

On a deeper level, avatars are usually <a href="https://vrm.dev/en" target="_blank" rel="noopener noreferrer">VRM files</a> (a file for handling humanoid 3D avatar data for VR apps). VRMs are built on top of <a href="https://www.khronos.org/gltf/" target="_blank" rel="noopener noreferrer">glTF binary (GLB)</a> files.

You can find avatars at <a href="hub.vroid.com" target="_blank" rel="noopener noreferrer">https://hub.vroid.com/</a>, which is the largest open public hub of avatars.

The three.js implementation which is used in our avatars is <a href="https://github.com/pixiv/three-vrm" target="_blank" rel="noopener noreferrer">`three-vrm`</a>, which can be used to aid development of avatars if using three.js.

## Multiplayer

The Webaverse does have 'multiplayer' support! Multiplayer should be implemented by individual packages via the APIs exposed to them. These APIs can be found at the following pages:

- [`XRPackage` API](./7-xrpackage-api.md)
- [`XRPackageEngine` API](./8-xrpackage-engine-api.md)

In the `iframe`, `window.xrpackage` will be available to access these APIs.

An example of a multiplayer package is the <a href="https://github.com/webaverse/multiplayer" target="_blank" rel="noopener noreferrer">Webaverse Multiplayer package</a> which uses <a href="https://github.com/webaverse/metartc" target="_blank" rel="noopener noreferrer">MetaRTC</a>.

Your implementation can use anything else that is suitable, for example <a href="https://github.com/networked-aframe/networked-aframe" target="_blank" rel="noopener noreferrer">Networked-Aframe (NAF)</a>.

## Package loading

In the Webaverse, XRPackages are loaded using <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" target="_blank" rel="noopener noreferrer">`iframe`</a> elements &mdash; these represent single packages which are manipulated inside the `iframe`.

The individual content from the XRPackages is loaded with the support of the page's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank" rel="noopener noreferrer">Service Worker</a>. The Service Worker acts as a proxy server in that it intercepts requests to files in the package, and returns the actual content rather than assuming it is an actual network request. For example, a request to `/cube.html` (which may be the entry-point `start_url` for an XRPackage) will be intercepted to return the actual file, rather than `/cube.html` on the server hosting the webpage.

You can find the XRPackage Service Worker <a href="https://github.com/webaverse/xrpackage/blob/master/sw.js" target="_blank" rel="noopener noreferrer">at GitHub</a>. If you are deploying XRPackages to your own website, you'll need to import this Service Worker to your own site by adding a `sw.js` file to the root of your website with the following contents:

```js
importScripts("https://static.xrpackage.org/sw.js");
```
