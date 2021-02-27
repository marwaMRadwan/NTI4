import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayService } from './play.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(public _play:PlayService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._play.isLogged=true
    return next.handle(request);
  }
}
