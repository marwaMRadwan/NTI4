import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {
  allData : any[] = []
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getMyData()
  }

  getMyData(){
    this._data.getData().subscribe(res=>{
      console.log(res)
      this.allData = res
    })
  }
}
