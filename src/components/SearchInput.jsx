import React from 'react';
import { PropTypes } from 'prop-types';

export default function SearchInput({ placeholder, onChange }) {
  return (
    <input
      type="text"
      autoComplete="off"
      autoCorrect="off"
      className="form__input form__input--lg form__input-search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

SearchInput.defaultProps = {
  placeholder: '',
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
