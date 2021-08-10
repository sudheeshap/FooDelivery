import ModelAbstract from './model.abstract';

export default class ProductModel extends ModelAbstract {
  /**
   * ID
   */
  id = '';

  /**
   * Name
   */
  name = '';

  /**
   * Description
   */
  description = '';

  /**
   * Price
   */
  price = 0;

  /**
   * Calories
   */
  calories = 0;

  /**
   * Photo thumbnail
   */
  photoThumbnail = '';
}
