---
id: import-meebit
title: Import Meebits
---

![](/img/meebits0.jpg)

Larvalabs latest project explores the Metaverse through generative voxel based avatars called Meebits. There are 20,000 unique Meebits registered on the Ethereum blockchain. 

These thousands of new Meebits owners represent the latest wave in the cultural forces that are accelerating Metaverse interoperability. In this guide you'll learn how to convert your Meebit into the VRM format to bring it into Webaverse.


## Pre-requisites

- Magicavoxel: https://ephtracy.github.io/
- Unity: Recommend getting the version VRChat uses: https://docs.vrchat.com/docs/current-unity-version
- UniVRM: https://github.com/vrm-c/UniVRM/releases

### Convert Vox File
- Download the 3D Voxel model file (T-pose) from the Meebit page
- Open vox file in Magicavoxel to convert
  - Open the T-pose vox file using the folder icon
  - Click export and select obj option to save
  
![](/img/meebits1.png)  

### Rig in Mixamo

Next we need to add the skeleton rig so our model can have bones. The easiest method is through Mixamo, a free service from Adobe.

Zip the obj, mtl, and png texture files exported from Magicavoxel together then upload the zip to Mixamo.com to rig.

Set the positions like so with 'No Fingers' and hit next. The auto-rigger will take care of the rest.

![](/img/meebits2.png)

Now just download the resulting file with the default settings: FBX Binary in T-pose.

![](/img/meebits3.png)

### Convert to VRM

1. Download the latest `UniVRM-0.xx.unitypackage` version of UniVRM: https://github.com/vrm-c/UniVRM/releases
2. Create a new project in Unity. Check out Unity Hub to keep things organized.
3. On the top menu bar go to Assets -> Import Package -> Custom Package... and import the UniVRM unitypackage.
4. Import the FBX file from Mixamo into the project by drag and dropping into the Assets folder on the bottom panel
5. Click the FBX model, on the right side go to Inspector -> Rig and select Humanoid as the Animation Type then Apply.

![](/img/meebits4.png)

6. Drag the avatar file into the Hierarchy, make sure its at the right scale. Select the avatar in the Hierarchy then go to VRM0 and hit Export.

![](/img/meebits5.png)

7. Input the title, version, and author for the VRM. This information, as well as characterization permissions, will be encoded as metadata in the VRM file. Hit export when you're done!