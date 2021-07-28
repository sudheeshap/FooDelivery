import React from 'react';
import { Link } from 'react-router-dom';
import RESTAURANTS_DATA from '../data/restaurants-data';

export default function RestaurantList() {
  return (
    <section className="restaurant-list__wrapper">
      <div className="restaurant-list__container">
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
                {restaurant.cuisines.replace(',', ', ')}
              </div>
              {restaurant.is_featured && (
                <div className="restaurant-list__card-featured">Featured</div>
              )}
              <div className="restaurant-list__card-rating">
                <i className="restaurant-list__card-icon bi bi-star-fill" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="restaurant-list__card-more">
                <div className="restaurant-list__card-point">
                  <i className="restaurant-list__card-icon bi bi-bicycle " />
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
    </section>
  );
}
