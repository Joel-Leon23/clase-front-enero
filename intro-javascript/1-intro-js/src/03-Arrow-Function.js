const getInfo = (name = 'Joel', lastName = 'Leon') => `${name} ${lastName}`
const sum = (a = 0, b = 0) => a + b

const info = getInfo('Alejandro', 'Leon')

console.log(info)
console.log(sum(20, 10))
