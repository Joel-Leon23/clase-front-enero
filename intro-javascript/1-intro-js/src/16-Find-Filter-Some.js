const carros = [
  {
    id: 1,
    marca: 'Seat',
    modelo: 'Fr',
    year: 2018,
    nombre: 'Leon',
    cliente: {
      name: 'Gustavo',
      apellido: 'Rodriguez'
    }
  },
  {
    id: 2,
    marca: 'Seat',
    modelo: 'Excellence',
    year: 2018,
    nombre: 'Arona',
    cliente: {
      name: 'Gustavo',
      apellido: 'Rodriguez'
    }
  },
  {
    id: 3,
    marca: 'Seat',
    modelo: 'Cupra',
    year: 2018,
    nombre: 'Ateca',
    cliente: {
      name: 'Gustavo',
      apellido: 'Rodriguez'
    }
  },
  {
    id: 4,
    marca: 'Cupra',
    modelo: 'Vz',
    year: 2018,
    nombre: 'Formentor',
    cliente: {
      name: 'Gustavo',
      apellido: 'Rodriguez'
    }
  },
  {
    id: 5,
    marca: 'Cupra',
    modelo: 'PHEV',
    year: 2018,
    nombre: 'Formentor',
    cliente: {
      name: 'Gustavo',
      apellido: 'Rodriguez'
    }
  }
]

console.log(carros)

const marcasCarros = carros.map(({ marca }) => marca)
const nombresCarros = carros.map(({ cliente }) => cliente.name)

console.log(marcasCarros)
console.log(nombresCarros)

const carroPorNombre = carros.find(car => car.nombre === 'Formentor')

console.log(carroPorNombre)

const carroFilter = carros.filter(car => car.id !== 1)

console.log(carroFilter)

const carroSome = carros.some(car => car.cliente.name === 'Gustavo')

console.log(carroSome)
