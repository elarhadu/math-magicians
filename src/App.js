/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import Calculator from './components/Calculator.js';

export default class App extends Component {
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}
