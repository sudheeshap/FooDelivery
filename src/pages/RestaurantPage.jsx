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
import {
  selectMenuGroups,
  selectSelectedGroupId,
} from '../redux/menu-group/menu-group.selectors';
import { addProduct } from '../redux/menu-group/menu-group.thunks';
import { selectRestaurantSelected } from '../redux/restaurant/restaurant.selectors';
import { fetchRestaurant } from '../redux/restaurant/restaurant.thunks';
import RestaurantModel from '../models/restaurant.model';
import { addItem, clearItem, removeItem } from '../redux/cart/cart.reducer';
import { scrollToPosition } from '../services/browser.service';
import { updateselectedGroupId } from '../redux/menu-group/menu-group.reducer';

export default function RestaurantPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const selectedRestaurant =
    useSelector(selectRestaurantSelected) || new RestaurantModel();
  const cartRestaurant = useSelector(selectCartRestaurant);
  const menuGroups = useSelector(selectMenuGroups);
  const selectedGroupId = useSelector(selectSelectedGroupId);
  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const grandTotal = useSelector(selectCartGrandTotal);

  /**
   * Load restaurant and menu groups based on slug
   */
  useEffect(() => {
    dispatch(fetchRestaurant(slug));

    // Scroll to top of the page
    scrollToPosition(0, 0);
  }, [slug]);

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
   * Handle add product from product list
   */
  const handleAddProduct = (product) => {
    dispatch(addProduct({ product }));
  };

  /**
   * Handle add cart item from cart list
   */
  const handleAddCartItem = (item) => {
    dispatch(addItem({ item }));
  };

  /**
   * Handle remove item quantity from cart list
   */
  const handleRemoveCartItem = (item) => {
    dispatch(removeItem({ item }));
  };

  /**
   * Handle clear item
   */
  const handleClearCartItem = (item) => {
    dispatch(clearItem({ item }));
  };

  /**
   * Handle group selection
   */
  const handleGroupSelection = (groupId) => {
    dispatch(updateselectedGroupId({ groupId }));
  };

  return (
    <section className="main-container">
      <section className="menu-container">
        <RestaurantCard restaurant={selectedRestaurant} />
        <MenuList
          menuGroups={menuGroups}
          selectedGroupId={selectedGroupId}
          addProduct={handleAddProduct}
          selectGroup={handleGroupSelection}
        />
      </section>
      <section className="cart-container">
        <Cart
          details={cartDetails}
          addItem={handleAddCartItem}
          removeItem={handleRemoveCartItem}
          clearItem={handleClearCartItem}
        />
      </section>
    </section>
  );
}
