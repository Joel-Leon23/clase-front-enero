const car = {
  id: 1,
  name: 'LaFerrari',
  date: new Date(),
  brand: {
    id: 1,
    name: 'Ferrari',
    location: 'Europa',
    age: 100
  },
  inventory: [
    {
      id: 1,
      color: 'Blue',
      quantity: 5,
      price: 11000000
    },
    {
      id: 2,
      color: 'White',
      quantity: 2,
      price: 10000000
    },
    {
      id: 3,
      color: 'Yellow',
      quantity: 3,
      price: 11500000
    }
  ],
  totalInventory: function () {
    let total = 0
    this.inventory.forEach(({ price, quantity }) => { total += price * quantity })
    return total
  },
  price: 1000000,
  cheers: function () { return `Hello ${this.brand.name} ${this.name}` }
}

car.name = 'F40'
car.price = 1500000
const cheers = car.cheers()
console.log(car)
console.log(cheers)
console.log(car.totalInventory())
