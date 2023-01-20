import React from 'react';
// import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="header">
      <h1 className="title">Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/calculator" className="nav-link">Calculator</a>
          </li>
          <li>
            <a href="/quote" className="nav-link">Quote</a>
          </li>
        </ul>
        {/* <Link to="/" className="nav-link">
      Home |
    </Link>
    <Link to="/calculator" className="nav-link">
      Calculator |
    </Link>
    <Link to="/quote" className="nav-link">
      Quote
    </Link> */}
      </nav>

    </div>
  );
}
