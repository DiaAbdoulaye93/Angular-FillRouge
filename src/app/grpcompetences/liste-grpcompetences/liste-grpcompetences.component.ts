import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrpcompetencesService } from 'src/app/grpcompetences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';

@Component({
  selector: 'app-liste-grpcompetences',
  templateUrl: './liste-grpcompetences.component.html',
  styleUrls: ['./liste-grpcompetences.component.css']
})
export class ListeGrpcompetencesComponent implements OnInit {
  formGroup: any = '';
  competencesButton: any = 'fa fa-sort-down';
  TagButton: any = 'fa fa-sort-down';
  panelOpenState = false;
  dataSource: any[] = [];
  constructor(private dataService: GrpcompetencesService, private routeActive: ActivatedRoute) { }
  click_referentiel(competence: any): any{
    competence.clicked = !competence.clicked;

  }
  
  ngOnInit(): void {
    this.dataService.getgrpsCompetences().subscribe(
      (data: any) => {
        this.dataSource = data['hydra:member'] as ProfilSortie[];
      },
    );
  }

}
