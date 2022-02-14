import React, { useState } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

const Calculator = () => {
  const [formula, setFormula] = useState('');
  const [output, setOutput] = useState('0');
  const [numberHasDecimal, setNumberHasDecimal] = useState(false);
  const [equalClicked, setEqualClicked] = useState(false);
  const [previousValue, setPreviousValue] = useState(0);

  const nonNumeric = /\D/;

  const handleNumericKey = (e) => {
    let keyPressed = e.target.attributes.value.value;
    // Handling numeric key press after calculation
    if (equalClicked) {
      forgetEqualClicked();
      return setFormula(keyPressed);
    }
    // Restricting the number of zeros to start a number with to 1
    if (keyPressed === '0' && formula === '0') {
      return null;
    }
    handleChange(keyPressed);
  };

  const handleDecimal = (e) => {
    let keyPressed = e.target.attributes.value.value;
    // Handling decimal key press after calculation
    if (equalClicked) {
      forgetEqualClicked();
      registerDecimal();
      return setFormula('0.');
    }
    // Handling decimal key as first entry
    if (keyPressed === '.' && formula.length < 1) {
      registerDecimal();
      return setFormula('0.');
    }
    // Handling consecutive decimal key presses
    if (keyPressed === '.' && formula[formula.length - 1] === '.') {
      return null;
    }
    // Restricting the number of '.' to 1 per number ***ONLY WORKING FOR THE FIRST NUMBER***
    if (keyPressed === '.' && numberHasDecimal) {
      return null;
    }
    handleChange(keyPressed);
    registerDecimal();
  };

  const registerDecimal = () => {
    setNumberHasDecimal(true);
  };

  const deleteDecimalRegister = () => {
    setNumberHasDecimal(false);
  };

  const handleOperator = (e) => {
    let keyPressed = e.target.attributes.value.value;
    // handling operators on first press after calculation
    if (equalClicked) {
      forgetEqualClicked();
      deleteDecimalRegister();
      return setFormula(previousValue.toString().concat(keyPressed));
    }
    // Handling minus operators 'sandwiched' by other operators
    if (keyPressed.match(nonNumeric) && formula.match(/\D{2}$/)) {
      return setFormula(formula.slice(0, -2).concat(keyPressed));
    }
    // Avoiding the repetition of consecutive single operators
    if (
      keyPressed.match(nonNumeric) &&
      formula[formula.length - 1] === keyPressed
    ) {
      return null;
    }
    // Handling consecutive operators
    if (
      keyPressed.match(nonNumeric) &&
      formula[formula.length - 1].match(nonNumeric) &&
      formula[formula.length - 1] !== keyPressed &&
      keyPressed !== '-'
    ) {
      return setFormula(formula.slice(0, -1).concat(keyPressed));
    }
    handleChange(keyPressed);
    deleteDecimalRegister();
  };

  const handleChange = (keyPressed) => {
    setFormula(formula.concat(keyPressed));
  };

  const forgetEqualClicked = () => {
    setEqualClicked(false);
  };

  const handleEqual = () => {
    if (!formula.match(/[^0-9]$/)) {
      deleteDecimalRegister();
      let answer = Math.round(1000000000000 * eval(formula)) / 1000000000000;
      console.log(answer);
      setEqualClicked(true);
      setOutput(answer.toString());
      setPreviousValue(answer.toString());
    } else {
      return null;
    }
  };

  const handleClear = () => {
    deleteDecimalRegister();
    setFormula('');
    setOutput('0');
  };

  const handleClearCurrent = () => {
    setFormula(previousValue.toString());
    forgetEqualClicked();
    setEqualClicked(true);
  };

  return (
    <main id='calculator'>
      <Display formula={formula} output={output} equalClicked={equalClicked} />
      <Keyboard
        handleNumericKey={handleNumericKey}
        handleDecimal={handleDecimal}
        handleOperator={handleOperator}
        handleEqual={handleEqual}
        handleClear={handleClear}
        handleClearCurrent={handleClearCurrent}
      />
    </main>
  );
};

export default Calculator;
