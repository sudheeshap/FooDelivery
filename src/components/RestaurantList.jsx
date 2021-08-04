import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DATA_RESTAURANTS from '../data/restaurant.data';
import {
  addFilter,
  removeFilter,
} from '../redux/restaurant/restaurant.reducer';
import {
  selectFilters,
  selectRestaurants,
  selectSortBy,
} from '../redux/restaurant/restaurant.selectors';
import { fetchRestaurants } from '../redux/restaurant/restaurant.thunks';
import RestaurantCard from './RestaurantCard';

export default function RestaurantList() {
  const filterOptions = [
    { value: 'offer', text: 'Offers' },
    { value: 'fast_delivery', text: 'Fast delivery (Less than 30 min)' },
    { value: 'free_delivery', text: 'Free delivery' },
  ];
  const restaurants = useSelector(selectRestaurants);
  const filters = useSelector(selectFilters);
  const sortBy = useSelector(selectSortBy);
  const dispatch = useDispatch();

  // Load restaurants
  useEffect(() => {
    dispatch(fetchRestaurants({ filters, sortBy }));
  }, [filters.length, sortBy]);

  const handleClickFilter = (value) => {
    if (filters.includes(value)) {
      return dispatch(removeFilter({ filter: value }));
    }
    return dispatch(addFilter({ filter: value }));
  };

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
              {filterOptions.map((filter) => (
                <button
                  type="button"
                  onClick={() => handleClickFilter(filter.value)}
                  className={`restaurant-list__filter ${
                    filters.includes(filter.value)
                      ? 'restaurant-list__filter--active'
                      : ''
                  }`}
                  key={filter.value}
                >
                  {filter.text}
                </button>
              ))}
            </div>
            <div className="restaurant-list__sort">
              <span>Sort by</span>
              <select>
                <option value="featured">Featured</option>
                <option value="distance">Distance</option>
                <option value="fast_delivery">Fast delivery</option>
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
        </div>
      </div>
    </section>
  );
}
