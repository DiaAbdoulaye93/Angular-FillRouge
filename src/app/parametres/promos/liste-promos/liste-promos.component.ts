import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { PromosService } from 'src/app/promos.service';

@Component({
  selector: 'app-liste-promos',
  templateUrl: './liste-promos.component.html',
  styleUrls: ['./liste-promos.component.css']
})
export class ListePromosComponent implements OnInit {

  constructor(private dataService: PromosService, private routeActive: ActivatedRoute) { }
  dataSource: any;
  formGroup: any = '';
  panelOpenState = false;
  ngOnInit(): void {
    this.dataService.getPromos().subscribe(
      (data: any) => {
        this.dataSource = data['hydra:member'] as ProfilSortie[];
        console.log(this.dataSource);
      },
    );
  }

}
