import React from 'react';
import { PropTypes } from 'prop-types';

export default function SearchInput({ query, placeholder, onChange }) {
  return (
    <input
      type="text"
      autoComplete="off"
      autoCorrect="off"
      className="form__input form__input--lg form__input-search"
      placeholder={placeholder}
      value={query}
      onChange={onChange}
    />
  );
}

SearchInput.defaultProps = {
  placeholder: '',
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
