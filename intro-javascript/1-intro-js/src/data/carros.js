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

const carroPorNombre = (name) => carros.find(car => car.nombre === name)
const carroPorId = (id) => carros.find(car => car.id === id)

const findCarById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const test = carroPorId(id)

      if (test) {
        resolve(test)
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error: Not found')
      }
    }, 3000)
  })

  return promise
}

export {
  carros as default,
  carroPorNombre,
  carroPorId,
  findCarById
}
