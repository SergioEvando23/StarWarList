import React from "react";
import './App.css';
import DetailScreen from './DetailScreen/DetailScreen';
import ListScreen from './ListScreen/ListScreen';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import PublicIcon from '@material-ui/icons/Public';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__header"> 
          <div className="app__app-header__buttons"> 
          <Link to="/"><Button variant="outlined" color="primary" > <HomeIcon/>HOME </Button></Link>
          <Link to="/planets"><Button variant="outlined" color="primary" > <PublicIcon/>PLANET </Button></Link>
          <Link to="/vehicles"><Button variant="outlined" color="primary" > <EventSeatIcon/>VEHICLE </Button></Link>
          </div> 
          <div className="app__app-header__app-header-simbol">
            StarWars
          </div>
        </div> 
        <div className="app__pages">
          <ListScreen />
          <DetailScreen /> 
        </div>
        <Switch>
          <Route exect path="/vehicles" component={ListScreen} />
          <Route exect path="/planets" component={ListScreen} />
          <Route exact path="/" component={ListScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
