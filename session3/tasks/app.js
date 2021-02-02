addForm = document.querySelector('#addTaskForm')
allTasks = document.querySelector('#allTasks')
addForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    task = {
        taskID: Date.now(),
        taskTitle:e.target.elements.taskTitle.value,
        taskContent:e.target.elements.taskContent.value,
        taskType:e.target.elements.taskType.value,
        status:true
    }
    addTasks(task)
})
createNewElement = (elementName,parent,status=false,txt='', classes='') =>{
    element = document.createElement(elementName)
    if(classes!='') element.className = classes
    else element.className = status? "bg-primary col-3":"bg-danger col-3";
    if(txt!='')element.textContent = txt
    parent.appendChild(element)
    
    return element
}

 showAllTasks = ()=>{
    let tasks = loadSavedTasks()
    tasks.forEach((element,i) => {
    div = createNewElement('div',allTasks,element.status )
    h3 = createNewElement('h3', div, element.status, element.taskID)        
    h2 = createNewElement('h2', div, element.status, element.taskTitle)        
    p = createNewElement('p', div, element.status, element.taskContent)        
    btnDel = createNewElement('button', div, element.status, 'edit','btn btn-warning')
    btnDel.addEventListener('click', (e)=>{
        tasks[i].status= !element.status
        saveTasks(tasks)
        allTasks.textContent=''
        showAllTasks()
    })
    });

       
}

showAllTasks()