import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="header">
      <h1 className="title">Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/calculator" className="nav-link">Calculator</Link>
          </li>
          <li>
            <Link to="/quote" className="nav-link">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
