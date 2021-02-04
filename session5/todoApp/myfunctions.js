const fs = require('fs')
const loadData = () => {
    let data
    try{
        data = JSON.parse(fs.readFileSync('todo.json').toString())
        if(!data.length) throw new Error()
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
    const data = loadData()
    const duplicated = data.find((t)=> t.id === task.id)
    if(duplicated) return console.log('id used before')
    data.push(task)
    saveTasks(data)
}
const searchTaskByTitle = (title)=>{
    const data = loadData()
    const result = data.filter(t=>{
        return t.title == title
    })
    if(result.length==0) result="not found"
    return result
}
const search = (id) =>{
    const data = loadData()
    const index = data.findIndex(task=>{
        return task.id == id
    })
    return index
}
const delTask =(id)=>{
    const index = search(id)
    if(index==-1) return console.log('not found')
    const data=loadData()
    data.splice(index,1)
    saveTasks(data)
    console.log('deleted')
}
const editTask =(id,task) =>{
    const index = search(id)
    if(index==-1) return console.log('not found')
    const data=loadData()
    //edit logic
    d = Object.keys(task)
    flag = false
    d.forEach(element => {
    try{task[element] = task[element].trim()}
    catch(e){}
     if(task[element]) {   
         data[index][element]= task[element]
         flag = true
        }
    });
    if(flag){
        saveTasks(data)
        console.log('edited')   
    }
    else console.log('no edits')
}
module.exports={
    loadData,
    addNewTask,
    searchTaskByTitle,
    delTask,
    editTask
}