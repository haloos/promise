const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked'); 
  } else {
    reject('Error, it broke')
  }
})  

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIIII')
})

promise 
.then(result => result ='!') 
.then(result2 => result2 ='?') 
.catch(() => console.log('errror')) 
.then(result3 => {
 console.log(result3 + '!'); 
})