const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//      return acc + currVal
// }, 0)
// console.log(myTotal);


// With arrow function

const myTotal = myNums.reduce((acc, currVal) => acc+currVal, 0 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999,
    
    },
       {
        itemName: "py course",
        price: 999,
    
    },   {
        itemName: " Mobile dev course",
        price: 7999,
    
    },   {
        itemName: "data science course",
        price: 12999
    
    },
]

 const priceSum = shoppingCart.reduce((acc, item) =>  acc + item.price, 0 )

  console.log(priceSum);
  


