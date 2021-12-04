---
id: animation-baker
title: Animation Baker
---

# Animation Baker

The `Animation Baker` module exposes the API that can be used to bake animations and test them in-app.

```properties
foo@bar:~$ node animations-baker.mjs ./public/animations/*.fbx ./public/animations/animations.cbor
```
---

## Usage

### `CLI`

```properties
foo@bar:~$ node animations-baker.mjs ./public/animations/*.fbx ./public/animations/animations.cbor
```
#### Inputs
* Argument # 1: Regex based path to files  **[Required]**
* Argument # 2:Output file with it's path  **[Required]**

---

#### Output
`Output file specified will be written to the path`

---

#### Testing
* Clone the latest repo of the [Webaverse App](https://github.com/webaverse/app) using
	`git clone --recurse-submodules https://github.com/webaverse/app.git`
* Replace the animations present in the `public/animations` folder with the animations you have.
* Run the animations baker with it's input and output arguments
* The newly baked animations can be tested by replacing the output file produced with the `animations.cbor`  present under the directory 
	```
	Webaverse App
	└───public
	   └───animations
	         └─── animations.cbor
	```
* The application can then be run with the command: `npm run dev`
* Visit the `URL` specified in the console of the application, ([localhost](https://localhost:3001) by default)

---

## Architecture

### Location

```
Webaverse App
└───animations-baker.mjs
```

---

### `Functions`

#### `Static Server`

```jsx
(async () => {
    const app = express();
    app.use(express.static(path.dirname(process.argv[2])))
    app.listen(9999);
    const filesToBake = [];
    for (let index = 2; index < process.argv.length - 1; index++) {
        const element = process.argv[index];
        filesToBake.push(path.basename(element));
    }
    await baker('http://localhost:9999/', filesToBake, process.argv[process.argv.length - 1]).catch((e) => {
        console.warn(e);
    })
    process.exit();
})();

```
- Animation Baker is a cli tool that makes use of terminal-based regular expressions to select files as inputs
- The files are passed as an array of arguments through `process.argv` to the animation baker and then returned as output files based on the details of the final argument
- The Baker then spins up a static hosting server, reads the files from the input and calls the `Baker` function along with the output file

---

#### `Baker`

```jsx

const baker = async (uriPath = "", animationFileNames, outFile) => {
    let animations = [];
    const reversibleAnimationNames = [
        `left strafe walking.fbx`,
        `left strafe.fbx`,
        `right strafe walking.fbx`,
        `right strafe.fbx`,
        `Sneaking Forward.fbx`,
        `Crouched Sneaking Left.fbx`,
        `Crouched Sneaking Right.fbx`,
        ];
    const fbxLoader = new FBXLoader();
    for (const name of animationFileNames) {
        const u = uriPath + name;
        let o;
        o = await new Promise((accept, reject) => {
            fbxLoader.load(u, accept, function progress() { }, reject);
        })
        o = o.animations[0];
        o.name = name;
        animations.push(o);
    }
    const _reverseAnimation = animation => {
        animation = animation.clone();
        const { tracks } = animation;
        for (const track of tracks) {
            track.times.reverse();
            for (let i = 0; i < track.times.length; i++) {
                track.times[i] = animation.duration - track.times[i];
            }

            const values2 = new track.values.constructor(track.values.length);
            const valueSize = track.getValueSize();
            const numValues = track.values.length / valueSize;
            for (let i = 0; i < numValues; i++) {
                const aIndex = i;
                const bIndex = numValues - 1 - i;
                for (let j = 0; j < valueSize; j++) {
                    values2[aIndex * valueSize + j] = track.values[bIndex * valueSize + j];
                }
            }
            track.values = values2;
        }
        return animation;
    };
    for (const name of reversibleAnimationNames) {
        const animation = animations.find(a => a.name === name);
        const reverseAnimation = _reverseAnimation(animation);
        reverseAnimation.name = animation.name.replace(/\.fbx$/, ' reverse.fbx');
        animations.push(reverseAnimation);
    }

    const animationsJson = animations.map(a => a.toJSON());
    const animationsCborBuffer = CBOR.encode({
        animations: animationsJson,
    });
    //console.log('decoding 1', animationsCborBuffer);
    CBOR.decode(animationsCborBuffer);
    console.log('exporting animations');
    fs.writeFileSync(outFile, Buffer.from(animationsCborBuffer));
    console.log('exported animations at', outFile);
}

```
- Baker uses `FBXLoader` of threejs to load all of the files and push their animations to an array.
- Baker has a function that have set of names present with it already for the reverse animations. Baker uses those names to sort the reverse animations from the given input animations and bake the reverse animations as the part of the process as well.
- Animation Baker uses the CBOR.encode function to encode the animations.
- The output buffer is then written to the output file.

---

