export function filterArray(array, filters) {
  const filterKeys = Object.keys(filters)
  return array.filter((item) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true
      if (key === "price") {
        return filters[key].find((filter) => {
          let prices = filter.split("-")
          return item[key] >= prices[0] && item[key] < prices[1]
        })
      } else {
        return filters[key].find((filter) => filter === item[key])
      }
    })
  })
}
