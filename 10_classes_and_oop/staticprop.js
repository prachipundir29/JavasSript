

class User {
    constructor(username){
       this.username = username
    }

    logMe(){
        console.log(`Username:- ${this.username}`);
        
    }

   static createId(){
        return console.log(`1234`);
        
    }
}

const Ramesh = new User ("Ramesh")
Ramesh.logMe()
// Ramesh.createId()

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const novel = new Teacher("novel", "novel@gmail.com")
    novel.logMe()
    novel.createId()