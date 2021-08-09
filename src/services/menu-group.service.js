import getDataMenuGroups from '../api/product-api.service';
import MenuGroupModel from '../models/menu-group.model';
import ProductModel from '../models/product.model';

/**
 * Hydrate product data
 */
const hydrateModelProduct = (data) => {
  const model = new ProductModel();
  model.id = data.id;
  model.name = data.name;
  model.description = data.description;
  model.price = data.price;
  model.calories = data.calories;
  model.photoThumbnail = data.photo_thumb;

  return { ...model };
};

/**
 * Hydrate menu group
 */
const hydrateModelMenuGroup = (data) => {
  const model = new MenuGroupModel();
  model.id = data.id;
  model.name = data.name;
  model.products = data.products.map((product) => ({
    ...hydrateModelProduct(product),
  }));

  return { ...model };
};

/**
 * Returns menu groups for restaurant
 */
export default function listMenuGroups() {
  const menuGroups = getDataMenuGroups();

  return menuGroups.map((group) => hydrateModelMenuGroup(group));
}
