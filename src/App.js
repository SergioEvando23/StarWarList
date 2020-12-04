import React from "react";
import './App.css';
import DetailPeopleScreen from './screens/DetailPeopleScreen/DetailPeopleScreen';
import DetailPlanetScreen from './screens/DetailPlanetScreen/DetailPlanetScreen';
import DetailVehicleScreen from './screens/DetailVehicleScreen/DetailVehicleScreen';
import ListPeopleScreen from './screens/ListPeopleScreen/ListPeopleScreen';
import ListPlanetScreen from './screens/ListPlanetScreen/ListPlanetScreen';
import ListVehicleScreen from './screens/ListVehicleScreen/ListVehicleScreen';
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
          <Link to="/"><Button variant="outlined" color="primary" ><HomeIcon/>HOME </Button></Link>
          <Link to="/planet"><Button variant="outlined" color="primary" ><PublicIcon/>PLANET </Button></Link>
          <Link to="/vehicle"><Button variant="outlined" color="primary" ><EventSeatIcon/>VEHICLE </Button></Link>
          </div> 
          <div className="app__app-header__app-header-simbol">
          <Link to="/">StarWars</Link>
          </div>
        </div> 
        <div className="app__pages">
          {/* <ListPeopleScreen />
          <DetailScreen />  */}
        </div>
        <Switch> 
          <Route exact path="/" component={ListPeopleScreen} />
          <Route exact path="/planet" component={ListPlanetScreen} />
          <Route exact path="/vehicle" component={ListVehicleScreen} />
          <Route exact path="/peopledetail/" component={DetailPeopleScreen} />
          <Route exact path="/planetdetail/" component={DetailPlanetScreen} />
          <Route exact path="/vehicledetail/" component={DetailVehicleScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
