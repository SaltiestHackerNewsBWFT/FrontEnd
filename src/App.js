import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js';

//Components
import Header from './components/Header.js';
import ToTop from './components/ToTop.js';
import Footer from './components/Footer.js';
//Pages
import PageHome from './components/PageHome.js';
import PageLogin from './components/PageLogin.js'
import PageTrending from './components/PageTrending.js';
import PageShow from './components/PageShow.js';
import PageAsk from './components/PageAsk.js';
import PagePolls from './components/PagePolls.js';
import PageJobs from './components/PageJobs.js';

//Styles
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <PrivateRoute path='/user' /> 
        {/* <Route path='/login' component={Login} /> */}
        
        <Route exact path='/' component={PageHome} /> 
        <Route exact path='/login' component={PageLogin}/>
        <Route exact path='/trending' component={PageTrending} /> 
        <Route exact path='/show' component={PageShow} /> 
        <Route exact path='/ask' component={PageAsk} />
        <Route exact path='/polls' component={PagePolls} />
        <Route exact path='/jobs' component={PageJobs} />
      </Switch>
        
      <ToTop />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
