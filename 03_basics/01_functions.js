function students() {
    console.log("Heena");
    console.log("Shivaay");
    console.log("Priyaank");
    console.log("Kavi");
    console.log("Avina");

}
// students()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result 
    // console.log("prachi");
    // According to function's definations we can't print anything after declaring the return
       
}
 const result = addTwoNumbers(3,6)  
//  console.log("result:", result);
 
function loginUserMeassage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
      return  
    }
    return `${username} just logged in`
}
// console.log(loginUserMeassage("Prachi"))  // Output will be prachi just logged in 
// console.log(loginUserMeassage()) // Output will be undefined just logged in

function calculateCartPrice( val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 8000));

const user = {
    username: "prachi",
    price: 299
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
  handleObject({
    username: "Riya",
    price: 300,
    
  })

  const myArray = [200, 500, 1000, 8000]

  function returnSecondValue(getArray) {
    return getArray[1]
  }
//   console.log(returnSecondValue(myArray))  
  console.log(returnSecondValue(["Mango", "apple", "pear", "guava" ]))