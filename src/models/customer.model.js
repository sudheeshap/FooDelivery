import ModelAbstract from './model.abstract';

export default class CustomerModel extends ModelAbstract {
  /**
   * ID
   */
  id = '';

  /**
   * Firstname
   */
  firstName = '';

  /**
   * Lastname
   */
  lastName = '';

  /**
   * Email
   */
  email = '';

  /**
   * Mobile
   */
  mobile = '';

  /**
   * Address line 1
   */
  addressLine1 = '';

  /**
   * Address line 2
   */
  addressLine2 = '';

  /**
   * City
   */
  city = '';
}
