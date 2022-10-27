---
id: scene-file-quickstart
title: Scene File Quick Start
---
# Scene File (.scn) Quick Start Guide

## Default Scenes

Default scenes offered by Webaverse are defined in a scenes.json file, which is located in the `scenes` directory in the root of the App. The first one in the list is the default scene.

```js
[
    "street.scn",
    "treehouse.scn",
    "darkness.scn",
    "shadows.scn",
    "classroom.scn",
    "grid.scn",
    "canyon.scn"
]
```

---

## File Structure

A `.scn` file contains the scene definition. Every scene is made up of apps. Apps can be a 3D model or some other object. Objects' definitions contain some of these listed types:
* `type` – possible types are: 
    * `application/light` – for object light 
    * `application/rendersettings` – used for definition of post-processing effects 
    * `application/group` – used for grouping objects. If we don't define type, default is 3D object  
* `content` – custom object definition for different type of object
*  `start_url` – loading point for a complex object defined with `index.js`, or local/remote path for `.glb` / `.vrm` / `.vox` file
* `position` – x,y,z position in scene
* `quaternion` – x,y,z,w quaternion rotation in scene
* `scale` – x,y,z object scale
* `dynamic` – (true/false) loading is dynamic or not
* `physics` – (true/false) should object have physics enabled

This is an example with a simple scene. It has only two lights and two 3D objects.

```js
{
    "objects": [
        {
            "type": "application/light",
            "content": {
                "lightType": "ambient",
                "args": [[255,255,255], 2]
            }
        },
        {
            "type": "application/light",
            "content": {
                "lightType": "directional",
                "args": [[255,255,255], 2],
                "position": [1,2,3]
            }
        },
        {
            "position": [0,0,0],
            "start_url": "https://webaverse.github.io/classroom/"
        },
        {
            "position": [1,2, -4.5],
            "quaternion": [0,0,0,1],
            "scale": [3,3,3],
            "start_url": "https://https-vrchat-com.proxy.webaverse.com/"
        }
    ]
}
```

From this example we can see that we can set light type inside a content section.

Other parameters for lights are [[R, G, B], Intensity] where RGB represents RGB color components.
`start_url` is a remote location in this case. That location should provide a .metaversefile as a starting point for object loading. Local location would look like this `"start_url": "/classroom/"`

Next we have an example of post-processing settings for a scene.

```js
{
    "objects": [
        {
            "type": "application/rendersettings",
            "content": {
                "background": {
                    "color": [0,0,0]
                },
                "fog": {
                    "fogType": "exp",
                    "args": [[2.52, 1.74, 3.88], 0.1]
                },
                "ssao": {
                    "kernelRadius": 16,
                    "minDistance": 0.005,
                    "maxDistance": 0.1
                },
                "dof": {
                    "focus": 3.0,
                    "aperture": 0.00002,
                    "maxblur": 0.005
                },
                "hdr": {
                    "adaptive": true,
                    "resolution": 256,
                    "adaptionRate": 100,
                    "maxLuminance": 10,
                    "minLuminance": 0,
                    "middleGrey": 3
                },
                "bloom": {
                    "strength": 0.2,
                    "radius": 0.5,
                    "threshold": 0.8
                }
            }
        }
    ]
}
```


With those setting we can define:
* `background` – background color
* `fog` – scene fog
* `ssao` - Screen space ambient occlusion
* `dof` - Depth of field
* `hdr` – High Dynamic Range imaging
* `bloom` – Bloom effect

For further reading please take a look at existing scenes here:
https://github.com/webaverse/app/tree/master/scenes

---
