import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { User } from 'src/app/modeles/User';
import { ProfilSortieService } from 'src/app/profil-sortie.service';

@Component({
  selector: 'app-detailles-profile',
  templateUrl: './detailles-profile.component.html',
  styleUrls: ['./detailles-profile.component.css']
})
export class DetaillesProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'telephone'];
  constructor(private  http: HttpClient, private profilSortieService: ProfilSortieService, private routeActive: ActivatedRoute) { }
  dataSource = new MatTableDataSource<User>();
  userObjet: any = {};
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  competences: User[] = [];
  currentuser: any;
  profilSortieModel: ProfilSortie[] = [];
  profilSortieData: any ;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    }
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
                      this.dataSource = this.profilSortieData.apprenants;
                      console.log(this.dataSource);
                    });
                    console.log(this.profilSortieData);
                  });
  }

}
