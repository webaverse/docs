---
id: pets 
title: Pets 
---

Custom pets are NFTs made from rigged and animated glTF2.0 binary (.glb) files and can be spawned from your inventory to follow your avatar around worlds. You can also feed them too. Over time as pets get more advanced authors can publish new versions to the NFTs unlockable folder.

## Walking Pet

In order to mint a pet that walks around behind you, you need a rigged and animated glTF 3D model.

Walking pets have two animations, walk and idle. In Blender you can find these by:

1. Opening the editor type, select Dope Sheet then Action Editor
2. Browse the actions to see the names for the animations, keep note of the names

![Animation names for walking pet](/img/blobpet.jpg)

### Mint

Next, export the file as a .glb from Blender. You don't have to change any export settings, keep the default ones.

> Note: minting pets is currently disabled right now

Finally, drag and drop the .glb file of the pet into https://webaverse.com/mint and type in the type the names of the actions from step 2. You should see the pet start following you around in the preview area.

---

## Flying Pet

Flying pets work similarly as walking pets but instead of two animations (walk, idle) these types just loop one animation.

You need to note of this animation name for now. To find it in blender, see:

1. The action name is located underneath `Animation`
2. You can also browse Dope Sheet -> Action Editor to see the name

![Flying pet](/img/flyingpet.jpg)

### Mint

Export the glTF model as a .glb then drag and drop it into https://webaverse.com/fly

![Flying pet preview](/img/flyingpet2.gif)

The pet should now be following you around in the preview scene.

