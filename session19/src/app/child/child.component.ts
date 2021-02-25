import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  c = 5
  @Input() count:number
  @Output() changeCount: EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
increment(){
  this.count++
  this.changeCount.emit(this.count)
}
}
