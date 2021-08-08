import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFilterQuery } from '../redux/restaurant/restaurant.reducer';
import { selectSearchlistFilterQuery } from '../redux/restaurant/restaurant.selectors';
import SearchInput from './SearchInput';
import useDebounce from '../hooks/useDebounce';

export default function Jumbotron() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchlistFilterQuery);

  /**
   * Handle search input change
   */
  const handleChangeSearch = useDebounce(
    ({ target }) => dispatch(updateFilterQuery({ query: target.value })),
    300,
  );

  return (
    <section className="jumbotron">
      <div className="jumbotron__image-container">
        <picture>
          <source
            media="(min-width:650px)"
            srcSet="https://t3.ftcdn.net/jpg/03/29/41/64/240_F_329416479_41w0YT4xyu2AcbfnVRHfJ4RRTPVIhCOc.jpg"
          />
          <img
            className="jumbotron__image"
            src="https://t3.ftcdn.net/jpg/03/29/41/64/240_F_329416479_41w0YT4xyu2AcbfnVRHfJ4RRTPVIhCOc.jpg"
            alt="Home page"
          />
        </picture>
      </div>

      <div className="jumbotron__content">
        <h2 className="jumbotron__title">FooDelivery</h2>
        <h4 className="jumbotron__subtitle">
          Delivering the food of your choice, on time.
        </h4>
        <div>
          <SearchInput
            placeholder="Search for a restaurant"
            query={searchQuery}
            onChange={handleChangeSearch}
          />
        </div>
      </div>
    </section>
  );
}
