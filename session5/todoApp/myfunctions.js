const fs = require('fs')
const loadData = () => {
    try{
        data = JSON.parse(fs.readFileSync('todo.json').toString())
        if(!data.length) throw new Error() //Array.isArray(data)
    }
    catch(e){
        data = []
    }
    return data
}
const saveTasks = (tasks)=>{
    fs.writeFileSync('todo.json', JSON.stringify(tasks))
}
const addNewTask =(task)=>{
    data = loadData()
    data.push(task)
    saveTasks(data)
}
module.exports={
    loadData,
    addNewTask
}