import React, { useRef } from 'react';

export const FocusApp = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        className="form-control mb-1"
        placeholder="Your name"
        ref={inputRef}
      />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
