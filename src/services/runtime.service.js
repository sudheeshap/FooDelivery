/**
 * Returns restaurant by slug
 */
export const getFilterOptions = () => [
  { value: 'offer', text: 'Offers' },
  { value: 'fast_delivery', text: 'Fast delivery (Less than 30 min)' },
  { value: 'free_delivery', text: 'Free delivery' },
];

export const getSortOptions = () => [
  { value: 'is_featured', text: 'Featured' },
  { value: 'distance', text: 'Distance' },
  { value: 'delivery_in', text: 'Fast delivery' },
];
