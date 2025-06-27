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

new PromiseTwo(function(resolve, reject){
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