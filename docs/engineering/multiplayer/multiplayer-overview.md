---
id: multiplayer-overview
title: Multiplayer Overview
---

Some notes on the current state of multiplayer development, as well as some quick what-you-need-to-know to get started with developing for multiplayer

## What can I do in multiplayer?
- Jump seamlessly between single and multiplayer
- Switch my avatar, either from an avatar in the world or from the menus
- Speak with my voice
- Switch my voice pack and voice engine
- Have my character's mouth respond to my voice with mouth movement
- Change my name, and see other user's names as a nameplate over their head
- Chat, and have my character speak whatever I chat
- Drop items into the world and use them
- Drop pets and vehicles into the world and activate them
- Pick up weapons and damage mobs
- Die and respawn at current world spawn point

## Important Files
The important, high-touch documents for multiplayer are:
- avatars/avatars.js
- app-manager.js
- character-controller.js
- chat-manager.js
- players-manager.js
- webaverse.js
- universe.js
- world.js

## Where do I start?
The main entrypoint to the Webaverse app is the Webaverse class in webaverse.js -- this is where everything gets set up and the main loop starts. The world, local and remote players are updated from here.

Multiplayer starts from enterWorld in **universe.js**

## Key Concepts

#### CRDTs
Webaverse is a peer-authoratative system. Objects in the world can be moved and manipulated by peers, and these changes will be reflected by the server out to other peers. It is simple in theory, but in practice this can potentially lead to conflicts where peers don't agree on where something is, or *what* it is.

**Conflict-free replicated data types** or CRDTs are a set of data structures which can be merged in such a way that any inconsistencies are eventually resolved, and all peers will have the same document state. Additional reading can be found here:
[Conflict-free_replicated_data_type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)

#### Websockets, WebRTC and WSRTC
Previously, Webaverse used a server-authoritative WebRTC implementation for voice and data. However, this has significant scalability issues and was generally not fun to work with. The current implementation uses pure WebSockets. In the future we will adopt WebTransport and turn on AV1 and WebCodecs once they are well-supported in Safari and Firefox.

## Multiplayer-Related Packages

#### zjs
zjs is a purpose-built API-compatible clone of yjs for multiplayer realtime games. Most of the concepts and documentation for yjs applies, so please read before attempting to work on the multiplayer.

The TL;DR is that zjs is a CRDT-backed document store. When changes to the Doc object occur, zjs will handle any conflicts and then send change events with the final state at that moment to all connected clients.

Any object in Webaverse which has a bound state -- players, app managers and tracked apps -- will be subscribed to these change events. This is done using the "observer" pattern, and zjs maps and arrays are observable objects.

#### wsrtc
Actual socket communication is handled by wsrtc, another webaverse project, which moves app data and voice packets over websockets. wsrtc is heavily bound to zjs. Messages received from peers are passed into the server's own zjs instance, where conflicts are handled and final state is passed back out to peers.

An important note about wsrtc is that this will eventually be replaced with redis or a similar distribute key-value store and possibly phased out entirely.

#### totum / metaversefile
Totum (formerly metaversefile, and still called this everywhere) is an API for Webaverse to load composable apps and for said apps to communicate with the Webaverse core. The metaversefileApi contains useful helper functions for initializing and interacting with metaverse apps, or for getting important core data into those apps. A good example would be accessing the local player's app manager, or checking if the scene is loaded.

## Development
#### Player Controllers
The character-controller.js file holds the LocalPlayer, RemotePlayer and the Player base class. Everything related to character state, including transform, movement, actions, wearing, etc is here. NPCs are also a type of player

The actual visual avatar display is largely handled by the Avatars class in the avatars/avatars.js file. The character controller sets the velocity of it's avatar class instance, which then handles the animation update.

Player objects are held in the PlayersManager class in players-manager.js, this is initialized when the client connects to a room. The PlayersManager object is a zjs map of player objects, which are also zjs maps, containing component information that might change. Players sync most things via "actions", but also have information like name, instance ID and their chosen voice engine and voice pack.

Player objects have a playerId, and are stored in the playersArray of the PlayersManager class instance

The instanceId of the avatar can be found inside the player map's avatar key, or through calling CharacterController.getAvatarState()

#### Apps
The AppManager class (app-manager.js) handles setting up, tearing down and updating apps. Apps can be avatars, wearables, buildings, anything that lives in the world with the player. All AppManagers are bound to state, which can be local or networked. world.connectState sets up all of the AppManager bindings locally, while world.connectRoom sets up the bindings globally.

When an app is loaded, it is bound to a map or array in zjs. Each app has an instanceId, which is a 5-digit alphanumeric hash. The instanceId of an object on one client should match the next.

The instanceId is a useful key for getting the app. Each app has a list of components, a contentId and an instanceId (which should be unique).