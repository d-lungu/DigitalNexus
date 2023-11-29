import { goto } from '$app/navigation';

/** @param {string} route */
export function goBack(route) {
  goto(route)
}