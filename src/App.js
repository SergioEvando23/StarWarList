import React from "react";
import './App.css';
import DetailScreen from './DetailScreen/DetailScreen';
import ListScreen from './ListScreen/ListScreen';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import PublicIcon from '@material-ui/icons/Public';

function App() {
  return (
    <div className="app">
      <div className="app__header"> 
        <div className="app__app-header__buttons"> 
        <Button variant="outlined" color="primary" > <HomeIcon/>HOME </Button>
        <Button variant="outlined" color="primary" > <PublicIcon/>PLANET </Button>
        <Button variant="outlined" color="primary" > <EventSeatIcon/>VEHICLE </Button>
        </div> 
        <div className="app__app-header__app-header-simbol">
          StarWars
        </div>
      </div> 
      <div className="app__pages">
        <ListScreen />
        <DetailScreen /> 
      </div>
    </div>
  );
}

export default App;
