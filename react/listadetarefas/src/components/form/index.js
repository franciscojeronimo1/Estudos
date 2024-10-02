import React from 'react';
import { FaPlus } from 'react-icons/fa';
import ProtTypes from 'prop-types';

import './form.css';

export default function Form(handleChange, handleSubmit, novaTarefa) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: ProtTypes.func.isRequired,
  handleSubmit: ProtTypes.func.isRequired,
  novaTarefa: ProtTypes.func.string.isRequired,
};
