// console.log(process.argv)
// console.log(parseInt(process.argv[2])+parseFloat(process.argv[3]))
const yargs = require('yargs')
yargs.command({
    command:'add',
builder:{
    x:{
        describe:'x value',
        type:'number',
        demandOption:true
    },
    y:{
        demandOption:true,
        type:'number'
    }
},
    handler(argv){
console.log(argv.x+argv.y)
    }
})
yargs.parse()

/*
add --x --y
x required number
y required number
*/