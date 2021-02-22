import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-example',
  templateUrl: './reactive-example.component.html',
  styleUrls: ['./reactive-example.component.css']
})
export class ReactiveExampleComponent implements OnInit {

  myForm = new FormGroup({
    fname: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    lname:new FormControl(),
    email:new FormControl(),
    address:new FormGroup({
      type:new FormControl(),
      details:new FormControl()
    })
  })
  constructor() { }

  ngOnInit(): void {
  }
  get fname(){
    return this.myForm.get('fname')
  }
  handelForm(){
    console.log(this.myForm.value)
  }

}
