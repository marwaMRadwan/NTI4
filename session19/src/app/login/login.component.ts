import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidMsg:string
  email:string
  password:string
  retUrl:string=""
  constructor(private _auth:AuthService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }
  handelLogin(data){
  this._auth.login(data.value.email,data.value.password).subscribe(
    res=>{
      this.router.navigate(["test"])
    }
  )    
  }
}
