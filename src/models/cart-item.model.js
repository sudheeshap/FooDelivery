import ModelAbstract from './model.abstract';

export default class CartItemModel extends ModelAbstract {
  /**
   * ID
   */
  id = '';

  /**
   * Name
   */
  name = '';

  /**
   * Price
   */
  price = 0;

  /**
   * Quantity
   */
  quantity = 1;
}
