addbtn = document.querySelector('#addbBtn')
addbtn.addEventListener('click', function(e){
    document.querySelector('#addCustomer').classList.toggle('d-none');
    this.textContent == 'Add Customer' ? this.textContent="Hide add form" : this.textContent='Add Customer';
})
