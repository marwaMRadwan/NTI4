import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
id
  constructor(_activatedRoute: ActivatedRoute) { 
//this.id=_activatedRoute.snapshot.paramMap.get('id')
_activatedRoute.paramMap.subscribe(params=>{
  this.id= params
})
  }

  ngOnInit(): void {
  }

}
