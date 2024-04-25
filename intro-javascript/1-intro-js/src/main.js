const API_URL = 'https://jsonplaceholder.typicode.com/users'

fetch(API_URL).then(res => res.json()).then(data => {
  console.log(data)
})
