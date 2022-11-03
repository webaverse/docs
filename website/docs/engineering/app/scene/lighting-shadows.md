---
id: lighting-shadows
title: Lighting & Shadows
---
# Lighting & Shadows

Lights:bulb:can be set up as objects in the `.scn` (Scene) file.

![](/img/lights.png)

---

## Breakdown

### Type
- Object type, in this case `application/light`

---

### Content options

#### [`lightType`](https://threejs.org/docs/#api/en/lights/Light): 
* `ambient` 
* `directional` 
* `point` 
* `spot` 
* `rectArea` 
* `hemisphere`

---

#### [`args`](https://threejs.org/docs/#api/en/lights/Light): `[RGB color, intensity]`

- [`point`](https://threejs.org/docs/#api/en/lights/PointLight): `[RGB color, intensity, distance, decay]`
- [`spot`](https://threejs.org/docs/#api/en/lights/SpotLight): `[RGB color, intensity, distance, angle, penumbra, decay]`
- [`rectArea`](https://threejs.org/docs/#api/en/lights/RectAreaLight): `[RGB color, intensity, width, height]`
- [`hemisphere`](https://threejs.org/docs/#api/en/lights/HemisphereLight): `[Sky RGB, Ground RGB, intensity]`

---

#### [`position`](https://threejs.org/docs/#api/en/math/Vector3): `[x, y, z]`

---

#### [`shadow`](https://threejs.org/docs/#api/en/lights/shadows/LightShadow): `[side, mapSize, near, far, bias, normalBias]`

:::note
Shadows only work with `directional` `point` and `spot` lights
:::

---

## Code Example:
```js
    {
      "type": "application/light",
      "content": {
        "lightType": "directional",
        "args": [[255, 255, 255], 5],
        "position": [1, 2, 3],
        "shadow": [50, 4096, 0.1, 1000, 0, 0.2]
      }
    }
```
:::tip

### Good to know:
- `ambient` does not require a `position`, since it illuminates the entire scene.

:::

---





