const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 20);

  const newNums = myNumbers   // Chaining of Methods
  .map((num) => num*15)
  .map((num) => num + 5)
  .filter((num) => num>= 50)
  
console.log(newNums);
