import React, { useState } from 'react';
import './Calculator.css'; // Create this CSS file for styling

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (button) => {
    if (button === '=') {
      calculate();
    } else if (button === 'C') {
      clear();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result) || '');
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
