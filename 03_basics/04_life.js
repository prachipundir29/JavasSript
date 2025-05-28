// Immmediately Invoked Function Expressios (IIFE)

// Named IIFE
(function database() {
    console.log(`DB CONNECTED`);
    
}) ();

// Arrow Function or Simple IIFE
( (name) => {
    console.log(`DB CONNECTED TO ANOTHER DATABASE CALLED ${name}`);
    
})("firebase")