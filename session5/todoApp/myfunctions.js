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
const addNewTask =(task)=>{
    data = loadData()
    data.push(task)
    fs.writeFileSync('todo.json', JSON.stringify(data))
}
module.exports={
    loadData,
    addNewTask
}