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

      {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}

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

    </Router>
  );
}

export default App;
