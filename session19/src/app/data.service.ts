import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myData : any[]  = []
  constructor() { 
    this.myData = [
      {id:1, name:'d1'},
      {id:2, name:'d2'},
      {id:3, name:'d3'},
      {id:4, name:'d4'},
      {id:5, name:'d5'},
      {id:6, name:'d6'}
    ]
  }
  getData():Observable<any>{
    return of(this.myData)
  }
  getSingleData(id):Observable<any>{
    return of(this.myData[id-1])
  }
}
