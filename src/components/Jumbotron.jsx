import React from 'react';
import { useDispatch } from 'react-redux';

import { updateFilterQuery } from '../redux/restaurant/restaurant.reducer';
import useDebounce from '../hooks/useDebounce';
import FormInput from './FormInput';

export default function Jumbotron() {
  const dispatch = useDispatch();

  /**
   * Handle search input change
   */
  const handleChangeSearch = useDebounce(
    ({ target }) => dispatch(updateFilterQuery({ query: target.value })),
    300,
  );

  return (
    <section className="jumbotron">
      <div className="jumbotron__content">
        <h2 className="jumbotron__title">FooDelivery</h2>
        <h4 className="jumbotron__subtitle">
          Delivering the food of your choice, on time.
        </h4>
        <div>
          <FormInput
            type="text"
            size="lg"
            icon="search"
            placeholder="Search for a restaurant.."
            className="jumbotron__input-search"
            onChange={handleChangeSearch}
          />
        </div>
      </div>
    </section>
  );
}
