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

