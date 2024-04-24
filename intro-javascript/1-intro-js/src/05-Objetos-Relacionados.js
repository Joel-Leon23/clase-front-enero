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
  price: 1000000,
  cheers: function () { return `Hello ${this.brand.name} ${this.name}` }
}

car.name = 'F40'
car.price = 1500000
const cheers = car.cheers()
console.log(car)
console.log(cheers)
