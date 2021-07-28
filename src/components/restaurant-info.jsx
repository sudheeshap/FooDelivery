import React from 'react';

export default function RestaurantInfo() {
  const rating = 4.5;
  return (
    <section className="restaurant-info__section">
      <div className="restaurant-info__container">
        <div
          className="restaurant-info__image"
          style={{
            backgroundImage:
              'url(https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg)',
          }}
        />

        <div className="restaurant-info">
          <div
            className="restaurant-logo"
            style={{
              backgroundImage:
                'url(https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1610989066011-TAM2C1NWLRLL10HH3FMU/Restaurant-Logo-Designs.jpg?format=1500w)',
            }}
          />
          <div className="restaurant-info__content">
            <div className="restaurant-info__title">Hello this is a test</div>
            <div className="restaurant-info__subtitle">Lorem ipsum dolor sit amet.</div>
            <div className="restaurant-info__subtitle">Lorem, ipsum dolor.</div>
            <div className="rating-container">
              <i className="bi-star-fill icon-star" />
              {rating}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
