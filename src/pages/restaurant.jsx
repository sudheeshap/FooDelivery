import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Cart from '../components/cart';
import ProductList from '../components/product-list';
import RestaurantCard from '../components/restaurant-card';
import RESTAURANTS_DATA from '../data/restaurants-data';

export default function Restaurant() {
  const cartItems = [];
  const restaurantModel = {
    id: null,
    name: '',
    logo: '',
    slug: '',
    cuisines: '',
    rating: null,
    photo_highlight: '',
    delivery_in: '',
    distance: '',
    is_open: true,
    is_featured: false,
    has_free_delivery: false,
    offer: '',
  };
  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(restaurantModel);

  useEffect(() => {
    const restorantData = RESTAURANTS_DATA.find((res) => res.slug === slug);
    window.scrollTo(0, 0);

    setRestaurant(restorantData);
  }, [slug]);

  return (
    <section className="main-container">
      <section className="container-left">
        <RestaurantCard restaurant={restaurant} />
        <ProductList />
      </section>
      <section className="container-right">
        <Cart items={cartItems} />
      </section>
    </section>
  );
}
