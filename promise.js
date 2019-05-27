// ASYNC AWAIT 

async function fetchUsers() {
const resp = await fetch('https://jsonplaceholder.typicode.com/users')           .then(resp => resp.json()) 
      .then(console.log)
}
