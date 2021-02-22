import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User={
    name:"",
    email:"",
    password:"",
    phone:"",
    age:0,
    addresses:{
        addr_type:"",
        details:""
    },
    user_type:"",
    status:false
  }
  msg:string=""
   constructor() { }
  
  
  ngOnInit(): void {
  }
  handelRegister(obj){
    console.log(obj)

  }
  
}
