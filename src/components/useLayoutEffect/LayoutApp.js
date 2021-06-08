import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './LayoutApp.css';

export const LayoutApp = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const quoteParagraph = useRef();
  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    setBoxSize(quoteParagraph.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Layout Effect</h1>
      <br />
      <figure>
        <blockquote className="blockquote">
          <p ref={quoteParagraph}>{quote}</p>
        </blockquote>
      </figure>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </>
  );
};
