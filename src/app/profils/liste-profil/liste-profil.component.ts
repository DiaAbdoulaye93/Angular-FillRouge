import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { ProfilSortieService } from 'src/app/profil-sortie.service';

@Component({
  selector: 'app-liste-profil',
  templateUrl: './liste-profil.component.html',
  styleUrls: ['./liste-profil.component.css']
})
export class ListeProfilComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'libelle', 'detailles', 'modifier', 'supprimer'];
  constructor(private dataService: ProfilSortieService) { }
dataSource = new MatTableDataSource<ProfilSortie>();
             userObjet: any = {};
             @ViewChild(MatPaginator)
             paginator!: MatPaginator;
             profilsSortie: ProfilSortie[] = [];
                ngAfterViewInit() {
             this.dataSource.paginator = this.paginator;
             }
             ngOnInit(): void {
               this.dataService.getProfilsSortie().subscribe(
                 (data: any) => {
                   this.dataSource.data = data['hydra:member'] as ProfilSortie[];
                  // console.log(this.dataSource.data);
                 },
               );
             }

}
