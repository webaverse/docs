---
id: graves-notes-unsorted
title: Grave's Notes - Unsorted
---

# Web Audio Reverb Generation

## Supporting Material

Article explaining convolution reverbs
- https://blog.gskinner.com/archives/2019/02/reverb-web-audio-api.html
- https://github.com/mwmwmw/SimpleSound - supporting code
- https://codepen.io/mwmwmw/pen/JxMdrM - Advanced example
- https://codepen.io/mwmwmw/pen/bzadEy - Simple example


## Reverb Tail Generation

![](https://i.imgur.com/CppIFEp.png)

Use an easing function to create the falloff

```
function easeInQuart(x: number): number {
return x * x * x * x;
}
```

This should probably use the inverse square law, but is fine enough for getting setup.


### Generating the tail

lbuffer and rbuffer are parts of a buffer that will be set on the convolution nodes buffer. 

audioLength is the lenght of the reverb in seconds

so the buffer size is the number of seconds * the sampling rate.

buffer size = 3 seconds * 48000hz = 144000 samples

```
const bufferSize = audioLength * audioContext.sampleRate
for(let i = 0; i < buffersize; i++) {
    const ratio = (bufferSize - i) / bufferSize; // will be 1 at the start of the loop and 0 at the end
    const fadeAmount = easeInQuart(ratio);
    lBuffer[i] = (1-(2*Math.random())) * fadeAmount;
    rBuffer[i] = (1-(2*Math.random())) * fadeAmount;
  }

```

The basic idea of this is to get the ratio of progress through the loop, and then use that value to apply the easing function to the generated noise so that the volume of the noise follows the easing curve (see the first diagram)


## Implementation 

```
const {offset, duration} = audioSpec;
  const audioContext = Avatar.getAudioContext();
  const bufferSize = audioLength * audioContext.sampleRate;
  let lBuffer = new Float32Array(bufferSize);
  let rBuffer = new Float32Array(bufferSize);
  for(let i = 0; i < bufferSize; i++) {
    const ratio = (bufferSize - i) / bufferSize; // will be 1 at the start of the loop and 0 at the end
    const fadeAmount = easeInQuart(ratio);
    lBuffer[i] = (1-(2*Math.random())) * fadeAmount;
    rBuffer[i] = (1-(2*Math.random())) * fadeAmount;
  }
  let buffer = audioContext.createBuffer(2, bufferSize, audioContext.sampleRate);
  buffer.copyToChannel(lBuffer,0);
  buffer.copyToChannel(rBuffer,1);

  let convolver = audioContext.createConvolver();
  convolver.buffer = buffer;
  const audioBufferSourceNode = audioContext.createBufferSource();
  audioBufferSourceNode.buffer = soundFileAudioBuffer;
  audioBufferSourceNode.connect(convolver);
  convolver.connect(audioContext.destination);
  audioBufferSourceNode.start(0, offset, duration);
  return audioBufferSourceNode;
  
  ```

  # Systems/Algorithms

## L-system Theory

L-systems are used to effiently store and generate fractals like plants and crystal structures. This will be an effective way to generate plants for the game world. 

-  [The book on L-systems](http://algorithmicbotany.org/papers/abop/abop.pdf)
-  Extremely succinct and informative video by Danial Shiffman https://www.youtube.com/watch?v=f6ra024-ASY
- Example code of a simple L system (D.Shiffman)  
https://github.com/nature-of-code/noc-examples-processing/blob/master/chp08_fractals/NOC_8_08_SimpleLSystem/NOC_8_08_SimpleLSystem.pde
- More complex version (D.Shiffman)
https://github.com/nature-of-code/noc-examples-processing/tree/master/chp08_fractals/NOC_8_09_LSystem

