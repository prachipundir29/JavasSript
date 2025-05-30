const userEmail = "prachi@gmail.com"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}

// falsy Values

// false, 0, -0, NigInt 0n, "", null, undefined, NaN

// truthy Values
// "0", "false", " ", [], {}, function(){}

const userArray = []

if (userArray.length === 0) {
    console.log("Array is empty");    
}

const  emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Some important Questions
// false = 0 
// true
// false = ''
// true
// 0 = ''
// true