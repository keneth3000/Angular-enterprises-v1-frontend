import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from './interface/User.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = "http://localhost:3000/control/login";

  constructor(private http: HttpClient, private router: Router) { }

  singIn(user: IUser) {
    return this.http.post(this.URL, user);
  }

  loggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }

  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }
}
