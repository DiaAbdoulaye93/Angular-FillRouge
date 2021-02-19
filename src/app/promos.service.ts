import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';
@Injectable({
  providedIn: 'root'
})
export class PromosService {

  constructor(private http: HttpClient , public authService: AuthentificationService) { }
  getPromos(): Observable<any> {
    return this.http.get<any>('api/admin/promo');
  }
  getPromoById(id: number): Observable<any> {
    return this.http.get<any>(`${'api/admin/promo/'}${id}`);
  }
  archivePromo(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/promo/'}${id}`);
  }
  getLangueus(): Observable<any> {
    return this.http.get<any>('api/admin/langue');
  }
  getFabrique(): Observable<any> {
    return this.http.get<any>('api/admin/fabrique');
  }
}
