import React from 'react';

const Display = ({ formula, output, equalClicked }) => {
  return (
    <div id='screen'>
      <div id='formula'>
        {formula.length > 25 ? formula.slice(0, 25).concat('...') : formula}
      </div>
      <div
        id='display'
        style={output.length > 12 ? { fontSize: '32px', height: '32px' } : {}}
      >
        {equalClicked
          ? output
          : formula === ''
          ? output
          : formula.length > 15
          ? formula.slice(0, 10).concat('...')
          : formula}
      </div>
    </div>
  );
};

export default Display;
