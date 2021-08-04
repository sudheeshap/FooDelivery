import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Cart from '../components/cart';
import MenuList from '../components/menu-list';
import RestaurantCard from '../components/restaurant-card';
import DATA_RESTAURANTS from '../data/restaurant.data';
import DATA_MENU_GROUPS from '../data/menu-groups';

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
  // const menuModel = {
  //   id: null,
  //   name: '',
  //   description: '',
  //   price: null,
  //   calories: null,
  //   images: [],
  // };
  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(restaurantModel);
  const [menuGroups, setMenus] = useState([]);

  useEffect(() => {
    const restorantData = DATA_RESTAURANTS.find((res) => res.slug === slug);
    const groups = DATA_MENU_GROUPS;
    window.scrollTo(0, 0);

    setRestaurant(restorantData);
    setMenus(groups);
  }, [slug]);

  return (
    <section className="main-container">
      <section className="menu-container">
        <RestaurantCard restaurant={restaurant} />
        <MenuList menuGroups={menuGroups} />
      </section>
      <section className="cart-container">
        <Cart items={cartItems} />
      </section>
    </section>
  );
}
