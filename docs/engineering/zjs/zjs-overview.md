---
id: zjs-quickstart
title: ZJS Quickstart
---

# Overview
zjs is a purpose-built API-compatible clone of yjs for multiplayer realtime games. Most of the concepts and documentation for yjs applies, so please read before attempting to work on the multiplayer.

The TL;DR is that zjs is a CRDT-backed document store. When changes to the Doc object occur, zjs will handle any conflicts and then send change events with the final state at that moment to all connected clients.

Any object in Webaverse which has a bound state -- players, app managers and tracked apps -- will be subscribed to these change events. This is done using the "observer" pattern, and zjs maps and arrays are observable objects.

## Where Do I Start for Development?
If you are going to work on zjs you should start by reading through the tests. For any work you do, please write new tests and verify that they work.

#### CRDTs
Webaverse is a peer-authoratative system. Objects in the world can be moved and manipulated by peers, and these changes will be reflected by the server out to other peers. It is simple in theory, but in practice this can potentially lead to conflicts where peers don't agree on where something is, or *what* it is.

**Conflict-free replicated data types** or CRDTs are a set of data structures which can be merged in such a way that any inconsistencies are eventually resolved, and all peers will have the same document state. Additional reading can be found here:
[Conflict-free_replicated_data_type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)

#### zjs document hierarchy

Z.Doc
- AppManager.appsArray -- all apps in the world
- PlayersManager.playersArray -- a list of all playerMap objects
-- CharacterController.playerMap -- all the data synced about the player, including playerId, apps and transform
-- CharacterController.avatarmap (getAvatarState) -- A map of avatar data 

Here is an example of an app stored as a Z.Map
```json
{
    "instanceId": "rum6g", // shared by all users
    "contentId": "https://webaverse.github.io/silsword/",
    "transform": [ -6, 0.5, 12, 0, 0, 0, 1, 1, 1, 1, 0 ],
    "components": "[]"
}
```

Here is an example of a player stored as a Z.Map -- the player has an avatar and is holding a sword
```js
const examplePlayer = {
    "playerId": "GoK3g",
    "avatar": { "instanceId": "qgboft" },
    "transform": {
        "0": -1.3072199821472168, // position x
        "1": 1.2576431035995483, // y
        "2": 6.1084885597229, // z
        "3": 0, // quaternion x
        "4": 0.10555386543273926, // y
        "5": 0, // z
        "6": 0.9944136142730713, // w
        "7": 16.66699981689453 // time delta
    },
    "actions": {
        "e": [
            {
                "type": "wear",
                "instanceId": "nxAup", // reference to the silsword user is holding
                "actionId": "Hgos0"
            }
        ],
        "i": [ "bafb82" ]
    },
    "apps": {
        "e": [
            { // avatar
                "instanceId": "qgboft",
                "contentId": "./avatars/scillia_drophunter_v15_vian.vrm",
                "transform": {
                    "0": 0, // position x
                    "1": 0, // y
                    "2": 0, // z
                    "3": 0, // quaternion x
                    "4": 0, // y
                    "5": 0, // z
                    "6": 1, // w
                    "7": 1, // scale x
                    "8": 1, // scale y
                    "9": 1, // scale z
                    "10": 0 // time delta
                },
                "components": "[]"
            },
            {
                "instanceId": "nxAup",
                "contentId": "https://webaverse.github.io/silsword/",
                "transform": {
                    "0": -0.9813549518585205, // position x
                    "1": 1.536096215248108,  // y
                    "2": 6.172163963317871, // z
                    "3": 0.9454419016838074, // quaternion x
                    "4": -0.30134329199790955, // y
                    "5": -0.11808272451162338, // z
                    "6": 0.037259675562381744, // w
                    "7": 1, // scale x
                    "8": 1, // scale y
                    "9": 1, // scale z
                    "10": 0 // time delta
                },
                "components": "[]"
            }
        ],
        "i": [ "952bde", "808f75" ]
    }
}
```