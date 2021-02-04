const yargs = require('yargs')
const myMethods = require('./myfunctions')
yargs.command({
    command:'addTask',
    aliases:['a'],
    builder:{
        id:{
            type:'number',
            demandOption:true
        },
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
            id:argv.id,//Date.now(),
            title: argv.title,
            content: argv.content
        }
        myMethods.addNewTask(task)
    }
})
yargs.command({
    command:'delTask',
    builder:{
        id:{type:'number', demandOption:true}
    },
    handler(argv){
        myMethods.delTask(argv.id)
    }
})
yargs.command({
    command:'editTask',
    builder:{
        id:{type:'number', demandOption:true},
        title:{type:'string'},
        content:{type:'string'}
    },
    handler(argv){
        task={
            title:argv.title,
            content:argv.content
        }
        myMethods.editTask(argv.id,task)
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
    builder:{
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        result = myMethods.searchTaskByTitle(argv.title)
        console.log(result)
    }
})
yargs.parse()