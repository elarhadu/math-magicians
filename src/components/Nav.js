import React from 'react';
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
      </nav>
    </div>
  );
}
