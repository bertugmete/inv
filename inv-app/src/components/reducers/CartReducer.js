import { ADD_TO_CART } from "../actions/actionTypes/cartActions"

const initState = {
  items: [
    {
      id: 1,
      name: "Havlu1",
      color: "Red",
      size: "M",
      price: 50,
      description: "Hızlı Kuruyan Havlu",
      imgName: "havlu.jpg",
    },

    {
      id: 2,
      name: "Havlu2",
      color: "Blue",
      size: "L",
      price: 70,
      description: "Hızlı Kuruyan Havlu",
    },
    {
      id: 3,
      name: "Havlu3",
      color: "Yellow",
      size: "S",
      price: 90,
      description: "Hızlı Kuruyan Havlu",
    },
    {
      id: 4,
      name: "Havlu4",
      color: "Black",
      size: "S",
      price: 100,
      description: "Hızlı Kuruyan Havlu",
    },
    {
      id: 5,
      name: "Havlu5",
      color: "Red",
      size: "XL",
      price: 110,
      description: "Hızlı Kuruyan Havlu",
    },
    {
      id: 6,
      name: "Havlu6",
      color: "Black",
      size: "XL",
      price: 135,
      description: "Hızlı Kuruyan Havlu",
    },
    {
      id: 7,
      name: "Havlu7",
      color: "Blue",
      size: "M",
      price: 180,
      description: "Hızlı Kuruyan Havlu",
    },
  ],
  addedItems: [],
  total: 0,
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find((item) => item.id === action.id)
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
      }
    default:
      return state
  }
}

export default cartReducer
