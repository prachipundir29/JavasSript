// // ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const prachi = new User("prachi", "prachi@gmail.com", "2354")
console.log(prachi.encryptPassword());
console.log(prachi.changeUsername());

// behind the scene

function user(username, email, password  ){
        this.username = username;
        this.email = email;
        this.password = password
}

user.prototype.encryptPassword = function(){
     return `${this.password}abc`

}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`

}

const John = new user("John", "john@gmail.com", "568765")
console.log(John.encryptPassword());
console.log(John.changeUsername());