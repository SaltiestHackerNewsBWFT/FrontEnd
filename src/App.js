import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js';

//Components
import Header from './components/Header.js';
import ToTop from './components/ToTop.js';
import Footer from './components/Footer.js';
//Pages
import PageHome from './components/PageHome.js';
import PageLogin from './components/PageLogin.js';
import PageSignup from './components/PageSignup.js';
import PageTrending from './components/PageTrending.js';
import PageNew from './components/PageNew.js';
import PageShow from './components/PageShow.js';
import PageAsk from './components/PageAsk.js';
import PageComment from './components/PageComment.js';
//import PagePolls from './components/PagePolls.js';
import PageJobs from './components/PageJobs.js';
import PageSaltiest from './components/PageSaltiest.js';
import UserProfile from './components/user/Profile.js';
// import UpdateProfile from './components/user/UpdateProfile.js';
import UserFavorites from './components/user/Favorites.js';
import UserBookmarks from './components/user/Bookmarks.js';

import PageMVPCompliance from './components/PageMVPCompliance.js';

//Styles
import './App.css';
import './App-sticky-footer.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute path='/user/profile' component={UserProfile} />
        <PrivateRoute path='/user/favorites' component={UserFavorites} />
        <PrivateRoute path='/user/bookmarks' component={UserBookmarks}/>
        
        <Route exact path='/' component={PageHome} /> 
        <Route exact path='/login' component={PageLogin}/>
        <Route exact path='/signup' component={PageSignup}/>
        <Route exact path='/trending' component={PageTrending} /> 
        <Route exact path='/new' component={PageNew} />
        <Route exact path='/show' component={PageShow} /> 
        <Route exact path='/ask' component={PageAsk} />
        <Route path='/comments/:id' component={PageComment} />
        <Route exact path='/jobs' component={PageJobs} />
        <Route exact path='/saltiest' component={PageSaltiest} />

        <Route exact path='/mvp' component={PageMVPCompliance} />
      </Switch>
        
      <ToTop />
      <Footer />
    </Router>
  );
}

export default App;
