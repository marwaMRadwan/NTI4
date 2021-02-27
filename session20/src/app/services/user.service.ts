import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http:HttpClient) { }
  commonUrl = 'http://localhost:3000/user/'
  login(data):Observable<any>{
    return this._http.post(`${this.commonUrl}login`,data)
  }
}
