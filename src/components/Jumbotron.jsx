import React from 'react';

export default function Jumbotron() {
  return (
    <section className="jumbotron">
      <div className="jumbotron__image-container">
        <picture>
          <source
            media="(min-width:650px)"
            srcSet="https://t3.ftcdn.net/jpg/03/29/41/64/240_F_329416479_41w0YT4xyu2AcbfnVRHfJ4RRTPVIhCOc.jpg"
          />
          <img
            className="jumbotron__image"
            src="https://t3.ftcdn.net/jpg/03/29/41/64/240_F_329416479_41w0YT4xyu2AcbfnVRHfJ4RRTPVIhCOc.jpg"
            alt="Home page"
          />
        </picture>
      </div>

      <div className="jumbotron__content">
        <h2 className="jumbotron__title">FooDelivery</h2>
        <h4 className="jumbotron__subtitle">
          Delivering the food of your choice, on time.
        </h4>
        <div>
          <input
            type="text"
            name=""
            autoComplete="off"
            autoCorrect="off"
            className="form__input form__input--lg"
            placeholder="Search for a restaurant"
          />
        </div>
      </div>
    </section>
  );
}
