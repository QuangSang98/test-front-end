import './App.css';
import React, { useRef } from 'react';
const App = () => {
  const dropColor = useRef(null)
  const randomColor = () => Math.floor(Math.random() * 255);

  const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("preColor");
    e.target.style.backgroundColor = data;
  }
  const allowDrop = (e) => {
    dropColor.current = e.target.style.backgroundColor
    e.preventDefault();
  }
  const drag = (e) => {
    e.dataTransfer.setData("preColor", e.target.style.backgroundColor);
  }
  const dragEnd = (e) => {
    e.target.style.backgroundColor = dropColor.current;
  }
  const renderBoard = () => {
    const keys = Array.from(Array(64).keys());
    return keys.map(key => {
      return <div 
        className='item' 
        key={key} 
        id={key}
        onDrop={drop} onDragOver={allowDrop}
      >
        <div 
          style={{ width: '100%', height: '100%', backgroundColor: `rgba(${randomColor()},${randomColor()},${randomColor()})`}}
          draggable={true}
          onDragStart={drag}
          onDragEnd={dragEnd}
        >

        </div>
      </div>
    })
  }
  return (
    <div className="App">
      <div className='items'>{renderBoard()}</div>
    </div>
  );
}

export default App;
