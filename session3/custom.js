// counter = 0
// increment= function() => counter++
// decrement= function() => counter--
// getCounter= function() => return counter
//clousers
// const myCounter = (c) =>{
//     return {
//         increment() { c++ },
//         decrement() { c-- },
//         getValue() {  console.log(c)}
//     }
// }

// const x = myCounter(15)
// x.increment()
// x.increment()
// x.increment()
// x.increment()
// x.increment()
// x.increment()
// x.decrement()
// x.decrement()
// x.getValue()

//a=> start, b=> added value
// // fuction myAdder(start){console.log(start)}
// const myAdder =(start)=>{
//     console.log(start)
//     return{
//            start,
//         addVal(b) {start+=b},
//         getResult(){ console.log(`start = ${start}`)}
//     }
// }
// s = myAdder(5) // {start = 5, addVal:function, get:function}
// console.log(s.start)
// console.log(s)
// s.addVal(3) // ={start = 8, addVal:function, get:function}
// s.addVal(5)
//s=myAdder(3)
// s.addVal(10)
// s.getResult()

//callback
// setTimeout(()=>{
//     console.log('hello')
// }, 1500)
// console.log('after timeout')
// callback (error , data ) =>
// const myCallBack = (num, cb) =>{
//     setTimeout(()=>{
//         if(typeof num == 'number'){
//             cb( num, undefined)
//         }
//         else{
//             cb(undefined,'Error data must be number')
//         }
//     }, 2000)
// }

// myCallBack('5', ( data, error)=>{
//     if(error) console.log(error)
//     else console.log(data)
// })
//prommises
// const myPromise=(num)=> {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             typeof num == 'number'?
//                 resolve(num)
//                 :
//                 reject('error not a number')
//         },3000)
//      })
// }
    
// myPromise(5)
// .then(
//     (response) => {
//     return response+3
//     }
// )
// .then(
//     (data) => {
//     console.log('2nd then')
//     console.log(data)
// })
// .catch((e)=>{
// console.log(e)
// })


// console.log('1')



//async-await
const myPromise=(num)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            typeof num == 'number'?
                resolve(num)
                :
                reject('error not a number')
        },3000)
     })
}

const myCall = async () =>{
    try{
    x = await myPromise(5)
    y = x+17
    console.log(y)
}
catch(e){
    console.log('ana fe catch ',e)
}
}

myCall()










