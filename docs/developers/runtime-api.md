---
id: runtime-api
title: Runtime API
---

The Runtime API exposes everything you could possibly want to access within Webaverse. This includes access to crypto minting, world physics, ui building, and more.

You can call these directly within your app without any extra requirements on your end. This is because the Runtime API is injected to your code at runtime.

## `ui`

### `makeCubeMesh`

#### Returns
| Name| Type | Description |
| --- | ---- | ----------- |
| `mesh` | THREE.mesh | Cube mesh |

### `makeTextMesh`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `text` | string | The text on the mesh |
| `font` | string | The path to the font, defaults to "./GeosansLight.tff" |
| `fontSize` | number | The size of the font, default is 1 |
| `anchorX` | string | The x anchor, default is "left" |
| `anchorY` | string | The y anchor, default is "middle" |

#### Returns
| Name| Type | Description |
| --- | ---- | ----------- |
| `textMesh` | mesh | The generated text mesh |

### `makeToolsMesh`

#### Parameters

| Name| Type |
| --- | ---- |
| `tools` | array |
| `selectTool` | function |
| `selectMenu` | function |

#### Returns
| Name| Type | Description |
| --- | ---- | ----------- |
| `mesh` | mesh | The generated tool mesh |

### `makeDetailMesh`

#### Parameters

| Name| Type |
| --- | ---- |
| `cubeMesh` | mesh |
| `onrun` | function |
| `onbake` | function |
| `onadd` | function |
| `onremove` | function |
| `onclose` | function |
| `selectMenu` | function |

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |


## `crypto`

### `mintToken`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `file` | blob | The data of the file to be tokenized |
| `options` | object | You can define the `description` of the token here |

#### Returns
| Name| Type | Description |
| --- | ---- | ----------- |
| `tokenId` | number | The id of the newly minted token |

## `app`
## `appManager`
## `renderer`
## `scene`
## `camera`
## `runtime`
## `world`
## `physics`

