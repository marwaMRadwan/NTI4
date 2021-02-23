import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  id:string
  data:any
  constructor(private _activatedRoute: ActivatedRoute, private _play:PlayService){ 
  }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.paramMap.get('id')
    this.getSingledata(this.id)
  }

  getSingledata(id){
    this._play.getSinglePost(id).subscribe(res=>{
      this.data= res
    })
  }
}
