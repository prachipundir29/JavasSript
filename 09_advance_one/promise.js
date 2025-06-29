const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
      console.log("Async Task is complete");
      resolve() 
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async Task 2");
       resolve()    
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, reject){
  setTimeout( function(){
    resolve({
        user: "prachi",
        email: "prachi@gmail.com"
    })
  },1000)
})

PromiseThree.then(function(user){
  console.log(user);
  
})

const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
    let error = false
    if(!error){
       resolve({name: "rehat", password: 122564})
    } else {
      reject('ERROR: Something went wrong')
    }
   }, 1000)
})

promiseFour.then((user) => {
  console.log(user);
  return user.name
})
.then((name) => {
   console.log(name);
   
})
.catch(function(error){
  console.log(error);
  
})
.finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject){
      setTimeout(function(){
    let error = true
    if(!error){
       resolve({name: "JavaScript", password: 122564})
    } else {
      reject('ERROR: JS went wrong')
    }
   }, 1000)
})

async function consumePromiseFive(){
   try {
      const response = await promiseFive
      console.log(response);
   } catch (error){
     console.log(error);
     
   }
   
}
consumePromiseFive()

// async function getAllUsers(){
//   try {
//   const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log("E:", error);
    
//   }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
   return response.json()
})
.then((data) => {
   console.log(data);
   
})
.catch( (error) => console.log(error));
 