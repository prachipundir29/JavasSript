// There are teo types of datatype
//1. Primitive     2. Non-Primitive


// #Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

 
const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId );

const bigNumber = 24357865243124375n   //BigInt

// #Reference (Non Primitive)

// Array, Objects, Functions

// +++++++++ Memory +++++++
// There are two type of memory
//1. Stack Memory (Primitive)
//2. Heap Memory (Non-Primitive)

let myName = "prachipundir"

let anotherName = myName
anotherName = "Shreya"

console.log(myName);
console.log(anotherName);

// Heap Memory Example

let userOne = {
    email: "prachi@google.com",
    city: "Muzaffarnagar"
}
   
  let userTwo = userOne 
userTwo.email = "simran@google.com"

console.log(userOne.email);
console.log(userTwo.email );


