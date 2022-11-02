import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/Home',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/Quote',
    text: 'Quote',
  },
];

const Navbar = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul className="list">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" className="link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
