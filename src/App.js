import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //routing methods
import Navbar from './components/Navbar'; //navbar
import Home from './components/pages/Home.js';
import Music from './components/pages/Music.js';
import Products from './components/pages/Products';
import SingUp from './components/pages/SingUp';
import Footer from './components/Footer';
import Login from './components/pages/Login.js';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/Music' exact component={Music}/>
        <Route path = '/products' exact component={Products}/>
        <Route path = '/sign-up' exact component={SingUp}/>
        <Route path = '/login' exact component={Login}/>
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
