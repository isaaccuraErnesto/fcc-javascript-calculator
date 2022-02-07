import React from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

const Calculator = () => {
  return (
    <main id='calculator'>
      <Display />
      <Keyboard />
    </main>
  );
};

export default Calculator;
