export const FILTER_TYPES = {
  color: {
    name: "color",
    title: "Renk",
  },
  size: { name: "size", title: "Size" },
  price: { name: "price", title: "Fiyat Aralığı" },
}

export const FILTER_MENU = {
  [FILTER_TYPES.color.name]: [
    { key: "red", label: "Red", type: "color" },
    { key: "blue", label: "Blue", type: "color" },
    { key: "yellow", label: "Yellow", type: "color" },
    { key: "black", label: "Black", type: "color" },
  ],
  [FILTER_TYPES.size.name]: [
    { key: "small", label: "S", type: "size" },
    { key: "medium", label: "M", type: "size" },
    { key: "large", label: "L", type: "size" },
    { key: "xlarge", label: "XL", type: "size" },
  ],
  [FILTER_TYPES.price.name]: [
    { key: "0-100", label: "0-100", type: "price" },
    { key: "100-200", label: "100-200", type: "price" },
  ],
}

export const HEADER = {
  companyName: "Inveon",
  home: "Ürünler",
  cart: "Sepetim",
}

export const CURRENCY = {
  TL: "₺",
}
