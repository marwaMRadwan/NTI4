let taskTypes = ['type 1', 'type 2', 'type 3', 'type 4']
let tasks = JSON.parse(localStorage.getItem('tasks')) || []
const validateData = function(item, validationObj){
    let errors = []
    options = Object.keys(validationObj)
    options.forEach(option => {
        if(option == 'required'){
            if(!item || item == '') errors.push('required')
        }
        else if(option == 'unique'){
            tasks.forEach(task=>{
                if((task[validationObj[option]])==item)
                     errors.push('unique')
             })
        }
        else if(option =='minlength'){
            value = validationObj[option]
            if(item.length<value) errors.push(`minimum length must be more than ${value}`)
        }
        else if(option == 'maxlength'){
            value = validationObj[option]
            if(item.length>value) errors.push(`maximum length must be less than ${value}`)

        }
    });
       return errors 
}
const addNewTask = function(id, title, content, type, status=false){
    const task={ id, title, content, type,status }
    myValidators = {
      id: validateData(id,{required:true}),
      title :validateData(title,{required:true, minlength:5, maxlength:20 }),
      content:validateData(content,{required:true, minlength:15 }),
      type:validateData(type,{required:true})
    }
    myValidatorsKeys = Object.keys(myValidators)
    validationErrFlag = false
    myValidatorsKeys.forEach(key=>{
        if(myValidators[key].length>0)validationErrFlag=true
    })
    if(validationErrFlag){
        console.log(myValidators)
    }
    else{
        tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
}
const showAllTask = function(){
    console.log(tasks)
}
const getbyId = function (id) {
    return tasks.findIndex(task => task.id == id);
}
const getByTitle= function(title) {
    x = tasks.filter(task=>{
        return task.title==title
    })
    return x
}
const showTask = function(id){
    console.log(tasks[getbyId(id)])
}
const editTask = function(searckKey, title, content, type, status){
    index = getbyId(searckKey)
    tasks[index] = { id:tasks[index].id, title:title, content, type, status}
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
const search = function(searchKey, type){
    let tasks = tasks.filter(task=>{
        return task[type]==searchKey
    })
    return tasks
}
const deleteTask = function(seachkey, type){
    tasks = tasks.filter(task=>{
        return task[type]!=seachkey
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
// addNewTask(Date.now(),'mona','anbvcgjuiytrfghb','c')
// editTask(1612097140706, 'mohammed', 'mohammed edit', 't2', true)
showAllTask()
deleteTask('ahmed', 'title')
showAllTask()
//console.log(getByTitle('ahmed'))


