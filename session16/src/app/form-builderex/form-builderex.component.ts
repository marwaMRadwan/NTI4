import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builderex',
  templateUrl: './form-builderex.component.html',
  styleUrls: ['./form-builderex.component.css']
})
export class FormBuilderexComponent implements OnInit {
myForm
  constructor(private fb:FormBuilder) { 
    this.myForm = this.fb.group({
      fname:['', [Validators.required]],
      lname:[''],
      email:[''],
      address: this.fb.group({
        type:[''],
        details:['']
      })
    })
  }

  ngOnInit(): void {
  }

}
