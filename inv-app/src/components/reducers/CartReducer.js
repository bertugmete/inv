import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../actions/actionTypes/cartActions"
import ex from "../../images/ex.jpg"
import ex2 from "../../images/ex2.jpg"

const initState = {
  items: [
    {
      id: 1,
      name: "Havlu1",
      color: "Red",
      size: "M",
      price: 50,
      description: "Hızlı Kuruyan Havlu",
      imgName: ex,
    },

    {
      id: 2,
      name: "Havlu2",
      color: "Blue",
      size: "L",
      price: 70,
      description: "Hızlı Kuruyan Havlu",
      imgName: ex2,
    },
    {
      id: 3,
      name: "Havlu3",
      color: "Yellow",
      size: "S",
      price: 90,
      description: "Hızlı Kuruyan Havlu",
      imgName: ex,
    },
    {
      id: 4,
      name: "Havlu4",
      color: "Black",
      size: "S",
      price: 100,
      description: "Hızlı Kuruyan Havlu",
      imgName: ex2,
    },
    {
      id: 5,
      name: "Havlu5",
      color: "Red",
      size: "XL",
      price: 110,
      description: "Hızlı Kuruyan Havlu",
      imgName: ex,
    },
    {
      id: 6,
      name: "Havlu6",
      color: "Black",
      size: "XL",
      price: 135,
      description: "Hızlı Kuruyan Havlu",
      imgName: ex2,
    },
    {
      id: 7,
      name: "Havlu7",
      color: "Blue",
      size: "M",
      price: 180,
      description: "Hızlı Kuruyan Havlu",
      imgName: ex,
    },
  ],
  addedItems: [],
  total: 0,
  showLoader: false,
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find((item) => item.id === action.id)
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
      }
    case REMOVE_FROM_CART:
      let newAddedItems = state.addedItems.filter((item) => item.id !== action.id)
      debugger
      return {
        ...state,
        addedItems: [...newAddedItems],
      }
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        showLoader: false,
      }

    default:
      return state
  }
}

export default cartReducer
