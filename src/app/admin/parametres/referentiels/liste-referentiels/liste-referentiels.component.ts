import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { ReferentielService } from 'src/app/referentiel.service';

@Component({
  selector: 'app-liste-referentiels',
  templateUrl: './liste-referentiels.component.html',
  styleUrls: ['./liste-referentiels.component.css']
})
export class ListeReferentielsComponent implements OnInit {
  formGroup: any = '';
  panelOpenState = false;
  dataSource: any[] = [];
  constructor(private dataService: ReferentielService, private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getReferentiels().subscribe(
      (data: any) => {
        this.dataSource = data['hydra:member'] as ProfilSortie[];
        console.log(this.dataSource);
      },
    );
  }
  }
