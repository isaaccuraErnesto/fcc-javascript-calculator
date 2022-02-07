import React from 'react';

const Key = ({ text, group, id }) => {
  return (
    <div className={`key ${group}`} id={id ? id : ''}>
      {text}
    </div>
  );
};

export default Key;
