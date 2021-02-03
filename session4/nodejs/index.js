// console.log('hello')

// const fs = require('fs')
// fs.appendFileSync('x.txt','marwa')

// const myFunModule = require('./myMosule')
// myFunModule.myFun()

// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));

// const validator = require('validator')
// console.log(validator.isEmail('marwa@marwa.com'))
fs = require('fs')
try{
    tasks = JSON.parse(fs.readFileSync('data.json').toString())
}
catch(e){
    tasks=[]
    fs.writeFileSync('data.json','[]')
}
const task = { title: 't1', content: 'c1'}
tasks.push(task)
fs.writeFileSync('data.json', JSON.stringify(tasks))