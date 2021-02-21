import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  registerUser(userData:User):Observable<any>{
    return this._http.post('http://localhost:3000/user', userData)
  }
}
