import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { ProfilSortie } from './modeles/profil-sortie';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  constructor(private http: HttpClient , public authService: AuthentificationService) { }
  getProfilsSortie(): Observable<ProfilSortie[]> {
    return this.http.get<ProfilSortie[]>('api/admin/profilsorties');
  }
  getProfilsSortieById(id: number): Observable<ProfilSortie[]> {
    return this.http.get<ProfilSortie[]>(`${'api/admin/profilsortie/'}${id}`);
  }
  archiveUserProfilSortie(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/profilsortie/'}${id}`);
  }
}
