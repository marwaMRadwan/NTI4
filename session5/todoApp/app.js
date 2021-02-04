const yargs = require('yargs')
const myMethods = require('./myfunctions')
yargs.command({
    command:'addTask',
    builder:{
        title:{
            type:'string',
            demandOption:true
        },
        content:{
            type:'string',
            demandOption:true
        }
    },
    handler(argv){
        task= {
            title: argv.title,
            content: argv.content
        }
        myMethods.addNewTask(task)
    }
})
yargs.command({
    command:'delTask',
    handler(argv){
        console.log('test del')
    }
})
yargs.command({
    command:'editTask',
    handler(argv){
        console.log('test edit')
    }
})
yargs.command({
    command:'showAllTasks',
    handler(argv){
        const result = myMethods.loadData()
        console.log(result)
    }
})
yargs.command({
    command:'searchTask',
    handler(argv){
        console.log('test search')
    }
})
yargs.parse()