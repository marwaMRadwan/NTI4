import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private _http:HttpClient) { }
  getAllPosts():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getSinglePost(id):Observable<any>{
    return this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
