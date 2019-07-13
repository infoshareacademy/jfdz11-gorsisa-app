import React from 'react';
import Dashboard from './components/dashboard/Dashboard' ;
import ProjectDetails from'./components/projects/ProjectDetails'


import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


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
        <Route  exact path="/project/:id" component={() => <h1><ProjectDetails /></h1>} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect exact from="/" to="/landing-page" />
      </Switch>
      </Router>
    </div>
  
  );
}

export default App;