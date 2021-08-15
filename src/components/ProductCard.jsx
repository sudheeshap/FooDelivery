import React from 'react';
import { PropTypes } from 'prop-types';
import food from '../assets/images/food-placeholder.jpg';

export default function ProductCard({ product, addProduct, isEnabled }) {
  return (
    <div className="product__card">
      <div
        className="product__image"
        style={{
          backgroundImage: `url(${product.photoThumbnail || food})`,
        }}
      />
      <div className="product__info">
        <div className="product__title">{product.name}</div>
        <div className="product__description">{product.description}</div>
        <div className="product__price">
          <span>AED </span>
          <span>{product.price}</span>
        </div>
        {isEnabled && (
          <button
            type="button"
            className="form__button form__button--sm product__add-button"
            onClick={() => addProduct(product)}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

ProductCard.defaultProps = {
  isEnabled: false,
};

ProductCard.propTypes = {
  isEnabled: PropTypes.bool,
  product: PropTypes.instanceOf(Object).isRequired,
  addProduct: PropTypes.func.isRequired,
};
