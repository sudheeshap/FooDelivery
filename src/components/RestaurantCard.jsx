import React from 'react';
import PropTypes from 'prop-types';

import LazyImage from './shared/lazy-image/LazyImage';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant__card">
      <LazyImage
        isBackgroundImage
        src={restaurant.coverPhoto}
        className="restaurant__card-image"
      />

      <LazyImage
        isBackgroundImage
        src={restaurant.logo}
        className="restaurant__card-logo"
      />

      <div className="restaurant__card-info">
        <div className="restaurant__card-title">{restaurant.name}</div>
        <div className="restaurant__card-subtitle">
          {restaurant.cuisines.replaceAll(',', ' • ')}
        </div>
        {restaurant.isFeatured && (
          <div className="restaurant__card-featured">Featured</div>
        )}
        {!restaurant.deliveryFee && (
          <div className="restaurant__card-free-delivery">Free delivery</div>
        )}
        <div className="restaurant__card-rating">
          <i className="restaurant__card-icon bi bi-star-fill" />
          <span>{restaurant.rating}</span>
        </div>
        <div className="restaurant__card-more">
          <div className="restaurant__card-point">
            <i className="restaurant__card-icon bi bi-clock" />
            <span>{restaurant.deliveryIn}</span>
          </div>
          <div className="restaurant__card-point">
            <i className="restaurant__card-icon bi bi-geo-alt" />
            <span>{restaurant.distance}</span>
          </div>
          {restaurant.offer && (
            <div className="restaurant__card-point restaurant__card-point--offer">
              <i className="restaurant__card-icon bi bi-tag" />
              <span>{restaurant.offer}</span>
            </div>
          )}
        </div>
      </div>

      {!restaurant.isOpen && (
        <div className="restaurant__card-overlay">Closed</div>
      )}
    </div>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.instanceOf(Object).isRequired,
};
