import React from 'react';

export default ({id, message, children}) => {
  const box = (<div>{message}</div>)
  return (
    <div id={id}>
      {box}
      {children}
    </div>
  );
}
