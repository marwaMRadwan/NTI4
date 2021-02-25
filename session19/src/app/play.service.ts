import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor() { }

  x():Observable<any>{
    let obs = new Observable((observer)=>{
      setTimeout(()=>{observer.next('1')},1000)
      setTimeout(()=>{observer.next('2')},2000)
      setTimeout(()=>{observer.next('3')},3000)
      setTimeout(()=>{observer.error('obs error')},4000)
      setTimeout(()=>{observer.next('5')},5000)
      setTimeout(()=>{observer.next('6')},6000)
    })
    return obs;
  }
y():Observable<any>{
  // return Observable.create(observer=>{
  //   observer.next(1)
  //   observer.next(2)
  //   observer.complete()

  // })
  let x = of([1,2,3])
  return x
}

//of([2,3,4])


}
