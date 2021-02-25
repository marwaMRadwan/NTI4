import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(20)])
  })
err=""
  constructor(private _user:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  handelLogin(){
    console.log(this.loginForm.value)
    this._user.login(this.loginForm.value).subscribe(res=>{
      console.log(res)
      this.data=res
      localStorage.setItem('token', res.data.token)
    },
    ()=>{
      this.err = "invalid data"
    },
    ()=>{
      this.router.navigate([''])
    })
  }
}
