//import CardCaller from './CardCaller.js';
import './App.css';
import React, { useState, useEffect } from 'react';
import CardCaller from './CardCaller';

function RenderResult() {
  const [data, setData] = useState("Loading...");
    
    useEffect(() => {
      CardCaller().then(
          result => setData(result));
      },[]);
  
    return (
      <div><table>{data}</table></div>
    );
};

function App() {    
    return (
      <div className="App">
        <RenderResult />
      </div>
    );  
  };

export default App;
