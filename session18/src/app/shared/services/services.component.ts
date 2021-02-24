import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services = [
    {icon:"affiliatetheme", title:"service 1", content:"content 1"},
    {icon:"affiliatetheme", title:"service 2", content:"content 2"},
    {icon:"affiliatetheme", title:"service 3", content:"content 3"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
