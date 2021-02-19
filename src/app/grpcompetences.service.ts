import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { ProfilSortie } from './modeles/profil-sortie';

@Injectable({
  providedIn: 'root'
})
export class GrpcompetencesService {
  id: any;
  constructor(private http: HttpClient , public authService: AuthentificationService) { }
  getgrpsCompetences(): Observable<ProfilSortie[]> {
    return this.http.get<ProfilSortie[]>('api/admin/grpecompetences');
  }
  getgrpsCompetenceById(id: number): Observable<any> {
    return this.http.get<ProfilSortie[]>(`${'api/admin/grpecompetences/'}${id}`);
  }
 
  archivegrpsCompetence(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/grpecompetences/'}${id}`);
  }
 
}
