// if

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }
//     console.log(`User power: ${power}`);

// Note: we can't print anything outside of stock {}

// const balance = 1000

// if (balance > 500) console.log("terst true");

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//    console.log("less than 750");
   
// } else if (balance < 1000){
//    console.log("less than 900");
   
// } else {
//       console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
    
}
    
