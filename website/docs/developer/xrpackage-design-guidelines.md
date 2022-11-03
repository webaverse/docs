---
id: xrpackage-design-guidelines
title: Design Guidelines
---

When creating XRPackages it is important to consider the greater surrounding experience your app could be in. The following are general XRPackage design guidelines to keep in mind:

- Use transparent skyboxes to make it easier to compose multiple apps together.
- Be mindful of size to improve loading speeds, keep packages under 100mb.
- Bake physics into a `.bin` as your `physics_url`, which can be generated for .glb models [here](https://app.webaverse.com/build.html).
