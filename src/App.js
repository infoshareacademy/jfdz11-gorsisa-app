import React, {Fragment } from 'react';

import logo from './logo.svg';
import './App.css';
import runs from './bieg.json'

import { Route, BrowserRouter as Router, Switch, Redirect, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      
        <NestedRouting />
        </div>
  )}

const Example = () => <h1> ELO</h1>
const Home = () => <h1> HOME </h1>
const LandingPage = () => <h1> Landing Page </h1>

function NestedRouting () {
  return (<div>

<Router>
<Navbar/>
      <Switch>
      <Route path="/home" component={Home} />
        <Route exact path="/example" component={() => <h1>Create Run</h1>} />
        <Route  exact path="/landing-page" component={() => <h1>Run list</h1>} />
        <Redirect exact from="/" to="/landing-page" />
      </Switch>
      </Router>
    </div>
  
  );
}

export default App;