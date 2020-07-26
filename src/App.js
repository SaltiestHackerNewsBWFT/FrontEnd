import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js';

//Components
import Header from './components/Header.js';
import ToTop from './components/ToTop.js';
import Footer from './components/Footer.js';

//Styles
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <PrivateRoute path='/user' /> 
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route component={Login}/> */}
        <Route exact path='/' />  
      </Switch>
        
      <ToTop />
      <Footer />
    </Router>
  );
}

export default App;
