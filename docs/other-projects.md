---
id: other-projects
title: Other Webaverse projects
---

There are lots of other projects related to the Webaverse in active development. If you want to get involved with them please visit the relevant GitHub pages to learn more and get started!

## Metachromium

<a href="https://metachromium.com/" target="_blank" rel="noopener noreferrer">Metachromium</a> is a spatial app browser (modified from the open source Google Chromium browser) that runs side-by side with OpenVR (SteamVR). It lets you open any WebXR page as a spatial overlay app that runs on top of any other VR game. Its features include:

- Run WebXR context on top of an OpenVR application
- Run multiple WebXR applications inside a single Metachromium context
- Volumetric streaming capabilities

Metachromium requires an OpenVR compatible XR Device for the best experience and at least 1GB of storage.

To use Metachromium, install it Metachromium through <a href="https://store.steampowered.com/app/685110/Metachromium/" target="_blank" rel="noopener noreferrer">Steam</a>, run your SteamVR application, run Metachromium and choose an app you would like to overlay.

### Rendering Content

For different WebXR contexts to be overlaid inside an OpenVR application, special math must be done so the outlines of these different applications blend into the world correctly in terms of its alpha (opacity). Metachromium does the blending such that the renderings appear as though they are in the correct space when viewed through the headset.

More specifically, Metachromium is capturing a 360 stereoscopic view from the WebXR frame buffer and then mapping that view to a transparent sphere that surrounds the user. By drawing the correct pixels in the correct place on the sphere and tracking the headset at 144hz, the user has virtually no idea that the content being overlaid is from a different application.
