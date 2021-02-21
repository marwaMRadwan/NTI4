import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
handelRegister(obj){
 console.log('hello')
  console.log(obj.value)
}
}
