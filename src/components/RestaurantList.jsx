import React from 'react';

export default function RestaurantList() {
  return (
    <section className="restaurant__list">
      {[1, 2, 3, 4, 5, 5].map((n) => (
        <div className="restaurant__card">
          <div>{n}</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      ))}
    </section>
  );
}
