import React from 'react';
import { Link } from 'react-router-dom';
import RESTAURANTS_DATA from '../data/restaurants-data';

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
              <span className="restaurant-list__filter">Fast delivery (Less than 30 min)</span>
              <span className="restaurant-list__filter restaurant-list__filter--active">
                Offers
              </span>
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
            <Link to="/restaurant" className="restaurant-list__card" key={restaurant.id}>
              <div
                className="restaurant-list__card-image"
                style={{ backgroundImage: `url(${restaurant.photo_highlight})` }}
              />
              <div
                className="restaurant-list__card-logo"
                style={{ backgroundImage: `url(${restaurant.logo})` }}
              />
              <div className="restaurant-list__card-info">
                <div className="restaurant-list__card-title">{restaurant.name}</div>
                <div className="restaurant-list__card-subtitle">
                  {restaurant.cuisines.replaceAll(',', ' • ')}
                </div>
                {restaurant.is_featured && (
                  <div className="restaurant-list__card-featured">Featured</div>
                )}
                {restaurant.has_free_delivery && (
                  <div className="restaurant-list__card-free-delivery">Free delivery</div>
                )}
                <div className="restaurant-list__card-rating">
                  <i className="restaurant-list__card-icon bi bi-star-fill" />
                  <span>{restaurant.rating}</span>
                </div>
                <div className="restaurant-list__card-more">
                  <div className="restaurant-list__card-point">
                    <i className="restaurant-list__card-icon bi bi-clock" />
                    <span>{restaurant.delivery_in}</span>
                  </div>
                  <div className="restaurant-list__card-point">
                    <i className="restaurant-list__card-icon bi bi-geo-alt" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
