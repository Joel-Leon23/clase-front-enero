const API_URL = 'https://jsonplaceholder.typicode.com/users'

// fetch(API_URL).then(res => res.json()).then(data => {
//   console.log(data)
// })

const findAllUsers = async () => {
  const res = await fetch(API_URL)
  return await res.json()
}

const users = await findAllUsers()
console.log(users)
