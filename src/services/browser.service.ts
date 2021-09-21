/**
 * Scroll to position
 */
export const scrollToPosition = (xPos, yPos) => {
  window.scrollTo(xPos, yPos);
};

/**
 * Scroll to element
 */
export const scrollToElement = (elem) => {
  elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
