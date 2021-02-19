import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PromosService } from 'src/app/promos.service';

@Component({
  selector: 'app-detailles-promos',
  templateUrl: './detailles-promos.component.html',
  styleUrls: ['./detailles-promos.component.css']
})
export class DetaillesPromosComponent implements OnInit {
  currentuser: any;
  OnePromo: any;
  apprenants: any;
  nbrApprenants: any;
  constructor(private promoService: PromosService, private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentuser = this.routeActive.snapshot.params['id'];
    this.promoService.getPromoById(+this.currentuser)
    .subscribe((data: any) => {
      this.OnePromo = data;
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.currentuser = +param['id'];
                    this.promoService.getPromoById(+this.currentuser)
                    .subscribe((data: any) => {
                      this.OnePromo = data;
                      console.log(this.OnePromo);
                      this.apprenants = this.OnePromo.apprenants;
                      this.nbrApprenants = this.OnePromo.apprenants.length;
                    });
                  });

  }
  }
