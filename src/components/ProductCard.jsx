import React from 'react';
import { PropTypes } from 'prop-types';

import food from '../assets/images/food-placeholder.jpg';
import LazyImage from './LazyImage';
import Button from './button/Button';

export default function ProductCard({ product, addProduct, isEnabled }) {
  return (
    <div className="product__card">
      <LazyImage
        isBackgroundImage
        src={product.photoThumbnail || food}
        className="product__image"
      />

      <div className="product__info">
        <div className="product__title">{product.name}</div>
        <div className="product__description">{product.description}</div>
        <div className="product__price">
          <span>AED </span>
          <span>{product.price}</span>
        </div>
        {isEnabled && (
          <Button
            outline
            type="button"
            size="sm"
            color="success"
            className="product__add-button"
            onClick={() => addProduct(product)}
          >
            Add
          </Button>
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
