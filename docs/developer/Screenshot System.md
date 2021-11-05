
# [COMPONENT] Screenshot.JS

`Screenshot` componet is used by `Screenshot.html` file and it uses url params as inputs and outputs the screenshot to the url specified.

## Usage

```url
https://app.webaverse.com/screenshot.html?url=https://webaverse.github.io/assets/male.vrm&ext=vrm&type=png
```
#### Inputs (as Query Params)
* url: {URL of the asset that can be downloadable by the screenshot system} **[Required]**
* ext: {vrm|glb|vox|png|jpg|jpeg|gif} **[Required]**
* type: {png|jpeg} **[Required]**

#### Output
* Output screenshot will be posted back to the calling service.

## Architecture

### Flow Diagram

![enter image description here](https://i.ibb.co/W5m86p9/Screenshot-Preview-Service.png)

### Location

```
Webaverse App
└───src
   └───screenshot.js
```

### Functions


#### GLTF/GLB/VRM Loader

Uses: [MetaverseFile](https://github.com/webaverse/metaversefile) 

```js

	let  object;
	try {
		object = await  metaversefileApi.load(url);
	} catch (err) {
		console.warn(err);
	}
	return  object;

```
- The above code is a common code that applies to `GLTF`, `GLB` and load the asset into context.
- Loader uses MetaverFile Moudle that auto detects the extension type and returns us the object as scene app. 

#### VRM Loader

Uses: [MetaverseFile](https://github.com/webaverse/metaversefile) 

```js

	let  object;
	try {
		object = await  metaversefileApi.load(url);
	} catch (err) {
		console.warn(err);
	}
	return  object;

```
- The above code is a common code that applies to `VRM` and load the asset into context.
- Loader uses MetaverFile Moudle that auto detects the extension type and returns us the object as scene app. 


```js

       const _getTailBones = skeleton => {
         const result = [];
         const _recurse = bones => {
           for (let i = 0; i < bones.length; i++) {
             const bone = bones[i];
             if (bone.children.length === 0) {
               if (!result.includes(bone)) {
                 result.push(bone);
               }
             } else {
               _recurse(bone.children);
             }
           }
         };
         _recurse(skeleton.bones);
         return result;
       };
       const _findFurthestParentBone = (bone, pred) => {
         let result = null;
         for (; bone; bone = bone.parent) {
           if (pred(bone)) {
             result = bone;
           }
         }
         return result;
       };
       const _countCharacters = (name, regex) => {
         let result = 0;
         for (let i = 0; i < name.length; i++) {
           if (regex.test(name[i])) {
             result++;
           }
         }
         return result;
       };
       const _findEye = (tailBones, left) => {
         const regexp = left ? /l/i : /r/i;
         const eyeBones = tailBones.map(tailBone => {
           const eyeBone = _findFurthestParentBone(tailBone, bone => /eye/i.test(bone.name) && regexp.test(bone.name.replace(/eye/gi, '')));
           if (eyeBone) {
             return eyeBone;
           } else {
             return null;
           }
         }).filter(spec => spec).sort((a, b) => {
           const aName = a.name.replace(/shoulder/gi, '');
           const aLeftBalance = _countCharacters(aName, /l/i) - _countCharacters(aName, /r/i);
           const bName = b.name.replace(/shoulder/gi, '');
           const bLeftBalance = _countCharacters(bName, /l/i) - _countCharacters(bName, /r/i);
           if (!left) {
             return aLeftBalance - bLeftBalance;
           } else {
             return bLeftBalance - aLeftBalance;
           }
         });
         const eyeBone = eyeBones.length > 0 ? eyeBones[0] : null;
         if (eyeBone) {
           return eyeBone;
         } else {
           return null;
         }
       };
   ```

- The VRM loader is further equipped with the logic to find the eyes of the avatar and center them. It makes use of two important functions `_getTailBones` & `_findEye`
- `_getTailBones` is called on the skeleton that return the tail bones.
- `_findEye` is called on the tail bones returned from the above step.
