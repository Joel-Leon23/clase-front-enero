const carros = ['Ferrari', 'Nissan', 'Porsche', 'McLaren', 'Mercedes']

const carros2 = carros.concat('Mustang GT500', 'Challenger', 'Camaro')

const motos = ['Italika', 'Choper', 'Ninja', 'SuperSport']

const tienda = [...motos, ...carros, 'rin 18']

const tienda2 = motos.concat(carros).concat('rin 18')

console.log(carros2)

console.log(tienda2)
