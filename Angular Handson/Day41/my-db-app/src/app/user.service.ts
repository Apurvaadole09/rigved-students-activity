import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = "http://localhost:3001/users";
  constructor(private _http : HttpClient) { }

  public getUsers() : Observable<any> {
    return this._http.get(this.baseUrl);
  }

  public storeUser(formValue: any) : Observable<any> {
   return this._http.post(this.baseUrl , formValue);
  }
}
