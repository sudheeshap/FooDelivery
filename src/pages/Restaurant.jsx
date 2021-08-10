import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartGrandTotal,
  selectCartItems,
  selectCartRestaurant,
  selectCartSubTotal,
} from '../redux/cart/cart.selectors';
import Cart from '../components/Cart';
import MenuList from '../components/MenuList';
import RestaurantCard from '../components/RestaurantCard';
import { selectMenuGroups } from '../redux/menu-group/menu-group.selectors';
import { addProduct } from '../redux/menu-group/menu-group.thunks';
import { selectRestaurantSelected } from '../redux/restaurant/restaurant.selectors';
import { fetchRestaurant } from '../redux/restaurant/restaurant.thunks';
import RestaurantModel from '../models/restaurant.model';

export default function Restaurant() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const selectedRestaurant =
    useSelector(selectRestaurantSelected) || new RestaurantModel();
  const cartRestaurant = useSelector(selectCartRestaurant);
  const menuGroups = useSelector(selectMenuGroups);
  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const grandTotal = useSelector(selectCartGrandTotal);

  /**
   * Returns cart details
   */
  const getCartDetails = () => {
    const cartDetails = {
      items: [],
      restaurant: null,
      subTotal,
      grandTotal,
    };

    if (selectedRestaurant.id === cartRestaurant?.id) {
      cartDetails.items = cartItems;
      cartDetails.restaurant = cartRestaurant;
    }

    return cartDetails;
  };

  const cartDetails = getCartDetails();

  /**
   * Load restaurant and menu groups based on slug
   */
  useEffect(() => {
    dispatch(fetchRestaurant(slug));

    // Scroll to top of the page
    window.scrollTo(0, 0);
  }, [slug]);

  /**
   * Handle add product
   */
  const handleAddProduct = (product) => {
    dispatch(addProduct({ product }));
  };

  return (
    <section className="main-container">
      <section className="menu-container">
        <RestaurantCard restaurant={selectedRestaurant} />
        <MenuList menuGroups={menuGroups} addProduct={handleAddProduct} />
      </section>
      <section className="cart-container">
        <Cart details={cartDetails} />
      </section>
    </section>
  );
}
