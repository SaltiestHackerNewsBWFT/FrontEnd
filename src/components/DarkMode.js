import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function DarkMode() {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='dark-mode__toggle' onClick={toggleMode}>
      <div className={darkMode ? 'toggle toggled' : 'toggle'}>
        <i id='sunIcon' className='fas fa-sun'></i>
        <i id='moonIcon' className='fas fa-moon'></i>
      </div>
    </div>
  );
};