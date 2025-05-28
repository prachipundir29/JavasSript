const user = {
    username: "prachi",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Anand" 
// user.welcomeMessage()

// console.log(this);

// function one(){
//    let username = "Shrey"
//     console.log(this);
//     console.log(this.username);
    
    
// }
// one()

// const one = function () {
//        let username = "Shrey"
//         console.log(this.username);

// }
// one()

const one =  () => {
       let username = "Shrey"
        console.log(this);

}
// one ()

//  const vegetables =   (val1, val2) => {
//         return val1 + val2
//     }

//    console.log(vegetables("ginger", " garlic"))

  // Implecit Return 
//  const vegetables =   (val1, val2) =>   val1 + val2
//   const vegetables =   (val1, val2) =>  ( val1 + val2)

 const vegetables =   (val1, val2) =>   ({name: "Prachi Pundir"})

    console.log(vegetables("ginger", " garlic"))

    