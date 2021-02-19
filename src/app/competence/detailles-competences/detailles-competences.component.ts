import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CompetencesService } from 'src/app/competences.service';

@Component({
  selector: 'app-detailles-competences',
  templateUrl: './detailles-competences.component.html',
  styleUrls: ['./detailles-competences.component.css']
})
export class DetaillesCompetencesComponent implements OnInit {

  currentuser: any;
  OneCOmpetence: any;
  niveaux: any;
  niveauEvaluation1: any;
  niveauEvaluation2: any;
  niveauEvaluation3: any;
  constructor(private competencesService: CompetencesService, private routeActive: ActivatedRoute) { }
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
  ngOnInit(): void {
    this.currentuser = this.routeActive.snapshot.params['id'];
    this.competencesService.getCompetenceById(+this.currentuser)
    .subscribe((data: any) => {
      this.OneCOmpetence = data;
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.currentuser = +param['id'];
                    this.competencesService.getCompetenceById(+this.currentuser)
                    .subscribe((data: any) => {
                      this.OneCOmpetence = data;
                      this.niveaux = this.OneCOmpetence.niveau;
                      if (this.niveaux.length === 3)
                      {
                        this.niveauEvaluation1 = this.niveaux[0];
                        this.niveauEvaluation2 = this.niveaux[1];
                        this.niveauEvaluation3 = this.niveaux[2];
                      }
                    });
                  });

  }

}
