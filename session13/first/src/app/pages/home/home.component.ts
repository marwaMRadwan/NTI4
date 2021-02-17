import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string = "marwa radwan"
  yOfBirth:number=1985
  className = 'c1'
  id=5
  user={name:'mazen', age:39}
  d="<h1>hello</h1>"
  status : boolean= true
  constructor() { }

  ngOnInit(): void {
  }
  getAge(){
    return 2021-this.yOfBirth
  }
  getErrorState(){
    return this.status;
  }
  changeState(){this.status=!this.status}
}




