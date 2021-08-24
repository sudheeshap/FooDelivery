import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartGrandTotal,
  selectCartItemCount,
  selectCartItems,
  selectCartRestaurant,
  selectCartSubTotal,
} from '../redux/cart/cart.selectors';
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
import MenuList from '../components/MenuList';
import RestaurantCard from '../components/RestaurantCard';
import Modal from '../components/shared/modal/Modal';
import {
  CartContainer,
  CartCountButton,
  CartInfoWrapperMobile,
} from '../components/cart/Cart.styles';
import Cart from '../components/cart/Cart';
import Button from '../components/shared/button/Button';
import CartIcon from '../components/CartIcon';

export default function RestaurantPage() {
  const history = useHistory();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const selectedRestaurant =
    useSelector(selectRestaurantSelected) || new RestaurantModel();
  const cartRestaurant = useSelector(selectCartRestaurant);
  const menuGroups = useSelector(selectMenuGroups);
  const selectedGroupId = useSelector(selectSelectedGroupId);
  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const grandTotal = useSelector(selectCartGrandTotal);
  const cartItemCount = useSelector(selectCartItemCount);

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
      isEnabledCheckout: true,
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

  /**
   * Handle cart button click
   */
  const handleClickCart = () => {
    setModalOpen(true);
  };

  /**
   * Clicked on checkout button
   */
  const handleClickCheckout = () => {
    history.push('/checkout');
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
          isEnabled={selectedRestaurant.isOpen}
        />
      </section>
      <CartContainer>
        <Cart
          details={cartDetails}
          addItem={handleAddCartItem}
          removeItem={handleRemoveCartItem}
          clearItem={handleClearCartItem}
        />

        <Modal isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)}>
          <Cart
            details={{
              ...cartDetails,
              items: cartItems,
              restaurant: cartRestaurant,
            }}
            addItem={handleAddCartItem}
            removeItem={handleRemoveCartItem}
            clearItem={handleClearCartItem}
          />
        </Modal>
      </CartContainer>

      {cartItemCount > 0 && (
        <CartInfoWrapperMobile>
          <CartCountButton outline color="primary" size="sm">
            <CartIcon count={cartItemCount} onClick={handleClickCart} />
          </CartCountButton>
          <Button color="success" onClick={handleClickCheckout}>
            Proceed to checkout
          </Button>
        </CartInfoWrapperMobile>
      )}
    </section>
  );
}
