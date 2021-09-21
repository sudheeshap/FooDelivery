export default class ModelAbstract {
  /**
   * Convert model to an object
   */
  toObject() {
    return JSON.parse(JSON.stringify(this));
  }
}
