import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-allpro',
  templateUrl: './allpro.component.html',
  styleUrls: ['./allpro.component.css']
})
export class AllproComponent implements OnInit {
  allData:any[]
  constructor(private _play:PlayService) { }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
    this._play.getAllPosts().subscribe(res=>{
      this.allData=res
    })
  }
}
