const API_URL = 'https://jsonplaceholder.typicode.com/users'

// fetch(API_URL).then(res => res.json()).then(data => {
//   console.log(data)
// })

const findAllUsers = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()

  const ul = document.createElement('ul')

  data.forEach(element => {
    const li = document.createElement('li')
    li.innerText = element.name
    ul.appendChild(li)
  })

  document.getElementById('root').append(ul)
}

findAllUsers()
