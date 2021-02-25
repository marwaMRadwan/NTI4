import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {
  constructor(private _auth:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this._auth.isLoggedTest()) {
        alert('you cann\'t access this')
        this.router.navigate([''],{queryParams:{retUrl:route.url}})
      return false
      }
      return true;
  }
  
}
