import React from 'react';

export default function ProductItem() {
  return (
    <div className="product-item__container">
      <div
        className="product-item__image"
        style={{
          backgroundImage:
            'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1036880806.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*)',
        }}
      />
      <div className="product-item__info">
        <div className="product-item__title">Product name lorem ipsum</div>
        <div className="product-item__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
}
