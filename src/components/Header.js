import React from 'react';
import {Link} from 'react-router-dom';
import DarkMode from './DarkMode.js';
export default function Header() {

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
                  <Link to='/'>
                    <div className='uk-text-center'>
                      <i className='fad fa-chart-line fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Trending</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='uk-text-center'>
                      <i class='fad fa-eye fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Show</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='uk-text-center'>
                      <i class='fad fa-question-circle fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Ask</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='uk-text-center'>
                      <i class='fad fa-poll fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Polls</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='uk-text-center'>
                      <i class='fad fa-briefcase fa-lg'></i>
                      <div className='uk-navbar-subtitle'>Jobs</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='uk-navbar-right'>
            <ul className='uk-navbar-nav'>
              <li>
                <Link>
                  <DarkMode/>
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  <div className='uk-icon-button uk-button-primary'>
                    <i className='fas fa-user fa-lg'></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}