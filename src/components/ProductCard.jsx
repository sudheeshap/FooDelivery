import React from 'react';
import { PropTypes } from 'prop-types';
import food from '../assets/images/food-placeholder.jpg';

export default function ProductCard({ product }) {
  return (
    <div className="product__card">
      <div
        className="product__image"
        style={{
          backgroundImage: `url(${product.images[0]?.url || food})`,
        }}
      />
      <div className="product__info">
        <div className="product__title">{product.name}</div>
        <div className="product__description">{product.description}</div>
        <div className="product__price">
          <span>AED </span>
          <span>{product.price}</span>
        </div>
        <button
          type="button"
          className="form__button form__button--sm product__add-button"
        >
          Add
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};
