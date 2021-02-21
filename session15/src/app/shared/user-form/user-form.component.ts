import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/interfaces/user'
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
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
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
handelRegister(obj){
  console.log(obj)
console.log(this.user)
this._user.registerUser(this.user).subscribe(res=>{
if(res.apiStatus) {
  this.msg="registered"
  this.user={
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
}
})
}
}
