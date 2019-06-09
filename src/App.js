import React, {Fragment } from 'react';

import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Switch, Redirect, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        </header>
        <NestedRouting />
        </div>
  )}

const Example = () => <h1> ELO</h1>
const Home = () => <h1> HOME </h1>
const LandingPage = () => <h1> Landing Page </h1>

function NestedRouting () {
  return (<div>

<Router>
      <Switch>
      <Route path="/home" component={Home} />
        <Route path="/example" component={Example} />
        <Route  exact path="/landing-page" component={LandingPage} />
        <Redirect exact from="/" to="/landing-page" />
      </Switch>
      </Router>
    </div>
  
  );
}

export default App;