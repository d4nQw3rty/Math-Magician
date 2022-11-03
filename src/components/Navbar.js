import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
    separator: '|',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
    separator: '|',
  },
  {
    id: 3,
    path: '/Quote',
    text: 'Quote',
  },
];

const Navbar = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul className="list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeclassname="active-link" className="link">
                { link.text }
              </NavLink>
              <span>
                {link.separator}
              </span>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  </>
);

export default Navbar;
