// console.log(process.argv)
// console.log(parseInt(process.argv[2])+parseFloat(process.argv[3]))
// const yargs = require('yargs')
// yargs.command({
//     command:'add',
// builder:{
//     x:{
//         describe:'x value',
//         type:'number',
//         demandOption:true
//     },
//     y:{
//         demandOption:true,
//         type:'number'
//     }
// },
//     handler(argv){
// console.log(argv.x+argv.y)
//     }
// })
//  yargs.parse()
/*
add --x --y
x required number
y required number
*/

// const request = require('request')
// request({url, json:true}, (err, res, body)=>{
//     console.log(body)
// })

const https = require('https')
const url = "https://jsonplaceholder.typicode.com/posts"

const req = https.request(url, (response)=>{
    let data = ''
    response.on('data',(chunk)=>{
        data+=chunk.toString()
    })
    response.on('end',()=>{
        const resData = JSON.parse(data)
        console.log(resData)
    })
})
req.on('error',(error)=>{
    console.log(error)
})
req.end()














