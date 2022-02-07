import React from 'react';
import Key from './Key';

const Keyboard = () => {
  return (
    <div id='keyboard'>
      <Key text='AC' group='clear' id='clear' />
      <Key text='C' group='clear' id='clear-current' />
      <Key text='÷' group='operator' id='divide' />
      <Key text='1' group='numeric' id='one' />
      <Key text='2' group='numeric' id='two' />
      <Key text='3' group='numeric' id='three' />
      <Key text='×' group='operator' id='multiply' />
      <Key text='4' group='numeric' id='four' />
      <Key text='5' group='numeric' id='five' />
      <Key text='6' group='numeric' id='six' />
      <Key text='−' group='operator' id='subtract' />
      <Key text='7' group='numeric' id='seven' />
      <Key text='8' group='numeric' id='eight' />
      <Key text='9' group='numeric' id='nine' />
      <Key text='+' group='operator' id='add' />
      <Key text='0' group='numeric' id='zero' />
      <Key text='.' group='numeric' id='decimal' />
      <Key text='=' group='equal' id='equals' />
    </div>
  );
};

export default Keyboard;
