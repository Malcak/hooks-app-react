import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCumtomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BrakingBad Quotes</h1>
      <br />

      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <figure>
          <blockquote className="blockquote">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">{author}</figcaption>
        </figure>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </>
  );
};
