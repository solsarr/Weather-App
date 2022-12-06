import logo from './logo.svg';
import './App.css';
import Data from './components/data';
import { useEffect, useState } from "react";
import Base from './components/base';
import DateTime from './components/time';

function App() {
  
  return (
    <div className="App">
      
    





            <div className="wrapper">
        <div className="base" style={{border: '1px solid black'}}>

    <DateTime />
    <Data />
    {/* <Base /> */}
    </div>
     </div>
         <button className="button">3 Days</button>
        <button className="button">1 Week</button>
        <button className="button">2 Weeks</button> 
        
     
    </div>
  );
}

export default App;
