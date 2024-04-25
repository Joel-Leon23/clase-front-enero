const carros = ['Ferrari', 'Nissan GTR', 'Porsche', 'McLaren', 'Mercedes']

carros.push('Mustang GT500', 'Challenger', 'Camaro')

console.log(carros)

const num = [10, 5, 6, 12, 22]

num.push(332, 532, 535)

console.log(num)

carros.forEach(car => console.log(car))

for (const car of carros) {
  console.log(car)
}

for (let i = 0; i < carros.length; i++) {
  const element = carros[i]
  console.log('i' + carros[i])
}
