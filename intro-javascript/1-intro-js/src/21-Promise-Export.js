import { findCarById } from './data/carros.js'

findCarById(2).then(json => {
  console.log(json)
  console.log('Success')
}).catch(err => {
  console.error(err)
})
