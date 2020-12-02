import React from "react";
import './App.css';
import DetailScreen from './screens/DetailScreen/DetailScreen';
import ListPeopleScreen from './screens/ListPeopleScreen/ListPeopleScreen';
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
          <Link to="/"><Button variant="outlined" color="primary" ><PublicIcon/>PLANET </Button></Link>
          <Link to="/"><Button variant="outlined" color="primary" ><EventSeatIcon/>VEHICLE </Button></Link>
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
          <Route exact path="/detail" component={DetailScreen} />
          <Route exact path="/" component={ListPeopleScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
