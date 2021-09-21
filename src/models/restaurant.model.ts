import ModelAbstract from './model.abstract';

export default class RestaurantModel extends ModelAbstract {
  /**
   * ID
   */
  id = '';

  /**
   * Name
   */
  name = '';

  /**
   * Logo
   */
  logo = '';

  /**
   * Slug
   */
  slug = '';

  /**
   * Cuisines (Comma separated)
   */
  cuisines = '';

  /**
   * Rating
   */
  rating = 0;

  /**
   * Cover photo
   */
  coverPhoto = '';

  /**
   * Delivery estimate
   */
  deliveryIn = '';

  /**
   * Distance
   */
  distance = '';

  /**
   * Is the restaurant open ?
   */
  isOpen = true;

  /**
   * Is the restaurant featured ?
   */
  isFeatured = false;

  /**
   * Delivery charge
   */
  deliveryFee = 0;

  /**
   * Available offer
   */
  offer = '';
}
