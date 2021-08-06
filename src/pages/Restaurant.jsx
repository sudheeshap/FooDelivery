import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MenuList from '../components/MenuList';
import RestaurantCard from '../components/RestaurantCard';
import DATA_MENU_GROUPS from '../data/menu-groups';
import Cart from '../components/Cart';
import { getRestaurantBySlug } from '../services/restaurant.service';

export default function Restaurant() {
  const cartItems = [];
  const restaurantModel = {
    id: null,
    name: '',
    logo: '',
    slug: '',
    cuisines: '',
    rating: null,
    cover_photo: '',
    delivery_in: '',
    distance: '',
    is_open: true,
    is_featured: false,
    has_free_delivery: false,
    offer: '',
  };

  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(restaurantModel);
  const [menuGroups, setMenus] = useState([]);

  useEffect(() => {
    const restorantData = getRestaurantBySlug(slug);
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
