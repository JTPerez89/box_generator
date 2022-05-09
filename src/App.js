import React, { useState } from 'react';
import './App.css';
import Creator from './components/creator'
import Form from './components/form'

function App() {
  const [newBox, setNewBox] = useState([]);

  const handleNewBox = (box) => {
    if(box.color == ''){
      return;
    }
    if(!box.height){
      box.height = 100;
    }
    if(!box.width){
      box.width = 100;
    }
    setNewBox([...newBox, box])
  }
  return (
    <div>
      <Form handleNewBox={handleNewBox} />
      <Creator newBox={newBox} />
    </div>
  );
}

export default App;
