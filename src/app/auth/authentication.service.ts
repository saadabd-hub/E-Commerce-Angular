import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { LoginContext } from '../interface/login.interface';
import { User } from '../interface/user.interface';
import { stringify } from '@angular/compiler/src/util';

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private route: Router) {}

  signup(user: User) {
    return this.http.put(`${environment.serverUrl}users/signup`, user).subscribe((res: any) => {
      swal.fire('Register sukses!!');
      this.route.navigate(['']);
    });
  }

  login(context: LoginContext) {
    return this.http.post<any>(`${environment.serverUrl}auth/login`, context).subscribe(
      (success) => {
        localStorage.setItem('Authorization', success.token);
        localStorage.setItem('Payload', success.payload.userId);
        this.route.navigate(['']);
      },
      (error) => {
        swal.fire('Gagal login', error.error.message, 'error');
      }
    );
  }

  logout() {
    let hapusToken = localStorage.removeItem('Authorization');
    let hapusPayload = localStorage.removeItem('Payload');
    if (hapusToken === null && hapusPayload === null) {
      this.route.navigate(['']);
    }
  }

  get isLogin(): boolean {
    const checkToken = localStorage.getItem('Authorization');
    return checkToken !== null ? true : false;
  }
}
