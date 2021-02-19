import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReferentielService } from 'src/app/referentiel.service';

@Component({
  selector: 'app-detaille-referentiels',
  templateUrl: './detaille-referentiels.component.html',
  styleUrls: ['./detaille-referentiels.component.css']
})
export class DetailleReferentielsComponent implements OnInit {

  constructor(private refServices: ReferentielService, private routeActive: ActivatedRoute) { }
oneReferentiel: any = '';
currentRef: any = '';
panelOpenState = false;
referentielForm: any;
  ngOnInit(): void {
    this.currentRef = this.routeActive.snapshot.params['id'];
    this.refServices.getReferentielById(+this.currentRef)
    .subscribe((data: any) => {
      this.oneReferentiel = data;
      console.log(this.oneReferentiel);
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.currentRef = +param['id'];
                    this.refServices.getReferentielById(+this.currentRef)
                    .subscribe((data: any) => {
                      this.oneReferentiel = data;
                      console.log(this.oneReferentiel);
                    });
                  });

  }

  }