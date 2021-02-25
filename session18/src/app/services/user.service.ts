import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http:HttpClient) { }
  login(userInfo):Observable<any>{
    return this._http.post('http://localhost:3000/user/login',userInfo)
  }
  test():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }
}
