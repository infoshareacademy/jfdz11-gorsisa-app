import React, {Fragment } from 'react';
import Dashboard from './components/Dashboard/Dashboard' ;

import './App.css';


import { Route, BrowserRouter as Router, Switch, Redirect, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      
        <Routing />
        </div>
  )}


const Home = () => <h1> HOME </h1>


function Routing () {
  return (<div>

<Router>
<Navbar/>
      <Switch>
      <Route path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route  exact path="/landing-page" component={() => <h1>Run list</h1>} />
        <Redirect exact from="/" to="/landing-page" />
      </Switch>
      </Router>
    </div>
  
  );
}

export default App;