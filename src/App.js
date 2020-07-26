import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
         <PrivateRoute path='/user' /> 
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route component={Login}/> */}
        <Route exact path='/'/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
