const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myLanguage = [
    {
      languageName : "JvavaScript",
      languageFileName : "js"
    },
       {
      languageName : "Java",
      languageFileName : "java"
    },
       {
      languageName : "python",
      languageFileName : "py"
    },
]

myLanguage.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
    
})

