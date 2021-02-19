import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CriteresAdmissionService {

  constructor(private http: HttpClient , public authService: AuthentificationService) { }
  getCrit_admission(): Observable<any> {
    return this.http.get<any>('api/admin/critere_admissions');
  }

  }
