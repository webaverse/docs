---
id: xrpackage-api
title: XRPackage API
---

The `XRPackage` API is documented here. See install instructions and development setup <a href="https://github.com/webaverse/xrpackage" target="_blank" rel="noopener noreferrer">at the GitHub repository</a>.

The `XRPackageEngine` API is documented [in the next section](./8-xrpackage-engine-api.md).

**Note: This page is still in development, whilst the API is documented**.

## `constructor`

## `add`

## `addFile`

## `clone`

## `compileFromFile`

## `compileRaw`

## `download`

Downloads and returns an XRPackage object with the specified hash from IPFS.

**Parameters**: `hash`, a string of the IPFS package hash to be downloaded.

**Returns**: `p`. an `XRPackage` object


## `ensureRunStop`

## `export`

## `getAabb`

## `getHash`

## `getMainData`

## `getManifestJson`

## `getModel`

## `getParentEngine`

## `getScreenshotImage()`

**Parameters**: None

**Returns**: an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image" target="_blank" rel="noopener noreferrer">`Image`</a> object with `src` set to the result of [`getScreenshotImageUrl()`](#getscreenshotimageurl), or `null` if no image is available.

## `getScreenshotImageUrl()`

**Parameters**: None

**Returns**: a <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMString" target="_blank" rel="noopener noreferrer">`DOMString`</a> for the first image in the manifest's `icons` array, or `null` if there is no manifest/icon.

## `getVolumeMesh`

Retrieve the collision mesh of the XRPackage if it exists.

**Parameters**: None

**Returns**: An <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank" rel="noopener noreferrer">`Object`</a> containing metadata and geometry data for the package if a volume mesh exists, or `null` if a volume mesh does not exist.

An example return object:

```javascript
{
  "metadata":{
    "version":4.5,
    "type":"Object",
    "generator":"Object3D.toJSON"
  },
  "geometries":[
    {
      "uuid":"E7844CA3-A5B8-438A-89A4-7F4D6A871172",
      "type":"BufferGeometry",
      "data":{
        "attributes":{
          "position":{
            "itemSize":3,
            "type":"Float32Array",
            "array":[ Array of floating point numbers ],
            "normalized":false
          }
        },
        "index":{
          "type":"Uint32Array",
          "array":[ Array of integers ]
        },
        "boundingSphere":{
          "center":[ Array of floating point numbers ],
          "radius":0.2692583820310468
        }
      }
    }
  ],
  "materials":[
    {
      "uuid":"81368B43-FA77-4919-8399-64F8BACFA73C",
      "type":"MeshStandardMaterial",
      "color":16777215,
      "roughness":1,
      "metalness":0,
      "emissive":0,
      "flatShading":true,
      "depthFunc":3,
      "depthTest":true,
      "depthWrite":true,
      "stencilWrite":false,
      "stencilWriteMask":255,
      "stencilFunc":519,
      "stencilRef":0,
      "stencilFuncMask":255,
      "stencilFail":7680,
      "stencilZFail":7680,
      "stencilZPass":7680
    }
  ],
  "object":{
    "uuid":"10684645-B45C-40DC-AA2A-2CAC167C597B",
    "type":"Group",
    "layers":1,
    "matrix":[ Array of binary integers (0, 1) ],
    "children":[
      {
        "uuid":"B66524DE-C1AE-4EC9-938E-DEA574D747A7",
        "type":"Mesh",
        "name":"mesh_0",
        "layers":1,
        "matrix":[ Array of binary integers (0, 1) ],
        "geometry":"E7844CA3-A5B8-438A-89A4-7F4D6A871172",
        "material":"81368B43-FA77-4919-8399-64F8BACFA73C"
      }
    ]
  }
}
```

## `grabrelease`

## `isAttached`

## `load`

## `loadAvatar`

## `remove`

## `removeFile`

## `setMatrix`

## `setPose`

## `setSchema`

## `setXrFramebuffer`

## `upload`

Uploads the XRPackage to the IPFS directory and returns the IPFS hash of the package.

**Parameters**: None

**Returns**: `hash`, a string containing the IPFS hash of the newly uploaded package.


## `waitForLoad`

## `waitForRun`
