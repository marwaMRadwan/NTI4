import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonUrl = 'http://localhost:3000'
  public token =null
  constructor(private _http:HttpClient) { }

  registerUser(userData: User):Observable<any>{
    return this._http.post(`${this.commonUrl}/user`, userData)
  }
  loginUser(email:string, password:string):Observable<any>{
    const data={email, password}
    return this._http.post(`${this.commonUrl}/user/login`, data)
  }
  logOutUser():Observable<any>{
    return this._http.post(`${this.commonUrl}/logout`, null)
  }
  logOutAllUser():Observable<any>{
    return this._http.post(`${this.commonUrl}/logoutAll`, null)
  }
  profile():Observable<any>{
    return this._http.get(`${this.commonUrl}/user/me`)
  }
}
