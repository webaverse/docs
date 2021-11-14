
# [REACT] Drag & Drop Component

`Drag & Drop` module exposes the API that can make any element of the user iterface a draggable or a drop zone. 

```js
import {Drag, Drop, dropEffect} = require('./components/drag.js');
```

## Usage

### `Drag`

```jsx
<Drag dataItem={any} dropEffect={keyof dropEffect} dragImage={String}>
	<!-- UI Elements Come Here-->
</Drag>
```
#### Inputs
* dataItem: {integer|string|object|array|boolean} **[Required]**
* dragImage: {URL | URI }
* dropEffect: [dropEffectEnum](https://www.w3.org/TR/2010/WD-html5-20101019/dnd.html#dom-datatransfer-dropeffect)

### `Drop`

```jsx
<Drop onItemDropped={function} dropEffect={keyof dropEffect}>
	<!-- UI Elements Come Here-->
</Drop>
```
#### Inputs
* onItemDropped: {function} **[Required]**
* dropEffect: [dropEffectEnum](https://www.w3.org/TR/2010/WD-html5-20101019/dnd.html#dom-datatransfer-dropeffect)

#### Output
`onItemDropped call back will be called with following paramters passed`
* event: {[dragOver](https://www.w3.org/TR/2010/WD-html5-20101019/dnd.html#dndevents)}
* dataItem: {Payload passed by the Drag Event}


## Architecture

### Flow Diagram

![enter image description here](https://i.ibb.co/0n6500K/Drag-Drop-drawio.png)

### Location

```
Webaverse App
└───src
   └───components
         └─── drag.js
```

### `Exports`


#### `Drag`

```jsx
const Draggable = props => {
  const [isDragging, setIsDragging] = React.useState(false);
  const image = React.useRef(null);

  React.useEffect(() => {
    image.current = null;
    if (props.dragImage) {
      image.current = new Image();
      image.current.src = props.dragImage;
    }
  }, [props.dragImage]);

  const startDrag = ev => {
    setIsDragging(true);
    ev.dataTransfer.setData('drag-item', props.dataItem);
    ev.dataTransfer.effectAllowed = props.dropEffect;
    if (image.current) {
      ev.dataTransfer.setDragImage(image.current, 0, 0);
    }
  };

  const dragEnd = () => setIsDragging(false);

  return (
    <div style={isDragging ? draggingStyle : {}} draggable onDragStart={startDrag} onDragEnd={dragEnd}>
      {props.children}
    </div>
  );
};

```
- Drag is a React Component and it uses the `isDragging` state to make use of the HTML5 Drag & Drag Over event. 
- it also uses the [React.useEffect](https://reactjs.org/docs/hooks-effect.html) hook to show the image while dragging if it's set.
- It uses `draggable` handle in react to make any element draggable. 
- It uses `onDragStart` & `onDragEnd` functions to alter the data in the Drag Event.

#### `Drop`

```jsx
const DropTarget = props => {
  const [isOver, setIsOver] = React.useState(false);

  const dragOver = ev => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = props.dropEffect;
  };

  const drop = ev => {
    const droppedItem = ev.dataTransfer.getData('drag-item');
    if (droppedItem) {
      props.onItemDropped(ev, droppedItem);
    }
    setIsOver(false);
  };

  const dragEnter = ev => {
    ev.dataTransfer.dropEffect = props.dropEffect;
    setIsOver(true);
  };

  const dragLeave = () => setIsOver(false);

  return (
    <div
      onDragOver={dragOver}
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
    >
      {props.children}
    </div>
  );
};

```
- Drop is a React Component and it uses the `isOver` state to manage the drop event on the target.
- It uses the `onDragOver`, `onDragEnter`, `onDragLeave` & `onDrop` to manage the state of the drop event on it. 
- Drop works by preventing the default events of `OnDragEnter` & `onDragOver`.
- It uses `onDrop` event and call the `onItemDropped` passed in as a prop item wheneven the `onDrop` event is fired.
- It passes the instance of `event & dataItems` to the function from where we can use `event.preventDefault` to cancel the buble effect of the event.

#### dropEffect
[More Information](https://www.w3.org/TR/2010/WD-html5-20101019/dnd.html#dom-datatransfer-dropeffect)
