import React from 'react';
import { Link } from 'react-router-dom';

export default function ToTop() {
  return (
    <Link to='#' data-uk-totop data-uk-scroll className='to-top'>
      <i class="fa fa-chevron-square-up fa-2x uk-text-primary"></i>
    </Link>
  )
}