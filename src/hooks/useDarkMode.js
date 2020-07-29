import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const dmmql = window.matchMedia('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', dmmql.matches);
 
  useEffect(() => {
    darkMode
      ? document.body.classList.add('dark-mode')
      //&& document.body.classList.add('uk-light')
      : document.body.classList.remove('dark-mode')
       // && document.body.classList.remove('uk-light')
  }, [darkMode])
  
  //console.log(darkMode)

  return [darkMode,setDarkMode];
};

