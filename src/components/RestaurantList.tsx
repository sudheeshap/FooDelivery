import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  updateSort,
  loadMore,
  updateFilterTypes,
  updateCurrentPage,
} from '../redux/restaurant/restaurant.reducer';
import {
  selectRestaurants,
  selectSearchlist,
} from '../redux/restaurant/restaurant.selectors';
import { fetchRestaurants } from '../redux/restaurant/restaurant.thunks';
import RestaurantCard from './RestaurantCard';
import RestaurantListHeader from './restaurant-list-header/RestaurantListHeader';
import Button from './shared/button/Button';

export default function RestaurantList() {
  // Selectors
  const restaurants = useSelector(selectRestaurants);
  const searchlist = useSelector(selectSearchlist);

  const dispatch = useDispatch();
  const history = useHistory();

  const remainingCount = searchlist.total - restaurants.length;

  useEffect(() => {
    // Fetch restaurant list
    dispatch(
      fetchRestaurants({
        filters: {
          types: searchlist.filters.types,
          query: searchlist.filters.query,
        },
        sortBy: searchlist.sortBy,
        currentPage: searchlist.currentPage,
        perPage: searchlist.perPage,
      }),
    );
  }, [
    searchlist.filters.types.length,
    searchlist.filters.query,
    searchlist.sortBy,
    searchlist.currentPage,
  ]);

  /**
   * Filters changed
   */
  const handleChangeFilters = (value) => {
    const types = searchlist.filters.types.includes(value)
      ? searchlist.filters.types.filter((t) => t !== value)
      : [...searchlist.filters.types, value];

    dispatch(updateFilterTypes({ types }));
  };

  /**
   * Sort changed
   */
  const handleChangeSort = ({ target }) =>
    dispatch(updateSort({ type: target.value }));

  /**
   * Clicked on pagination
   */
  const handleClickPagination = () =>
    dispatch(loadMore({ page: searchlist.currentPage + 1 }));

  /**
   * Clicked on a restaurant
   */
  const handleClickRestaurant = (event, restaurant) => {
    event.preventDefault();

    dispatch(updateCurrentPage({ currentPage: 1 }));

    history.push(`/restaurant/${restaurant.slug}`);
  };

  return (
    <section className="restaurant-list__wrapper">
      <div className="restaurant-list__container">
        <RestaurantListHeader
          loadedCount={restaurants.length}
          searchlist={searchlist}
          onChangeFilters={handleChangeFilters}
          onChangeSort={handleChangeSort}
        />

        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.slug}`}
              key={restaurant.id}
              className="restaurant__card-container"
              onClick={(e) => handleClickRestaurant(e, restaurant)}
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
            <Button
              type="button"
              outline
              className="restaurant__pagination-button"
              onClick={handleClickPagination}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
