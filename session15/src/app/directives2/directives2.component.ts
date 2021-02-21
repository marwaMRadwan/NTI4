import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives2',
  templateUrl: './directives2.component.html',
  styleUrls: ['./directives2.component.css']
})
export class Directives2Component implements OnInit {
  month:number
  today = Date.now();
power = 5
factor = 1
  data = {
    name:'marwa',
    age:36
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
