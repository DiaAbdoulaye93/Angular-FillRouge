import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Observable, Subject } from 'rxjs';
import { root } from 'rxjs/internal/util/root';
import { User } from './modeles/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient , public authService: AuthentificationService) {}
  private subject = new Subject<any>();
  user = User;
  id: any;
 getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/admin/users?isdeleted=0');
  }
  getUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${'api/admin/user/'}${id}`);
  }
  archiveUser(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/user/'}${id}`);
  }
  update(user: User) {
    return this.http.put(`api/admin/users/${this.id}`, user);
  }
  
}
