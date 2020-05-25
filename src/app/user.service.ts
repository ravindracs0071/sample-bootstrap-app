import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(userName: string, password: string) {
       //httpcall
       localStorage.setItem('currentUser', JSON.stringify({user: userName, password: password}))
       return true;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
