import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkMode from './DarkMode.js';

function MaybeLink({to, test, children}) {
  const result = test;
  if (result) {
    return <Link to={to}>{children}</Link>
  }
  return <span>{children}</span>
}

export default function Header() {
  const location = useLocation();
  
  const logOut = () => {
    localStorage.removeItem('token');
  }

  return (
    <header>
      <div uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar'>
        <nav className='uk-navbar-container' data-uk-navbar style={{position: 'relative', zIndex: '980'}} >
          <div className='uk-navbar-left'>
            <Link to='/' className='uk-navbar-item uk-logo uk-text-primary'>
              <div className='logo'>H</div>
              Hacker News
            </Link>
          </div>
          <div className='uk-navbar-center'>
            <div className='uk-navbar-nav'>
              <ul className='uk-navbar-nav'>
                <li>
                  <Link to='/trending'>
                    <div className='uk-text-center'>
                      <i className='fad fa-chart-line fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Trending</div>
                    </div>
                  </Link>
                </li>
                {/* <li>
                  <Link to='/new'>
                    <div className='uk-text-center'>
                      <i className='fad fa-sparkles fa-lg'></i>
                      <div className='uk-navbar-subtitle'>New</div>
                    </div>
                  </Link>
                </li> */}
                <li>
                  <Link to='/ask'>
                    <div className='uk-text-center'>
                      <i className='fad fa-question-circle fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Ask</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/show'>
                    <div className='uk-text-center'>
                      <i className='fad fa-eye fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Show</div>
                    </div>
                  </Link>
                </li>
                {/* <li>
                  <Link to='/polls'>
                    <div className='uk-text-center'>
                      <i className='fad fa-poll fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Polls</div>
                    </div>
                  </Link>
                </li> */}
                <li>
                  <Link to='/jobs'>
                    <div className='uk-text-center'>
                      <i className='fad fa-briefcase fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Jobs</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/saltiest'>
                    <div className='uk-text-center'>
                      <i className='fad fa-ball-pile fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Saltiest</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='uk-navbar-right'>
            <ul className='uk-navbar-nav'>
              <li>
                <Link to=''>
                  <DarkMode/>
                </Link>
              </li>
              <li>
                <MaybeLink to={'/login'} test={!localStorage.getItem('token')}>
                  <div className='uk-icon-button uk-button-primary'>
                    <i className='fas fa-user fa-lg'></i>
                  </div>
                </MaybeLink>
                {localStorage.getItem('token') &&
                  <div  data-uk-dropdown='pos: top-right'>
                    <ul className='uk-nav uk-dropdown-nav uk-margin-right'>
                      <li><Link to='/user/profile'>Profile</Link></li>
                      <li><Link to='/user/favorites'>Favorites</Link></li>
                      <li><Link to='/user/bookmarks'>Bookmarks</Link></li>
                      <li className='uk-nav-divider'></li>
                      <li><a href={location.pathname} className='uk-link-reset' onClick={logOut}>Log Out</a></li>
                    </ul>
                  </div>
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
