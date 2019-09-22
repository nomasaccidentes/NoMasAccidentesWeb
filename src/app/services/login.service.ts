import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from "../login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(login: Login) {
    return this.http.post<any>('http://localhost:63382/api/usuario/GetUserLogin', login);     
  }
}