import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/cerulean/bootstrap.min.css";
import './App.css';
import BoxForm from './components/BoxForm';
import Display from './components/BoxDisplay';

function App() {
  const [currentBox, setCurrentBox] = useState("");
  
    const gottaBox = ( newBox ) => {
        setCurrentBox( newBox );
    }

  return (
    

    <>
        <BoxForm onNewBox={ gottaBox } />
        <Display bgColor="red" />
        <Display bgColor="blue" />
        <Display bgColor={currentBox} />
      </>
  );
}

export default App;
