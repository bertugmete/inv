import { ADD_TO_CART } from "./actionTypes/cartActions"

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  }
}
