import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { ProfilSortieService } from 'src/app/profil-sortie.service';

@Component({
  selector: 'app-update-profil-sortie',
  templateUrl: './update-profil-sortie.component.html',
  styleUrls: ['./update-profil-sortie.component.css']
})
export class UpdateProfilSortieComponent implements OnInit {

  constructor(private  http: HttpClient, private profilSortieService: ProfilSortieService, private routeActive: ActivatedRoute) { }
  formGroup: any = {};
  currentuser: any;
  profilSortieModel: ProfilSortie[] = [];
  profilSortieData: any ;
  ngOnInit(): void {
    this.currentuser = this.routeActive.snapshot.params['id'];
    this.profilSortieService.getProfilsSortieById(+this.currentuser)
    .subscribe((data: ProfilSortie[]) => {
      this.profilSortieData = data;
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.currentuser = +param['id'];
                    this.profilSortieService.getProfilsSortieById(+this.currentuser)
                    .subscribe((data: ProfilSortie[]) => {
                      this.profilSortieData = data;
                    });
                    console.log(this.profilSortieData);
                  });
  }

}
