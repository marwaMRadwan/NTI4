import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  flag :any = null
  registerForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl(''),
    phone:new FormControl(''),
    age:new FormControl(''),
    addresses:new FormGroup({
      addr_type:new FormControl(''),
      details:new FormControl(''),
    }),
    user_type:new FormControl('')
  })
  userData: User
  constructor( private _user:UserService) { }

  ngOnInit(): void {
  }
  get name(){ return this.registerForm.get('name') }
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get phone(){return this.registerForm.get('phone')}
  get age(){return this.registerForm.get('age')}
  get addr_type(){return this.registerForm.get('address').get('addr_type')}
  get details(){return this.registerForm.get('address').get('details')}
  get user_type(){return this.registerForm.get('user_type')}
  handelRegister(){
    if(this.registerForm.valid){
      this.userData = this.registerForm.value
      this._user.registerUser(this.userData).subscribe(
        res=>{ this.flag = true},
        err=>{this.flag= false},
        ()=>{console.log(3)}   
      )
  }
}
}
