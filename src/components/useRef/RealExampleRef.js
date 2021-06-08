import React, { useState } from 'react';
import { MultipleCumtomHooks } from '../multipleCustomHooks/MultipleCumtomHooks';

export const RealExampleRef = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>Real Example of useRef</h1>
      <br />
      {show && <MultipleCumtomHooks />}
      <button className="btn btn-primary" onClick={handleClick}>
        Show/Hide quotes
      </button>
    </div>
  );
};
