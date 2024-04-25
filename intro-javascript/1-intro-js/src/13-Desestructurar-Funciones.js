const carro = {
  marca: 'Seat',
  modelo: 'Fr',
  year: 2018,
  nombre: 'Leon'
}

const detail = ({ marca, modelo, nombre }) => {
  console.log(`El vehiculo de la marca ${marca} es modelo ${modelo} y su nombre es ${nombre}`)
}

detail(carro)
