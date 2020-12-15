---
id: runtime-api
title: Runtime API
---

The Runtime API exposes everything you could possibly want to access within Webaverse. This includes access to crypto minting, world physics, ui building, and more.

You can call these directly within your app without any extra requirements on your end. This is because the Runtime API is injected to your code at runtime.

## `ui`

### `makeCubeMesh`

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

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
| Name| Type |
| --- | ---- |
| `textMesh` | mesh |

-------------------

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

-------------------

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

-------------------

### `makeTradeMesh`

#### Parameters

| Name| Type |
| --- | ---- |
| `cubeMesh` | mesh |
| `ontrade` | function |
| `onclose` | function |

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makePopupMesh`

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeInventoryMesh`

#### Parameters

| Name| Type |
| --- | ---- |
| `cubeMesh` | mesh |
| `onscroll` | function |

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeColorsMesh`

#### Parameters

| Name| Type |
| --- | ---- |
| `cubeMesh` | mesh |
| `colors` | array |
| `oncolorchange` | function |

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeIconMesh`

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeMenuMesh`

#### Parameters

| Name| Type |
| --- | ---- |
| `cubeMesh` | mesh |
| `onclickBindings` | array |

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `intersectUi`

#### Parameters

| Name| Type |
| --- | ---- |
| `raycaster` | raycast |
| `meshes` | array |

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeHighlightMesh`

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeRayMesh`

#### Returns
| Name| Type |
| --- | ---- |
| `ray` | mesh |

-------------------

### `makeRigCapsule`

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeButtonMesh`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `text` | string | The text on the mesh |
| `font` | string | The path to the font, defaults to "./GeosansLight.tff" |
| `size` | number | The size of the font, default is 0.1 |

#### Returns
| Name| Type |
| --- | ---- |
| `textMesh` | mesh |

-------------------

### `makeArrowMesh`

#### Returns
| Name| Type |
| --- | ---- |
| `mesh` | mesh |

-------------------

### `makeCornersMesh`

#### Returns
| Name| Type |
| --- | ---- |
| `cornersMesh` | mesh |

-------------------

### `makeTextInput`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `text` | string | The text on the mesh |
| `font` | string | The path to the font, defaults to "./GeosansLight.tff" |
| `size` | number | The size of the font, default is 0.1 |
| `width` | number | The width of the input, default is 1 |

#### Returns
| Name| Type |
| --- | ---- |
| `textInput` | Object3d |

-------------------

### `makeTabs`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `tabs` | array | The array of tabs |
| `size` | number | The size of the tabs, default is 0.08 |
| `width` | number | The width of the tabs, default is 1 |

#### Returns
| Name| Type |
| --- | ---- |
| `object` | Object3d |

-------------------

### `makeItem`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `previewUrl` | string |  |
| `text` | string | The text on the mesh |
| `size` | number | The size, default is 0.1 |
| `width` | number | The width, default is 1 |
| `buttons` | array | The array defaults to empty [] |

#### Returns
| Name| Type |
| --- | ---- |
| `object` | Object3d |

-------------------

### `makeScrollbar`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `slots` | number | The # of slots, default is 4 |
| `totalSlots` | number | The total # of slots, default is 20 |
| `size` | number | The size, default is 0.1 |
| `width` | number | The width, default is 1 |

#### Returns
| Name| Type |
| --- | ---- |
| `scrollbarMesh` | mesh |

-------------------


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

-------------------

## `app`
## `appManager`
## `renderer`
## `scene`
## `camera`
## `runtime`
## `world`
## `physics`

