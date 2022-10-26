import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// Pages
import Menu from './pages/Menu';
import Game from './pages/Game';

function App() {
  return (
    <Router>

      <div className="App bg-[#1A2A33]">


        <Switch>
          {/* <Route path="/">
          <Redirect to="/home" />
        </Route> */}
          <Route exact path="/">
            <Menu />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
