import React from "react";
import './App.css';
import DetailScreen from './component/DetailScreen/DetailScreen';
import ListScreen from './component/ListScreen/ListScreen';

function App() {
  return (
    <div className="app">
      <div className="app__test"> 
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
