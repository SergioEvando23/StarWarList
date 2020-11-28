import React from "react";
import './App.css';
import DetailScreen from './DetailScreen/DetailScreen';
import ListScreen from './ListScreen/ListScreen';

function App() {
  return (
    <div className="app">
      <div className="app__header"> 
       App
      </div> 
      <div className="app__pages">
        <ListScreen />
        <DetailScreen /> 
      </div>
    </div>
  );
}

export default App;
