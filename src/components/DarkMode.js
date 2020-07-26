import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function DarkMode() {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='dark-mode__toggle' onClick={toggleMode} data-uk-toggle="target: #sunIcon">
      <div className={darkMode ? 'toggle toggled' : 'toggle'}>
        <i id='sunIcon' class='fas fa-sun'></i>
        <i class='fas fa-moon'></i>
      </div>
    </div>
  );
};