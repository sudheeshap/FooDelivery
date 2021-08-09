import ModelAbstract from './model.abstract';

export default class CartItemModel extends ModelAbstract {
  /**
   * ID
   */
  id = '';

  /**
   * Quantity
   */
  quantity = 0;

  /**
   * Product
   */
  product = null;
}
