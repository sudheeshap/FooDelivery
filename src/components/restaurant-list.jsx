import React from 'react';
import { Link } from 'react-router-dom';
import RESTAURANTS_DATA from '../data/restaurants-data';
import RestaurantCard from './restaurant-card';

export default function RestaurantList() {
  return (
    <section className="restaurant-list__wrapper">
      <div className="restaurant-list__container">
        <div className="restaurant-list__header">
          <div className="restaurant-list__count">
            <span>{RESTAURANTS_DATA.length}</span>
            <span> restaurants</span>
          </div>
          <div className="restaurant-list__actions">
            <div className="restaurant-list__filters">
              <span>Filter by</span>
              <span className="restaurant-list__filter restaurant-list__filter--active">
                Offers
              </span>
              <span className="restaurant-list__filter">Fast delivery (Less than 30 min)</span>
              <span className="restaurant-list__filter">Free delivery</span>
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
          {RESTAURANTS_DATA.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.slug}`}
              key={restaurant.id}
              className="restaurant-list__card-container"
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
