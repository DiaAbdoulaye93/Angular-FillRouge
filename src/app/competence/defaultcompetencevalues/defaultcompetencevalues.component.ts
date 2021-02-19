import { Component, OnInit } from '@angular/core';
import { CompetencesService } from 'src/app/competences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';

@Component({
  selector: 'app-defaultcompetencevalues',
  templateUrl: './defaultcompetencevalues.component.html',
  styleUrls: ['./defaultcompetencevalues.component.css']
})
export class DefaultcompetencevaluesComponent implements OnInit {
  currentuser: any;
  OneCOmpetence: any;
  niveaux: any;
  niveauEvaluation1: any;
  niveauEvaluation2: any;
  niveauEvaluation3: any;
  competence: any;
  niveau1 = true ;
  niveau2 = false;
  niveau3 = false ;
  n1 = true;
  n2 = false;
  n3 = false;
  Niveau1(): any {
    this.niveau1 = true ;
    this.niveau2 = false;
    this.niveau3 = false ;
    this.n1 = true;
    this.n2 = false;
    this.n3 = false;
   }
  Niveau2(): any {
    this.niveau1 = false ;
    this.niveau2 = true;
    this.niveau3 = false ;
    this.n1 = false;
    this.n2 = true;
    this.n3 = false;
  }
  Niveau3(): any {
    this.niveau1 = false ;
    this.niveau2 = false;
    this.niveau3 = true ;
    this.n1 = false;
    this.n2 = false;
    this.n3 = true;

  }
  constructor(private dataService: CompetencesService) { }

  ngOnInit(): void {
    this.dataService.getCompetences().subscribe(
    (data: any) => {
      this.competence = data['hydra:member'] as ProfilSortie[];
      console.log('teste');
      console.log(this.competence);
      console.log('teste1');
      console.log(this.competence[6]);
      this.niveaux = this.competence[6].niveau;
      if (this.niveaux.length === 3)
          {
            this.niveauEvaluation1 = this.niveaux[0];
            this.niveauEvaluation2 = this.niveaux[1];
            this.niveauEvaluation3 = this.niveaux[2];
          }
    });
  }

}
