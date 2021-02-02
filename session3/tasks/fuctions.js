const loadSavedTasks = () =>{
    return JSON.parse(localStorage.getItem('tasks'))||[]
}
const saveTasks = (tasks) =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTasks = (task) =>{
    let tasks = loadSavedTasks()
    tasks.push(task) 
    saveTasks(tasks)
}
