import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayService } from '../play.service';
// import {ChildComponent} from 'src/app/child/child.component'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
// @ViewChild(ChildComponent,{static: true}) child:ChildComponent
clicks= 3 
constructor(private _play:PlayService) { }

  ngOnInit(): void {
    // console.log(this.child.c)
    this._play.y().subscribe(res=>{
      console.log(res)
    },
    (err)=>{console.log('fee error', err)},
    ()=>{console.log('done')}
    )
  }
  countadd(count:number){
    this.clicks = count
    console.log(this.clicks)
  }

}
