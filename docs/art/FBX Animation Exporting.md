---
id: fbx-export
title: FBX Animation Exporting
---
# FBX Animation Exporting


## Animation 

## Mixamo web based animations 
* most of the mixamo animations on mixamo.com should work with webaverse
* mixamo offers, for some animations, a bit of paraemetric control over the animation
  * select the animation 
  * tweak sliders 
  * make sure "in place" is selected 
  * upon download choose fbx binary , 30 fps, without skin, and frame reduction

## AutoRigPro animation remapping
* AutoRigPro is a blender addon that can be very useful when needing to transfer animation data from one armature to another
* be sure to get both auto rig pro and the quick rig extra addon 
  * https://blendermarket.com/products/auto-rig-pro-quick-rig
  * https://blendermarket.com/products/auto-rig-pro
* http://lucky3d.fr/auto-rig-pro/doc/remap_doc.html
* https://youtu.be/0GKPCn-JQ4k

## FBX rigging with rigify armature 

### FBX Armature requirements 
* must be an official mixamo rig 
* **double check that all bone names are prefixxed with mixamorig:**
* double check if you need to use auto-key or not , it is on by default in the blend file
* **The player model must remain at a single point in space; movement of the model is driven on the engine side.** For example, in a jump animation, the model would go through the motions and timing of the jump, but would not move on the Z axis. The only exception to this is crouching, in that case the hips can lower but should not go above their standing height.


* animate with rigify armature as normal
* go to object mode 
* select fbx armature 
* *important* make sure that the rigify armature is still in the animation action you want to export 

### Export
* input proper filename
* options of note
  * selected objects 
  * leaf bones (deselect this)
  * deselect nla strips and all actions 
* hit export
  * it should export just the animation that you did with the rigify armature but into the fbx armature due to the bone constraint setup


### Legacy Method 
* make sure the cube driver is set to a position X of 1000 meters 
* animate with the rigify armature , make actions 

## Bake 
* select fbx armature 
* in pose mode, the fbx armature is following the rigify armature.
* bake its current animation to a new action:
  * pose -> animation -> bake action 
  * make sure visual keying is selected
* when done move cube driver back to position X 0 so that the fbx armature is no longer bieng controlled by rigify armature

## Export
* select fbx armature
* go into pose mode, make sure the animation playing back is the one that you want to export. 
* options of note
  * selected objects 
  * leaf bones (deselect this)
  * deselect nla strips and all actions 
* hit export , it should export just that one animation you have currently highlighted


*Rig and Naming Conventions:*
![](https://i.imgur.com/ZdtsHct.png)
