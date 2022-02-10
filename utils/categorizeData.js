export const categorizeData = (data) => {
  //console.log(data)
  const categorizedData = new Map()
  const allCities = new Set()
  const allStates = new Set()


  for (const i in data) {
    const p = data[i]
    //console.log(p)
    allStates.add(p.address.state)

    allCities.add(p.address.city)
    if (!categorizedData.has(p.product_name)) {
      const cities = new Set()
      cities.add(p.address.city)

      const states = new Set()
      states.add(p.address.state)

      const temp = {
        products: [p],
        cities,
        states
      }
      categorizedData.set(p.product_name, temp)
    }
    else {
      const temp = categorizedData.get(p.product_name)
      temp.products.push(p)
      temp.cities.add(p.address.city)
      temp.states.add(p.address.state)
      categorizedData.set(p.product_name, temp)
    }

  }
  return [categorizedData, allCities, allStates];
}