import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CompetencesService } from 'src/app/competences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { Competences } from 'src/app/modeles/Competences';
import Swal from 'sweetalert2';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { GrpcompetencesService } from 'src/app/grpcompetences.service';
declare var $: JQueryStatic;
@Component({
  selector: 'app-update-competences',
  templateUrl: './update-competences.component.html',
  styleUrls: ['./update-competences.component.css']
})
export class UpdateCompetencesComponent implements OnInit {
  formGroup: any = {};
  competence: any;
  competenceUpdate: any;
  niveau1 = false ;
  niveau2 = true;
  niveau3 = true ;
  n1 = true;
  n2 = false;
  n3 = false;
  dataSource: any;
  #t: any;
  constructor(private  http: HttpClient, private competenceService: CompetencesService, private routeActive: ActivatedRoute,
              private dataService: GrpcompetencesService, private fb: FormBuilder) {}
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
          click(competence: any){
          competence.clicked = !competence.clicked;
          }
          get grpcompetencesArray(): any {
          return this.competenceForm.get('grpcompetences') as FormArray;
          }
          Update(compet: any): any {
            this.http.put(`${'api/admin/competences/'}${+this.competenceUpdate}`, compet).subscribe(data => {
              console.log(data);
              Swal.fire({
                position: 'center',
                     icon: 'success',
                     title: 'modification reuissi merci à la prochaine...!',
                     showConfirmButton: false,
                     timer: 2000
                      });
              return data;
            },
              err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Echec enregistrement ',
                  footer: '<span style="color:red">La modification a echoué veuillez  réessayer</span>',
                   });
              });
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
          UpdateCompetences(): any {
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
                  niveauevaluation: this.competenceForm.value.niveauevaluation2,                }
            ]
          };
          console.log(this.competence);
          this.Update(this.competence);
          }
    ngOnInit(): void {
    this.competenceUpdate = this.routeActive.snapshot.params['id'];
    this.competenceService.getCompetenceById(+this.competenceUpdate)
    .subscribe((data: any) => {
      this.competence = data;
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.competenceUpdate = +param['id'];
                    this.competenceService.getCompetenceById(+this.competenceUpdate)
                    .subscribe((data: any) => {
                      this.competence = data;
                      console.log(this.competence);
                      console.log(this.competence.niveau[0].niveauevaluation);
                    });
                  });
    this.dataService.getgrpsCompetences().subscribe(
                    (data: any) => {
                      this.dataSource = data['hydra:member'] as ProfilSortie[];
                  });

}}
