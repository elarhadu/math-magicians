import React from 'react';
import Calculator from '../components/Calculator';
import './CalculatorApp.css';

export default function CalculatorApp() {
  return (
    <div className="calc">
      <h2>Let&apos;s do some math!</h2>
      <Calculator />
    </div>
  );
}
