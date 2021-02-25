import { Component, OnInit, ViewChild } from '@angular/core';
// import {ChildComponent} from 'src/app/child/child.component'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
// @ViewChild(ChildComponent,{static: true}) child:ChildComponent
clicks= 3 
constructor() { }

  ngOnInit(): void {
    // console.log(this.child.c)
  }
  countadd(count:number){
    this.clicks = count
    console.log(this.clicks)
  }

}
