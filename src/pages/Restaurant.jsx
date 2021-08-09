import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
import { selectMenuGroups } from '../redux/menu-group/menu-group.selectors';
import { fetchMenuGroups } from '../redux/menu-group/menu-group.thunks';

export default function Restaurant() {
  const dispatch = useDispatch();

  const menuGroups = useSelector(selectMenuGroups);
  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const grandTotal = useSelector(selectCartGrandTotal);
  const restaurantModel = new RestaurantModel();

  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(restaurantModel);

  /**
   * Load restaurant and menu groups based on slug
   */
  useEffect(() => {
    setRestaurant(loadRestaurant(slug));

    dispatch(fetchMenuGroups());

    // Scroll to top of the page
    window.scrollTo(0, 0);
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
