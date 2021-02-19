import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  userToken: any = [];
  userRole: any = '';
  email: any = '' ;
  constructor(private http: HttpClient, private router: Router) { }
public loginUrl = '/api/login_check';
public registerUrl = 'api/admin/user';
public baseUrl = 'http://localhost:8000/api';
// public localStorage  = window.localStorage;

loginUser(user: any): any {
  return this.http.post<any>(this.loginUrl, user);
}

registerUser(user: any): any
{
  return this.http.post<any>(this.registerUrl, user);
}
loggedIn() : any{
  return !! localStorage.getItem('token');
}
// On renvoie le token a l'intercepteur
getToken(): any{
  return localStorage.getItem('token');
 }
// tslint:disable-next-line:typedef

posteToken(credentials: any): any{
  this.loginUser(credentials).subscribe(
    (token: any) => {
      if (token.token !== '')
      {
        localStorage.setItem('token', token.token) ;

      }
    },
    (httpError: any) => console.log(httpError.error.message),
  );
}

  /*
 public  baseUrl = 'http://localhost:8000/api';
 public nameAUth = 'fil_rouge';
 public localStorage  = window.localStorage;
 public tokenGiven = '';
 // tslint:disable-next-line:typedef
 login(credentials: any){
  return this.http.post(`${this.baseUrl}/login_check`, credentials);
}
// tslint:disable-next-line:typedef
  getToken(credentials: any){
    this.login(credentials).subscribe(
      (token: any) => {
        if (token.token !== '')
        {
          localStorage.setItem('token', token.token) ;

        }
      },
      httpError => console.log(httpError.error.message),
    );
 }
 */

  // tslint:disable-next-line:typedef
  decodeToken(){
         return localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token') || '{}') : null;
  }
  getRole(): any{
    this.userToken = this.decodeToken();
    this.userRole = this.userToken.roles[0];
    return this.userRole ;
  }
  getEmail(): any{
    this.userToken = this.decodeToken();
    this.email = this.userToken.username;
    return this.email ;
  }
  logout(): any{
    localStorage.setItem('token', '') ;

    this.router.navigate(['/']);
}
// tslint:disable-next-line:typedef
  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_ADMIN' : {
        this.router.navigate(['admin']);
        break;
      }
      case 'ROLE_Formateur' : {
        this.router.navigate(['formateur']);
        break;
      }
      case 'ROLE_Apprenant' : {
        this.router.navigate(['apprenant']);
        break;
      } case 'ROLE_Cm' : {
        this.router.navigate(['cm']);
        break;
      }
      default: {
        this.router.navigate(['/']);
        break;
      }
    }
  }

}
