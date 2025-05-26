// const tinderUser = new Object() => Sigleton Object

const tinderUser = {} //Non-Singleton Object

tinderUser.id = "asds23454"
tinderUser.name = "Selena"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "seema@gmail.com",
    fullName:{
        userFullName: {
            firstName: "prachi",
            lastname: "pundir"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign(, obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

 const obj3 = {...obj1, ...obj2}
//  console.log(obj3);

const users = [
    {
        id: 1,
        email: "sam@gmail.com"
    },
    {
        id: 2,
        email: "neha@gmail.com"
    },
    {
        id: 3,
        email: "govind@gmail.com"
    },
]
 
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course  = {
    courseName : "Javascript",
    price : 999,
    courseInstructor: "Hitesh"

}

// course.courseInstructor

const {courseInstructor: instructor} = course  // Destructuring in Objrects
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "prachi",
//     "courseNaqme":"JavaScript",
//     "price": 899
// }  // JSON DATA

// or it can be in the form of array
[
    {},
    {},
    {}
]