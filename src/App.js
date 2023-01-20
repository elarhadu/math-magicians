import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import CalculatorApp from './Pages/CalculatorApp';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Quote from './Pages/Quote';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<CalculatorApp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }
}
