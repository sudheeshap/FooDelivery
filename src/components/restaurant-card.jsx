import React from 'react';
import PropTypes from 'prop-types';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-list__card">
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
        {restaurant.is_featured && <div className="restaurant-list__card-featured">Featured</div>}
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
          {restaurant.offer && (
            <div className="restaurant-list__card-point restaurant-list__card-point--offer">
              <i className="restaurant-list__card-icon bi bi-tag" />
              <span>{restaurant.offer}</span>
            </div>
          )}
        </div>
      </div>
      {!restaurant.is_open && <div className="restaurant-list__card-overlay">Closed</div>}
    </div>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.instanceOf(Object).isRequired,
};
