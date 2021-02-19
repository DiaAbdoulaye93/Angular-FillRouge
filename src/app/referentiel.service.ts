import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { ProfilSortie } from './modeles/profil-sortie';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  constructor(private http: HttpClient , public authService: AuthentificationService) { }
  getReferentiels(): Observable<any> {
    return this.http.get<any>('api/admin/Referentiels');
  }
  getReferentielById(id: number): Observable<any> {
    return this.http.get<ProfilSortie[]>(`${'api/admin/referentiels/'}${id}`);
  }
  archiveReferentiel(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/referentiels/'}${id}`);
  }
}
