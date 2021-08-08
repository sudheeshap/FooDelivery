import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  updateSort,
  loadMore,
  updateFilterTypes,
} from '../redux/restaurant/restaurant.reducer';
import {
  selectRestaurants,
  selectSearchlistCurrentPage,
  selectSearchlistFilterQuery,
  selectSearchlistFilterTypes,
  selectSearchlistPerPage,
  selectSearchlistSortBy,
  selectSearchlistTotal,
} from '../redux/restaurant/restaurant.selectors';
import { fetchRestaurants } from '../redux/restaurant/restaurant.thunks';
import RestaurantCard from './RestaurantCard';

export default function RestaurantList() {
  const filterOptions = [
    { value: 'offer', text: 'Offers' },
    { value: 'fast_delivery', text: 'Fast delivery (Less than 30 min)' },
    { value: 'free_delivery', text: 'Free delivery' },
  ];
  const sortOptions = [
    { value: 'is_featured', text: 'Featured' },
    { value: 'distance', text: 'Distance' },
    { value: 'delivery_in', text: 'Fast delivery' },
  ];
  const restaurants = useSelector(selectRestaurants);
  const filterTypes = useSelector(selectSearchlistFilterTypes);
  const filterQuery = useSelector(selectSearchlistFilterQuery);
  const sortBy = useSelector(selectSearchlistSortBy);
  const currentPage = useSelector(selectSearchlistCurrentPage);
  const perPage = useSelector(selectSearchlistPerPage);
  const total = useSelector(selectSearchlistTotal);

  const dispatch = useDispatch();
  const remainingCount = total - restaurants.length;

  useEffect(() => {
    dispatch(
      fetchRestaurants({
        filters: { types: filterTypes, query: filterQuery },
        sortBy,
        currentPage,
        perPage,
      }),
    );
  }, [filterTypes.length, filterQuery, sortBy, currentPage]);

  const handleClickFilterTypes = (value) => {
    const types = filterTypes.includes(value)
      ? filterTypes.filter((t) => t !== value)
      : [...filterTypes, value];

    dispatch(updateFilterTypes({ types }));
  };

  const handleChangeSort = ({ target }) =>
    dispatch(updateSort({ type: target.value }));

  const handleClickPagination = () =>
    dispatch(loadMore({ page: currentPage + 1 }));

  return (
    <section className="restaurant-list__wrapper">
      <div className="restaurant-list__container">
        <div className="restaurant-list__header">
          <div className="restaurant-list__count">
            <span>
              {restaurants.length} of {total} restaurants
            </span>
          </div>
          <div className="restaurant-list__actions">
            <div className="restaurant-list__filters">
              <span>Filter by</span>
              {filterOptions.map((option) => (
                <button
                  type="button"
                  onClick={() => handleClickFilterTypes(option.value)}
                  className={`restaurant-list__filter ${
                    filterTypes.includes(option.value)
                      ? 'restaurant-list__filter--active'
                      : ''
                  }`}
                  key={option.value}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className="restaurant-list__sort">
              <span>Sort by</span>
              <select onChange={handleChangeSort}>
                {sortOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.slug}`}
              key={restaurant.id}
              className="restaurant__card-container"
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
          {restaurants.length > 0 && (
            <div className="restaurant__card-container restaurant__card-container--dummy" />
          )}
          {restaurants.length === 0 && (
            <div className="restaurant__empty-state">No restaurants found</div>
          )}
        </div>

        {remainingCount > 0 && (
          <div className="restaurant__pagination">
            <button
              type="button"
              className="form__button restaurant__pagination-button"
              onClick={handleClickPagination}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
