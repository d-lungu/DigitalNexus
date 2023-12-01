import { goto } from '$app/navigation';

/** @param {string} route */
export function goBack(route) {
  goto(route)
}

/** @param {float} n */
export function roundToTwoDigits(n) {
  try {
      return parseFloat(n).toFixed(2);
  } catch (error) {
      return parseFloat(n);
  }
}

/** @param {float} price */
export function checkForNullPrice(price) {
  if (price === null) {
    return 0;
  }
  return roundToTwoDigits(price);
}

