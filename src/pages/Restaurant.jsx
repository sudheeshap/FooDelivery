import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectCartGrandTotal,
  selectCartItems,
  selectCartSubTotal,
} from '../redux/cart/cart.selectors';
import Cart from '../components/Cart';
import MenuList from '../components/MenuList';
import RestaurantCard from '../components/RestaurantCard';
import RestaurantModel from '../models/restaurant.model';
import { loadRestaurant } from '../services/restaurant.service';
import listMenuGroups from '../services/menu-group.service';

export default function Restaurant() {
  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const grandTotal = useSelector(selectCartGrandTotal);
  const restaurantModel = new RestaurantModel();

  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(restaurantModel);
  const [menuGroups, setMenuGroups] = useState([]);

  /**
   * Load restaurant based on slug
   */
  useEffect(() => {
    const restorantObj = loadRestaurant(slug);
    const groups = listMenuGroups();

    // Scroll to top of the page
    window.scrollTo(0, 0);

    setRestaurant(restorantObj);
    setMenuGroups(groups);
  }, [slug]);

  return (
    <section className="main-container">
      <section className="menu-container">
        <RestaurantCard restaurant={restaurant} />
        <MenuList menuGroups={menuGroups} />
      </section>
      <section className="cart-container">
        <Cart
          items={cartItems}
          restaurantName={restaurant.name}
          deliveryFee={restaurant.deliveryFee}
          subTotal={subTotal}
          grandTotal={grandTotal}
        />
      </section>
    </section>
  );
}
