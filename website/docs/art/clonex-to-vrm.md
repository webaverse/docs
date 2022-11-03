---
id: clonex-to-vrm
title: Convert CloneX Avatars to VRM
---
# Convert CloneX Avatars to VRM

## How to convert CloneX avatars to VRM: THE EASY WAY!

:::note
This tutorial REQUIRES the CATS plugin!
:::

### Step 1: Download your CloneX components

---

### Step 2: Import your files into Blender
 
Use https://clone.tools/ to import your clone into blender.
Or append all of the files manually.

Start a new blender file:

![](/img/clonex/clonex01.png)

Select your collection and go to append

Navigate to your folder: 
CloneX\_female_or_male\_blender\f_character_neutral_neutral.blend\Collection\

And append the collection to your current scene.

![](/img/clonex/clonex02.png)

We recommend starting with the base.

Now we are going to make the base armature more visible and useable.

Go to object properties and make the armature appear in front for easy selecting.

![](/img/clonex/clonex03.png)

Then rename it to “Armature”

![](/img/clonex/clonex04.png)

Rename the object data properties to Armature as well.

![](/img/clonex/clonex05.png)

Now go through and import another part.

![](/img/clonex/clonex06.png)

Now we want to start assigning parts to the master armature.

Select your master Armature. Start Pose Mode. Then select the Root bone (usually the hip bone) and move the entire model off to the side a little bit.

![](/img/clonex/clonex07.png)

**Return to object mode (without stopping pose mode)** and select the part that was left behind.

![](/img/clonex/clonex08.png)

After selecting the part go to the modifiers of that object.

![](/img/clonex/clonex09.png)

Change the object target to our master Armature.

![](/img/clonex/clonex10.png)

The new part should now snap to the same pose the body is in.

Rinse and repeat for every part your model needs.

![](/img/clonex/clonex11.png)

You should have all of the parts now on the model. And assigned to the master armature.

Start and Stop the armature to set it back to the default position.

![](/img/clonex/clonex12.png)

Select everything in the scene.

![](/img/clonex/clonex13.png)

Now go to Object, Apply, Scale. And confirm the action.

![](/img/clonex/clonex14.png)

Move the character out of the way once more in pose mode then go back to edit mode without stopping pose mode once more.

![](/img/clonex/clonex15.png)

Select all of the armatures that are left behind and delete them.

![](/img/clonex/clonex16.png)

If done correctly nothing should disappear or move.

![](/img/clonex/clonex17.png)

Everything should pose together nicely now.

---

### Step 3: Clean up.

![](/img/clonex/clonex18.png)

Lets clean up the collections now

![](/img/clonex/clonex19.png)

Select all of these empty transform objects and the Eye_Shine object. Right click one of the selected objects and select the “Delete Hierarchy” option. This deletes the objects and everything inside of them.

You can keep the eye shine, but you would have to create a separate material for it in order for it to work correctly.

Its personal choice and I believe that its not needed and saves some extra steps.

If you do keep it, Hide it and rejoin it to the rest of the character after everything is optimized so it remains untouched.
And in unity, simply assign it a transparent material.

Now we will parent the objects to the main armature.

Select the part, Then the armature, then hit ctl+p and select the Object option.

![](/img/clonex/clonex20.png)

Do this for all parts.

![](/img/clonex/clonex21.png)

Next delete the extra collections and combine all of the meshes to be in the armature. ( you can click and drag the meshes on top of the armature to do this.)

---

### Step 4: Armature clean up.

If you have noticed, there are more bones in the armature then needed. We will be using cats to fix this.

![](/img/clonex/clonex22.png)

Click on the wrench icon next to fix model and use these settings.

![](/img/clonex/clonex23.png)

---

### Step 5: Mesh cleanup.

**CREATE A NEW SAVE FILE BEFORE DOING THIS.**

Our goal here is to remove parts of the body mesh that are not visible. This step is optional, but highly recommended. It will help with the quality of the model after optimization. 

![](/img/clonex/clonex24.png)

This depends on your clone and what clothes they have, but the idea is to select portions that won't be visible and simply delete them.

![](/img/clonex/clonex25.png)

If done correctly you won't see any visible difference in your model. But we are saving lots of valuable triangles and UV space for later.

![](/img/clonex/clonex26.png)

For some models you can probably get away with deleting things like this eyelash because it clips through the eyepatch.

Use a discerning eye and good luck!

---

### *Optional* Step 5a: Shape keys. 

The cloneX avatars are set up for face tracking so you will need to set them up to match VRM shape keys if you want. Do this now if you want to.

But the list of Shape keys you need to set up are the following.

![](/img/clonex/clonex27.png)

* Neutral
* Joy
* Angry
* Sorrow
* Fun
* Surprise
* A
* I
* U
* E
* O
* Blink

This is the basic set up to make the shape keys.

#### Step 1: Teeth

Set up the teeth shape key to build other shape keys with.

The teeth don’t move with the shape keys so we will make one that does move the teeth.

![](/img/clonex/clonex28.png)

Click on the face, Navigate to the shape keys, and find the “JawOpen” shape key and set it to 1.

Now click on the armature and  go to pose mode.

Adjust the jaw bone to match up with the shape key.

![](/img/clonex/clonex29.png)

![](/img/clonex/clonex30.png)

Now cats select the “Pose to Shape key” button. And name it something appropriate like “teeth open”

![](/img/clonex/clonex31.png)

![](/img/clonex/clonex32.png)

It will now appear at the bottom of the list.

Go ahead and reset the pose by starting and stopping pose mode in cats again

![](/img/clonex/clonex33.png)

![](/img/clonex/clonex34.png)

It should now reflect the changes you have made. If you only have the new shape key set to 1 and everything else set to 0.

To make the shape keys needed simply go through the list and make “blends” of the different shape keys until you find a face shape that matches the ones needed from the list above.

For example.

![](/img/clonex/clonex35.png)

A mixture of these two makes it look like the CloneX is Happy.

![](/img/clonex/clonex36.png)

To save this as its own shape key, Click the down arrow next to the list and click on “New Shape From Mix” and give it an appropriate name.

Repeat this for every needed shape key.

---

### Step 6: Optimization Baking!

This step is really important and may take a long time depending on your computer's hardware.

In the cats plugin, go down to the Bake option near the bottom of the tool.

![](/img/clonex/clonex37.png)

Click on the Desktop button.

Change the Decimate value to 45000.

Change the Resolution to 4096.

Then click on the “Show Advanced General Options”

![](/img/clonex/clonex38.png)

Check the Ambient Occlusion option and the Set eyes to full brightness option.

![](/img/clonex/clonex39.png)

Now when you are ready to let your computer do its thing for a while. Select the GPU or the CPU whatever component is more powerful for you. (Most of the time it will be the GPU). Then click the Copy and Bake button.

**This will take a long time. On a mid level computer it has taken upwards of 45 minutes. Blender will be unresponsive during this operation. Let it do its thing until done.**

At this point you could go for a nice walk, stretch, drink some water. Etc. 

Once done you will come back to a nice optimized model.

![](/img/clonex/clonex40.png)

Don't worry about how the mesh looks, everything should bend and look relatively the exact same.

You can delete the old model from the scene.

Go to the materials and see if there are any

![](/img/clonex/clonex41.png)

If there are, set the users to 0 by holding shift while clicking on the X button.

Then clear the unused data blocks.

![](/img/clonex/clonex42.png)

---

### Step 7: Export the avatar as a FBX file.

At this point your avatar is optimized and ready to be exported to VRM. To start the process, we first need to export the model to an FBX file.

You can do that here. Or with the Cats tool

![](/img/clonex/clonex69.png)

![](/img/clonex/clonex70.png)

We will use this FBX file in the next section.

#### UNITY PORTION:

You need the VRM exporter package and the proper unity version.
You can find the required information at this link.
https://vrm.dev/en/univrm/index.html

![](/img/clonex/clonex43.png)

Create a new unity project, Make a new scene, and create a new file in your assets folder.

Drag in your FBX and your textures. You can find them in the folder CATS created. The folder will be in the same directory as your blend file.

You may get a notification that you need to mark the “normal” texture as a normal texture. Go ahead and click the “fix now” button if you get that.

![](/img/clonex/clonex44.png)

Drag your FBX into the scene and set the transforms to 0

Select the FBX file and go to the Model tab.

![](/img/clonex/clonex45.png)

![](/img/clonex/clonex46.png)

Change the Blend Shape Normals to “none” and click apply.

![](/img/clonex/clonex47.png)

Go to rig. Change animation type to humanoid and click apply.

![](/img/clonex/clonex48.png)

Then click Configure.

Unity will prompt you to save your scene. Go ahead and do so.

![](/img/clonex/clonex49.png)

Here we want to check that all the bones are correct.

Make sure all the bones in the list are the correct bones. Its ok if Upper chest isn't there.

![](/img/clonex/clonex50.png)

Then navigate to the head and make sure the jaw bone is not present.

![](/img/clonex/clonex51.png)

If it all looks good. Click done.

![](/img/clonex/clonex52.png)

Make sure there are no animations on the model.

Next, Go to the Materials tab and click on Extract Materials. And put it in the asset folder your other files are located in.

![](/img/clonex/clonex53.png)

Now click on your material you just exported and assign the textures to the right spots

![](/img/clonex/clonex54.png)

Albedo = base colors

Metallic = how shiny parts are

Normal Map = the purple lookin one

Emission = What parts (if any) glow. You can also select the HDR color here to change the glow.

And that's all you need to do for the material.

At this point your CloneX Should look complete visually.

![](/img/clonex/clonex55.png)

Next let's do our first VRM export. This will set up the files for further adjustments and customization.

![](/img/clonex/clonex56.png)

Select your model in the HIearchy, then VRM, then Export. This will pop open a window.

To export we need to resolve all of those required fields.

Click on Make T-pose.

Give it a title, version, and author. 

Then click export.

![](/img/clonex/clonex57.png)

Save this VRM in the same asset folder as your other files in the Unity project.

![](/img/clonex/clonex58.png)

Doing so will populate more folders into your asset folders.

![](/img/clonex/clonex59.png)

Move your model over then drag the new VRM prefab into the scene and set its transforms to 0.

![](/img/clonex/clonex60.png)

Zoom in and drag the “First Person Offset” between the eyes towards the front of the face. 

![](/img/clonex/clonex61.png)

Now scroll down in the inspector and find the Blend shape proxy script part and click on the BlendShape field. This will navigate to where this file is stored.

Click on that file.

![](/img/clonex/clonex62.png)

Here you can assign Shape keys if you have them made to specific BlendShapeClips. These are used for lipsync and emoting in Webaverse. If you don't have them then you can skip this.

To make a shape key active, simply select the Blend shape clip, then drag the according shape key slider to 100.

![](/img/clonex/clonex63.png)

With this done we are now ready for the final Export.

![](/img/clonex/clonex64.png)

Select the model, go to VRM, then the ExportSettings tab.

![](/img/clonex/clonex65.png)

Go to ExportSettings, Check “Reduce Blendshape” then Export.

Save this VRM to a place outside of the Unity project folder. This is the file you will use in Webaverse!

---

### Importing VRM into Webaverse:

To upload an avatar to webaverse. Simply open up the game, and drag the file in.

![](/img/clonex/clonex66.png)

After a short upload. A window prompt will appear.

![](/img/clonex/clonex67.png)

Simply click on Equip to self.

![](/img/clonex/clonex68.png)

Presto! You are now ready to travel the Metaverse in style!






































































