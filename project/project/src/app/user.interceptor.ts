import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(private _user:UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('hi')
    console.log(this._user.token)
    if(this._user.token!=null){
    const token = "Bearer " + this._user.token
    request = request.clone({
      headers:request.headers.set('Authorization', token)
    })
  }
    return next.handle(request);
  }
}
