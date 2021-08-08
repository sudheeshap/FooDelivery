import ProductModel from './product.model';

export default class CartItemModel {
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
  product = new ProductModel();
}
