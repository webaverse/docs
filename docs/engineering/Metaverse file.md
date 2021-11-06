---
id: metaverse-file
title: Metaverse File
---
# Metaverse File

`MetaverseFile` componet is used by `entire application` to load assets in the application.

```js
import  metaversefileApi  from  './metaversefile-api.js';
```

Depends on: [MetaverseFile](https://github.com/webaverse/metaversefile) 

## Usage

```js

	let  object;
	try {
		object = await  metaversefileApi.load(url);
	} catch (err) {
		console.warn(err);
	}
	return  object;

```

#### Inputs 
* url: {URL of the asset that can be downloadable by the screenshot system} **[Required]**

#### Returns 
* Promise: 

#### Output
* Object of application with the 

#### Supported Assets 
* VRM
* VOX
* JS
* SCN
* LIGHT
* IMAGE
* HTML
* GROUP
* GLBB
* GLB
* GIF
* FOG
* Background



## Architecture

### Flow Diagram

![enter image description here](https://i.ibb.co/Z8v4ySC/Metaverse-File.png)

### Location

```
Webaverse App
└───src
   └───metaversedile-api.js

```

---

## .metaversefile

Objects loaded from .scn files can be placed in folders. Files with the name .metaversefile are used as starting points for custom object apps. Typical .metaversefile looks like this:

```js
{
	"start_url": "index.js"
}
```

Elements in .metaversefile can have the following types:
* `name` – object name
* `start_url` – url that Webaverse needs to load. It can be “index.js” if we are loading a Three.js object defined by custom code or it can be “name.glb” for simple 3D objects
* `components` – this object will be copied to components property of app object

Example folder structure of complex object

```
.
└───.metaversefile
└───.nojeckyll
└───index.js
└───e-key.png
```

---

:::note
### .nojekyll

It is now possible to completely bypass Jekyll processing on GitHub Pages by creating a file named .nojekyll in the root of your pages repo and pushing it to GitHub. This should only be necessary if your site uses files or directories that start with underscores since Jekyll considers these to be special resources and does not copy them to the final site.
:::
