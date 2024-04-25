import carros, { carroPorNombre } from './data/carros'

console.log(carros)

const marcasCarros = carros.map(({ marca }) => marca)
const nombresCarros = carros.map(({ cliente }) => cliente.name)

console.log(marcasCarros)
console.log(nombresCarros)

console.log('Carro por nombre: ' + carroPorNombre('Gustavoo'))

const carroFilter = carros.filter(car => car.id !== 1)

console.log(carroFilter)

const carroSome = carros.some(car => car.cliente.name === 'Gustavo')

console.log(carroSome)
