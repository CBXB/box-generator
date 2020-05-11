import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/cerulean/bootstrap.min.css";
import './App.css';
import BoxForm from './components/BoxForm';
import Display from './components/BoxDisplay';

function App() {
  const [currentBox, setCurrentBox] = useState([]);
  
    const gottaBox = ( newBox ) => {
        setCurrentBox( [...currentBox, newBox] );
    }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Boxes</h1>
      </div>
      <div className="row">
        <div className="col-4">
            <BoxForm addNewBox={ gottaBox } />

        </div>
        <>
            <Display bgColor="red" />
            <Display bgColor="blue" />
            {currentBox.map((box,i) => 
              <Display key={i} bgColor={box.color}/>

            )}
          </>

      </div>

    </div>

  );
}

export default App;
