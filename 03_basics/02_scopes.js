
// NESTED SCOPE
function one() {
    const username = "prachi"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "prachi"
    if (username === "prachi") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// Note: if we try to print any value outside of scope {} then it will create an error i.e. we cant print any value of its scope 

// +++++++++++++++++++++++ intersting ++++++++++++++++

console.log(addone(8))
function addone(num) {
    return num + 1

}

// console.log(addTwo(8));
const addTwo = function (num) {
    return num + 2
}

