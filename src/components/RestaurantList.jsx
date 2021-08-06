import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DATA_RESTAURANTS from '../data/restaurant.data';
import {
  addFilter,
  removeFilter,
  sortByType,
} from '../redux/restaurant/restaurant.reducer';
import {
  selectFilters,
  selectRestaurants,
  selectSortById,
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
  const filters = useSelector(selectFilters);
  const sortById = useSelector(selectSortById);
  const pageNumber = 1;
  const pageSize = 15;
  const dispatch = useDispatch();

  // Load restaurants
  useEffect(() => {
    console.log(filters, sortById, pageNumber, pageSize);
    dispatch(fetchRestaurants({ filters, sortById, pageNumber, pageSize }));
  }, [filters.length, sortById]);

  const handleClickFilter = (value) => {
    if (filters.includes(value)) {
      return dispatch(removeFilter({ filter: value }));
    }
    return dispatch(addFilter({ filter: value }));
  };

  const handleChangeSort = ({ target }) =>
    dispatch(sortByType({ type: target.value }));

  return (
    <section className="restaurant-list__wrapper">
      <div className="restaurant-list__container">
        <div className="restaurant-list__header">
          <div className="restaurant-list__count">
            <span>{DATA_RESTAURANTS.length}</span>
            <span> restaurants</span>
          </div>
          <div className="restaurant-list__actions">
            <div className="restaurant-list__filters">
              <span>Filter by</span>
              {filterOptions.map((option) => (
                <button
                  type="button"
                  onClick={() => handleClickFilter(option.value)}
                  className={`restaurant-list__filter ${
                    filters.includes(option.value)
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
      </div>
    </section>
  );
}
