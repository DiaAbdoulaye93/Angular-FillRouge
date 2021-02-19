import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompetencesService } from 'src/app/competences.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { GrpcompetencesService } from 'src/app/grpcompetences.service';
import { Competences } from 'src/app/modeles/Competences';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { ActivatedRoute } from '@angular/router';
import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';

@Component({
  selector: 'app-liste-competences',
  templateUrl: './liste-competences.component.html',
  styleUrls: ['./liste-competences.component.css']
})
export class ListeCompetencesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'libelle', 'detailles', 'modifier', 'supprimer'];
  constructor(private dataService: GrpcompetencesService, private routeActive: ActivatedRoute) { }
  @Input()
  $: any;
  defaulcontent = true;
  listecompetence: any;
  dataSource: any[] = [];
  competence: any;
  competences: any;
  CompetenceOfGrp: any; //Les competences d'un groupe Selectionné
  form!: FormGroup;
  currentuser: any;
  ngOnInit(): void {
    this.dataService.getgrpsCompetences().subscribe(
      (data: any) => {
        this.dataSource = data['hydra:member'] as ProfilSortie[];
        console.log(this.dataSource);
        this.listecompetence = this.dataSource[0].competences;
        console.log(this.listecompetence);
      },
    );
  }
  selectedValue(id: any){
    this.defaulcontent = false;
    this.dataService.getgrpsCompetenceById(id).subscribe(
      (res: any ) => {
        this.competences = res;
        this.CompetenceOfGrp = this.competences.competences;
        console.log(this.CompetenceOfGrp);
      }
    );
  }
  // listeCompetences(){
  //   console.log(this.selected);
  //   this.dataService.getgrpsCompetenceById(this.selected)
  //   .subscribe((data: ProfilSortie[]) => {
  //     this.competences = data;
  //     this.CompetenceOfGrp = this.competences.competences;
  //     console.log(this.CompetenceOfGrp);
  //   });
  // }

//   getvalue(){
//     this.competence = $('#optiongrp').val();
//     alert(this.competence);
//    //here u can access client id and client name and you can do any operations required
// }
 /* Competences: Array<any>  = [{
    id: 1,
    libelle: 'Prise en main de fluter',
    description: 'Developpeur-se web et mobile',
    niveau1: [
      {id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
    }
    ],
    niveau2: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
      }
    ],
    niveau3: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires',
      }
    ]

  },
  {
    id: 2,
    libelle: 'Base de données relationnelles',
    description: 'Realiser un site web a partir de wordpress',
    niveau1: [
      {id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
    }
    ],
    niveau2: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
      }
    ],
    niveau3: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires',
      }
    ]

  },
  {
    id: 3,
    libelle: 'Marketing Digital',
    description: 'Referent digital',
    niveau1: [
      {id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
    }
    ],
    niveau2: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
      }
    ],
    niveau3: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires',
      }
    ]

  },
  {
    id: 4,
    libelle: 'Développer une interface Mobile',
    description: 'Competences numeriques fondamental',
    niveau1: [
      {id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
    }
    ],
    niveau2: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
      }
    ],
    niveau3: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires',
      }
    ]

  },
  {
    id: 5,
    libelle: 'Développer le front-end d’une application web',
    description: 'Developpeur-se Data',
    niveau1: [
      {id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
    }
    ],
    niveau2: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
      }
    ],
    niveau3: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires',
      }
    ]

  },
  {
    id: 6,
    libelle: 'Développer le back-end d’une application web',
    description: 'Objets connectés',
    niveau1: [
      {id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
    }
    ],
    niveau2: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires'
      }
    ],
    niveau3: [
      {
        id: 1,
        evaluation: 'Générateur en ligne de textes aléatoires',
        action: 'Générateur en ligne de textes aléatoires',
      }
    ]

  }];
  dataSource = new MatTableDataSource(this.Competences);
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator);
  }
*/
}
