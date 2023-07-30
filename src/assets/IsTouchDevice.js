/*
*   @param {boolean} isTouchDevice - Detect device touch or desktop.
*/
export const IsTouchDevice = () => {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}
