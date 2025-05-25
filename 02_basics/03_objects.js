// Singleton 
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pranay",
    age: 18,
    [mySym] : "mykey1",
    location: "Jaipur",
    email: "pranay@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "prachi@chatgpt.com"

// Object.freeze(JsUser) 
//  JsUser.email = "shivansh@chatgpt.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
