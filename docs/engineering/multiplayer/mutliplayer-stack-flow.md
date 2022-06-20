---
id: multiplayer-stack-flow
title: Multiplayer Stack Flow
---

This is the stack-flow of initialization calls and event responses. This is subject to change and should be updated to UML.

### App.jsx Initialization
> universe.js > enterWorld # user pressed multiplayer button or went to multiplayer room
>> world.js > connectRoom()
>>> players-manager.js > playersManager.bindState # start listening for players added and removed to this array
>>>> players-manager.js > bindState.observe(**observePlayersFn**)

>> world.js > connectRoom()
>>> character-controller.js > localPlayer.bindState # Start listening for changes to this player
>>>> character-controller.js > bindState.observe(**observeAvatarFn**) # Listen for changes to the avatar
>>>>> character-controller.js > localPlayer.attachState
>>>>>> app-manager.js > appManager.bindState # Listen to changes to individual apps
>>>>>>> app-manager.js > bindState.observe(**observeAppsFn**)

### Observer Event Handlers
player **observeAvatarFn**
> character-controller.js > **observeAvatarFn** > syncAvatar()
>> character-controller.js > **observeAvatarFn** > transplantApp()

appManager **observeAppsFn**
> (respond to added and removed events on apps)

app-manager.js **observeTrackedAppFn**
> (if event contains transform update, update app transform)

### Remote Player

players-manager.js **observePlayersFn**
> (remote player joins) > new RemoterPlayer()
>> character-controller.js > remotePlayer.bindState
>>> character-controller.js > bindState.observe(**observeAvatarFn**)
>>>> character-controller.js > remotePlayer.attachState
>>>>> app-manager.js > appManager.bindState
>>>>>> app-manager.js > bindState.observe(**observeAppsFn**)