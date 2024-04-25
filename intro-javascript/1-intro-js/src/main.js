const carros = [
  {
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
