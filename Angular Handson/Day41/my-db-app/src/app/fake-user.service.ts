import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeUserService {

  constructor(private _http : HttpClient) { }

  public getFakeUsers():Observable<any>{
  let url = "https://jsonplaceholder.typicode.com/users";
  return this._http.get(url);
  }
}
