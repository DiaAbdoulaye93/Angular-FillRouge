import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { Competences } from './modeles/Competences';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
   id: any;
  constructor(private http: HttpClient , public authService: AuthentificationService) { }
  getCompetences(): Observable<Competences[]> {
    return this.http.get<Competences[]>('api/admin/competences');
  }
  getCompetenceById(id: number): Observable<Competences[]> {
    return this.http.get<Competences[]>(`${'api/admin/competences/'}${id}`);
  }
  update(competence: any) {
    return this.http.put(`api/admin/competences/${this.id}`, competence);
  }
  archiveUser(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/competences/'}${id}`);
  }
}
