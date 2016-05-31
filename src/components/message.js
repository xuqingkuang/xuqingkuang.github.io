import React from 'react';

export default ({message, children}) => {
  const box = (<div>{message}</div>)
  return (
    <div>
      {box}
      {children}
    </div>
  );
}
