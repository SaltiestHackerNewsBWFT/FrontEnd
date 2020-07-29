import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_LINKS = [
  {
    text: 'Guidelines',
    whither: '/guidelines',
  },
  {
    text: 'FAQ',
    whither: '/faq',
  },
  {
    text: 'Support',
    whither: 'mailto:support@example.com',
  },
  {
    text: 'API',
    whither: '/api',
  },
  {
    text: 'Security',
    whither: '/security',
  },
  {
    text: 'Lists',
    whither: '/lists',
  },
  {
    text: 'Bookmarklet',
    whither: '/bookmarklet',
  },
  {
    text: 'Legal',
    whither: '/legal',
  },
  {
    text: 'Apply to YC',
    whither: '/apply',
  },
  {
    text: 'Contact',
    whither: 'mailto:contact@example.com',
  },
];

// intersperse(['a', 'b', 'c'], ':') → ['a', ':', 'b', ':', 'c']
function intersperse(things, sep) {
  const ret = [];
  for (let i=0; i<things.length; ++i) {
    ret.push(things[i]);
    if (i < things.length - 1) ret.push(sep);
  }
  return ret;
}

// Returns a link in the proper type (a or Link).
function linkize({text, whither}) {
  if (whither.startsWith("mailto:")) {
    return <a key={whither+text} href={whither}>{text}</a>
  }
  return <Link key={whither+text} to={whither}>{text}</Link>
}

export default function Footer() {
  return (
    <footer className='footer-sitewide uk-navbar-container'>
      {/* this is comically baroque but I need to use array methods to dynamically render HTML elements to get ‘MVP’ */}
      {intersperse(FOOTER_LINKS.map(l => linkize(l)), ' | ')}
    </footer>
  )
}
