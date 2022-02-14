import React from 'react';

const Key = ({ text, group, id, handleClick, value }) => {
  return (
    <div
      className={`key ${group}`}
      id={id ? id : ''}
      value={value}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Key;
