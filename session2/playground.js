arr = [
    {id:5, name:'a'},
    {id:9, name:'b'},
    {id:7, name:'c'},
    {id:11, name:'d'},
    {id:3, name:'e'},
]

// arr.forEach((element, i) => {
//     console.log(element, ` => ${i}`)
// });

x = arr.findIndex( (a) =>{
    return a.id == 7
})
console.log(x)
