const name = "prachi"
const repoCount = 5

// console.log(name + repoCount + "Value") => old versiom

console.log(`Hello, I am ${name} and my repoCount is ${repoCount} `);

const userName = new String('prachipundir-google-com')
   console.log( userName);
      console.log( userName[8]);
      console.log( userName.__proto__);

    //   console.log(userName.length);
    //   console.log(userName.toUpperCase());
    //   console.log(userName.charAt(9));     
    //   console.log(userName.indexOf('i'));


  const newString = userName.substring(0,6)
  console.log(newString);
  
  const anotherString = userName.slice(-10,4)
  console.log(anotherString);

  const newStringOne = '   prachi     '
  console.log(newStringOne);
  console.log(newStringOne.trim());

  const url = "http://prachi.com/prachi%30pundir"
  console.log(url.replace('%30','-'))
 console.log (url.includes('pundir'))
 console.log (url.includes('thakur'))

 console.log(userName.split('-'));
 
  