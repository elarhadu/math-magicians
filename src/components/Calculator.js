import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const OPERATORS = [{ id: 1, text: 'AC' }, { id: 2, text: '+/-' }, { id: 3, text: '%' }, { id: 4, text: '÷' }];
const NUM = [{ id: 5, text: '7' }, { id: 6, text: '8' }, { id: 7, text: '9' }, { id: 8, text: 'x' }];
const MORENUM = [{ id: 9, text: '4' }, { id: 10, text: '5' }, { id: 11, text: '6' }, { id: 12, text: '-' }];
const MORENUMS = [{ id: 13, text: '1' }, { id: 14, text: '2' }, { id: 15, text: '3' }, { id: 16, text: '+' }];
const LASTNUMS = [{ id: 17, text: '0' }, { id: 18, text: '.' }, { id: 19, text: '=' }];

export default function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const buttonClick = (event) => {
    const result = calculate(state, event.target.textContent);
    setState(result);
  };

  const { total, next } = state;
  return (
    <div className="container">
      <div className="calculator">
        <div className="r-container">
          <p className="result">{next || total || 0}</p>
        </div>
        <div className="digits">
          {OPERATORS.map(({ text, id }) => <button type="button" key={id} className={`btn-${id} btn`} onClick={buttonClick}>{text}</button>)}
        </div>
        <div className="digits">
          {NUM.map(({ text, id }) => <button type="button" key={id} className={`btn-${id} btn`} onClick={buttonClick}>{text}</button>)}
        </div>
        <div className="digits">
          {MORENUM.map(({ text, id }) => <button type="button" key={id} className={`btn-${id} btn`} onClick={buttonClick}>{text}</button>)}
        </div>
        <div className="digits">
          {MORENUMS.map(({ text, id }) => <button type="button" key={id} className={`btn-${id} btn`} onClick={buttonClick}>{text}</button>)}
        </div>
        <div className="digits">
          {LASTNUMS.map(({ text, id }) => <button type="button" key={id} className={`btn-${id} btn`} onClick={buttonClick}>{text}</button>)}
        </div>
      </div>
    </div>
  );
}
