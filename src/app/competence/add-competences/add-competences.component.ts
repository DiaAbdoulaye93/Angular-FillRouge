import { Component, OnInit } from '@angular/core';
import { GrpcompetencesService } from 'src/app/grpcompetences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { Competences } from 'src/app/modeles/Competences';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
declare var $: JQueryStatic;
@Component({
  selector: 'app-add-competences',
  templateUrl: './add-competences.component.html',
  styleUrls: ['./add-competences.component.css']
})
export class AddCompetencesComponent implements OnInit {
formGroup: any = '';
niveau1 = false ;
niveau2 = true;
niveau3 = true ;
n1 = true;
n2 = false;
n3 = false;
#t: any;
angular: any;
selectedgrpcompetences: any;
Groupecompetence = 'api/admin/grpecompetences/';
dataSource: any;
  competence: any;
  selectedData: { value: any; text: string; } | undefined;
  constructor(private dataService: GrpcompetencesService, private  http: HttpClient, private fb: FormBuilder) { }
  competenceForm = this.fb.group({
        grpcompetences: this.fb.array([]),
        libelle: ['', [Validators.required]],
        grpaction0: ['', [Validators.required]],
        niveauevaluation0: ['', [Validators.required]],
        grpaction1: ['', [Validators.required]],
        niveauevaluation1: ['', [Validators.required]],
        grpaction2: ['', [Validators.required]],
        niveauevaluation2: ['', [Validators.required]],
         });
  Niveau1(): any {
    this.niveau1 = false ;
    this.niveau2 = true;
    this.niveau3 = true ;
    this.n1 = true;
    this.n2 = false;
    this.n3 = false;
   }
  Niveau2(): any {
    this.niveau1 = true ;
    this.niveau2 = false;
    this.niveau3 = true ;
    this.n1 = false;
    this.n2 = true;
    this.n3 = false;
  }
  Niveau3(): any {
    this.niveau1 = true ;
    this.niveau2 = true;
    this.niveau3 = false ;
    this.n1 = false;
    this.n2 = false;
    this.n3 = true;

  }
  ngOnInit(): void {
    this.dataService.getgrpsCompetences().subscribe(
      (data: any) => {
        this.dataSource = data['hydra:member'] as ProfilSortie[];
        console.log('addcompetences');
        console.log(this.dataSource);
        console.log('fin');
      },
    );
  }
  click(competence: any){
    competence.clicked = !competence.clicked;
  }
  get grpcompetencesArray(): any {
    return this.competenceForm.get('grpcompetences') as FormArray;
  }

  selectedValue(value: any): any{
    if (this.grpcompetencesArray.length > 0){
      this.grpcompetencesArray.removeAt(
        this.fb.group({
            id:  value
        })
      );
      this.grpcompetencesArray.push(
        this.fb.group({
           id: value
        })
      );
    }
    else{
      this.grpcompetencesArray.push(
        this.fb.group({
           id: value
        })
      );
    }
    console.log(this.grpcompetencesArray);
    }
  insert(competences: any) {
    this.http.post('api/admin/competences', competences).subscribe(data => {
      console.log(competences);
      Swal.fire({
        title: 'Creation de nouvelle competence reussi',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      /*
      Swal.fire({
        position: 'center',
             icon: 'success',
             title: 'enregistrement du reussi',
             showConfirmButton: false,
             timer: 2000
              });*/
      return data;

    },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Echec enregistrement ',
          footer: '<span style="color:red">Veuillez renseigner correctement les champs , Si oui verifier le libelle que vous avez renseigné qui est un attribut unique </span>',
           });
      });
  }
  AddCompetences(): any {
  this.competence = {
      libelle: this.competenceForm.value.libelle,
      grpcompetence: [
          {
              id: this.competenceForm.value.grpcompetences[0].id,
          }
      ],
      niveau: [
          {
            grpactions: this.competenceForm.value.grpaction0,
            niveauevaluation: this.competenceForm.value.niveauevaluation0,
          },
          {
            grpactions: this.competenceForm.value.grpaction1,
            niveauevaluation: this.competenceForm.value.niveauevaluation1,

          },
           {
            grpactions: this.competenceForm.value.grpaction2,
            niveauevaluation: this.competenceForm.value.niveauevaluation2,

          }
      ]
  };
  console.log(this.competence);
  this.insert(this.competence);
  }

}

