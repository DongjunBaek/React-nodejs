import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import Footer from './components/views/Footer/Footer';
import LoginPage from './components/views/LoginPage/LoginPage';
import NavBar from './components/views/NavBar/NavBar';
import RegisterPage from './components/views/RegisterPage/RegisterPage';


function App() {
  return (
    <Router>
      <div>

    <Switch>
      <Route exact path="/"> 
        
        <LandingPage />
      </Route>
      <Route exact path="/about"> 
        
      </Route>
      <Route exact path="/dash"> 
        
      </Route>

    </Switch>
      </div>


      </Router>




  )}

export default App;
