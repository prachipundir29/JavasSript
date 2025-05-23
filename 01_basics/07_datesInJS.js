// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// const myCreateDate = new Date(2025, 0, 12)
// console.log(myCreateDate.toDateString());


// const myCreateDate = new Date(2025, 0, 12, 8, 9)
// console.log(myCreateDate.toLocaleString());


// const myCreateDate = new Date("2025-04-15")  =>yy-mm-dd
// console.log(myCreateDate.toLocaleString());


const myCreateDate = new Date("01-12-2025")   //=>mm-dd-yy
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
