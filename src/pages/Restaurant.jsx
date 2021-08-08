import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MenuList from '../components/MenuList';
import RestaurantCard from '../components/RestaurantCard';
import DATA_MENU_GROUPS from '../data/menu-groups';
import Cart from '../components/Cart';
import RestaurantModel from '../models/restaurant.model';
import { loadRestaurant } from '../services/restaurant.service';

export default function Restaurant() {
  const cartItems = [];
  const restaurantModel = new RestaurantModel();

  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(restaurantModel);
  const [menuGroups, setMenus] = useState([]);

  useEffect(() => {
    const restorantData = loadRestaurant(slug);
    const groups = DATA_MENU_GROUPS;

    // Scroll on top of the page
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
