import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogged: boolean
  private name:string
  constructor() { 
    this.isLogged=false
  }
  login(email, password):Observable<any>{
    this.isLogged=true
    this.name=email + password
    return of(this.isLogged)
  }
  logout():void{
    this.isLogged=false
  }
  isAdmin():boolean{
    if(this.name.includes('admin')) return true
    else return false
  }
  isLoggedTest(){
    return this.isLogged
  }
}
