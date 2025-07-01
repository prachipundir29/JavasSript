// let myName = "prachi     ";
// let myAge = 22;

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Ram = function(){
    console.log(`Ram is present in all objects`);    
}

Array.prototype.Siya = function(){
    console.log(`Siya says hello`);    
}
// heroPower.Ram()
myHeros.Ram()
myHeros.Siya()
// heroPower.Siya()

//INHERITANCE

const user = {
    name: "Raghav",
    eamil: "raghav@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignmentL : 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher. __proto__ = user

// MODERN SYNTAX
Object .setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Mathematics   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);    
}

anotherUsername.truelength()
"Radha".truelength()
"Samar   ".truelength()