import './Calculator.css';
import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        setResult(b !== 0 ? a / b : 'Cannot divide by zero');
        break;
      default:
        setResult('Invalid');
    }
  };

 return (
  <div className="calculator-container">
    <h2>React Calculator</h2>
    <input type="number" placeholder="First" value={num1} onChange={(e) => setNum1(e.target.value)} />
    <input type="number" placeholder="Second" value={num2} onChange={(e) => setNum2(e.target.value)} />
    <br />
    <button onClick={() => calculate('+')}>+</button>
    <button onClick={() => calculate('-')}>-</button>
    <button onClick={() => calculate('*')}>*</button>
    <button onClick={() => calculate('/')}>/</button>
    <div className="result">Result: {result}</div>
  </div>
);

}

export default Calculator;
