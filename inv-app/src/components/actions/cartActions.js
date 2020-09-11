import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_LOADER, HIDE_LOADER } from "./actionTypes/cartActions"

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  }
}

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  }
}
