import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './FormApp.css';

export const FormApp = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });
  const { name, email } = formState;

  useEffect(() => {}, []);
  useEffect(() => {}, [formState]);
  useEffect(() => {}, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: [target.value],
    });
  };

  return (
    <form>
      <h1>Form</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="your email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name == 'coords' && <Message />}
    </form>
  );
};
