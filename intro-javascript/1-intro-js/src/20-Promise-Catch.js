import { carroPorId } from './data/carros.js'

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const test = carroPorId(10)

    if (test) {
      resolve(test)
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Error: Not found')
    }
  }, 3000)
})

promise.then(json => {
  console.log(json)
  console.log('Success')
}).catch(err => {
  console.error(err)
})
