import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email:new  FormControl('',[Validators.email, Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private _user:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
handelLogin(){
if(this.loginForm.valid){
  console.log(this.loginForm.value)
this._user.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(
  res=>{
    console.log(res)
    this._user.token=res.data.token
    sessionStorage.setItem('token',res.data.token)
this.router.navigateByUrl('/profile')
  },
  err=>{console.log('error')}
  )
}
else console.log('error')
}
}
