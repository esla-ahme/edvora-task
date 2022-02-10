//product not selcted => all brands (i), all cities, all states
//product selected => this product only , his cities, his states

// city selected =>  show products of list of fProducts that in this cities 

export const filterData = (data, cities, states, filters) => {
  let fProducts = new Map(), fCities = [], fStates = [];
  if (filters[0] === null) {
    fCities = cities;
    fStates = states;
    fProducts = data
  }
  else {
    fProducts.set(filters[0], data.get(filters[0]))
    fCities = data.get(filters[0]).cities
    fStates = data.get(filters[0]).states
  }


  //states
  if (filters[1] !== null) {
    for (const [k, v] of fProducts.entries()) {
      const temp = v.products.filter(p => {
        if (p.address.state === filters[1])
          return p

      })

      if (temp.length === 0) fProducts.delete(k)
      else {
        const newV = v;
        newV.products = temp;
        fProducts.set(k, newV)
      }
    }
  }
  //cities
  if (filters[2] !== null) {
    for (const [k, v] of fProducts.entries()) {
      const temp = v.products.filter(p => {
        console.log(p.address.city, filters[2])
        if (p.address.city === filters[2])
          return p

      })

      console.log(temp.length)
      if (temp.length === 0) fProducts.delete(k)
      else {
        const newV = v;
        newV.products = temp;
        fProducts.set(k, newV)
      }
    }
  }


  return [fProducts, fCities, fStates]

}