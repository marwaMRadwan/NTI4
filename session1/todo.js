/*
tasks =>[task] 
add task ={ id, title, content, status, type }
add task => title required, content >15 char, id=>unique
edit task
show all tasks
edit status
delete task
*/
let taskTypes = ['type 1', 'type 2', 'type 3', 'type 4']
let tasks = []
let task = {
    id:1,
    title:'test',
    content:"test",
    status:false
}
tasks.push(task)
tasks.push(task)
tasks.push(task)
console.log(tasks)