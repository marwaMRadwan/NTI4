customers = getCustomers()
addbtn = document.querySelector('#addbBtn')
showAllBtn = document.querySelector('#showAllBtn')
function getCustomers(){
    return(JSON.parse(localStorage.getItem('customers')) || [])
}
const saveCustomers = function(){
    localStorage.setItem('customers', JSON.stringify(customers))
}
const showAllCustomers = function(){
    customers = getCustomers()
    tableBody = document.querySelector('tbody')
    tableBody.innerText=''
    customers.forEach(customer=>{
        console.log(customer)
        let tr = document.createElement('tr')
        td = document.createElement('td')
        td.textContent = customer.accNum
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = customer.cName
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = customer.balance
        tr.appendChild(td)
        tableBody.appendChild(tr)
    })
    console.log(customers)
}
const addCustomer = function(customer){
    customers.push(customer)
    saveCustomers()
}
const showHide = function(btnName,sectionId,txt1, txt2) {
    document.querySelectorAll('section').forEach((section, index)=>{
        if(index!=0) section.classList.add('d-none')
    })
    if(btnName.innerText == txt1 ){
        btnName.textContent=txt2
        document.querySelector(`#${sectionId}`).classList.remove('d-none');
    }else{
        btnName.textContent=txt1
    }
    
}
addbtn.addEventListener('click', function(){
    showHide(addbtn, 'addCustomer', 'Add Customer','Hide Customer')
})
showAllBtn.addEventListener('click',function(e){
    showHide(showAllBtn, 'allCustomers', 'show All Customer','Hide customers')
    showAllCustomers();
})
document.querySelector('#addForm').addEventListener('submit',function(e){
    e.preventDefault()
    const ele = this.elements
    let user = {
        accNum : Date.now(),
        cName: ele.cName.value,
        balance: ele.balance.value
    }
    addCustomer(user)
    this.reset()
    showHide()
})
