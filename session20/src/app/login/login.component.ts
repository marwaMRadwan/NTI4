import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  handelLogin(login){
    console.log(login.value)
    this._user.login(login.value).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token', `Bearer ${res.data.token}`)
    },()=>{},
    ()=>{
this._router.navigateByUrl("chngimg")
    })

  }
}
