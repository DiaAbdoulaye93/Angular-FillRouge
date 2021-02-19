import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CriteresAdmissionService } from 'src/app/criteres-admission.service';
import { CriteresEvaluationsService } from 'src/app/criteres-evaluations.service';
import { GrpcompetencesService } from 'src/app/grpcompetences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { User } from 'src/app/modeles/User';
import { ReUsableFunctionsService } from 'src/app/re-usable-functions.service';
import { ReferentielService } from 'src/app/referentiel.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-referentiels',
  templateUrl: './update-referentiels.component.html',
  styleUrls: ['./update-referentiels.component.css']
})
export class UpdateReferentielsComponent implements OnInit {
  selectable = true;
  removable = true;
  referentielData: any;
  currentRef: any;
  dataSource: any;
  clicked = false;
  panelOpenState = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  newCompetenceArray: any;
  newAdmissionArray: any;
  newEvaluationArray: any;
  FreeCompetencesArray: any;
  FreeAdmissionArray: any;
  FreeEvaluationArray: any;
  formData: any =  new FormData() ;
  referentielForm = this.fb.group({
    libelle: ['', [Validators.required]],
    presentation: ['', [Validators.required]],
    competences : this.fb.array([]),
    admission : this.fb.array([]),
    evaluation : this.fb.array([]),
    programme: [null]

});
  constructor(private  http: HttpClient,
              private refService: ReferentielService, private grpCompetenceService: GrpcompetencesService,
              private evaluation: CriteresEvaluationsService, private admission: CriteresAdmissionService,
              private fb: FormBuilder, private routeActive: ActivatedRoute, public CallFunction: ReUsableFunctionsService) { }
  ngOnInit(): void {
    let j = 0;
    let k = 0;
    let m = 0;
    console.log('fiiii');
    this.currentRef = this.routeActive.snapshot.params['id'];
    this.refService.getReferentielById(+this.currentRef)
    .subscribe((data: any) => {
      this.referentielData = data;
      console.log(this.referentielData);
      
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.newCompetenceArray = [];
                    this.newAdmissionArray = [];
                    this.newEvaluationArray = [];
                    this.FreeCompetencesArray = [];
                    this.FreeAdmissionArray = [];
                    this.FreeEvaluationArray = [];
                    this.currentRef = +param['id'];
                    console.log('fiiii');
                    
                    this.refService.getReferentielById(+this.currentRef)
                    .subscribe((data: any) => {
                      this.referentielData = data;
                      console.log(this.referentielData);
                      if (this.referentielData.grpcompetence.length > 0)
                      {
                         this.referentielData.grpcompetence.forEach((element: any) => {
                          this.newCompetenceArray.push(element.libelle);
                        });
                      }
                      if (this.referentielData.critereadmission.length > 0)
                      {
                         this.referentielData.critereadmission.forEach((element: any) => {
                          this.newAdmissionArray.push(element.libelle);
                      });
                      }
                      if (this.referentielData.criterevaluation.length > 0)
                      {
                          this.referentielData.criterevaluation.forEach((element: any) => {
                          this.newEvaluationArray.push(element.libelle);
                       });
                      }
                    });
                    this.grpCompetenceService.getgrpsCompetences().subscribe(
                      (data1: any) => {
                      this.dataSource = data1['hydra:member'] as ProfilSortie[];
                      this.dataSource.forEach((element: any) => {
                       this.newCompetenceArray.forEach((element1: any) => {
                        if (element.libelle === element1.libelle)
                        {
                          j = j + 1;
                        }
                       });
                       if ( j === 0){
                        this.FreeCompetencesArray.push(element.libelle);
                       }
                       j = 0;
                      });
                    },
                  );
                  /* --------------------------------------------- */
                    this.admission.getCrit_admission().subscribe(
                    (data1: any) => {
                    this.dataSource = data1['hydra:member'] as ProfilSortie[];
                    this.dataSource.forEach((element: any) => {
                     this.newAdmissionArray.forEach((element1: any) => {
                      if (element.libelle === element1.libelle)
                      {
                        k = k + 1;
                      }
                     });
                     if ( k === 0){
                      this.FreeAdmissionArray.push(element.libelle);
                     }
                     k = 0;
                    });
                  },
                );
                /* --------------------------------------------- */
                    this.evaluation.getCrit_evaluation().subscribe(
                        (data1: any) => {
                        this.dataSource = data1['hydra:member'] as ProfilSortie[];
                        this.dataSource.forEach((element: any) => {
                         this.newEvaluationArray.forEach((element1: any) => {
                          if (element.libelle === element1.libelle)
                          {
                            m = m + 1;
                          }
                         });
                         if ( m === 0){
                          this.FreeEvaluationArray.push(element.libelle);
                         }
                         m = 0;
                        });
                      },
                    );
                  });
  }
  fileChange(event: any): any {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        this.formData.append('programme', file, file.name);
    }}
    Update(referentiel: any): any {
      this.http.post(`${'api/admin/referentiels/'}${+this.currentRef}`, referentiel).subscribe(data => {
        Swal.fire({
          position: 'center',
               icon: 'success',
                title: 'modification du referentiel reuissi, merci à la prochaine (* - *)',
               showConfirmButton: true,
               timer: 4000
                })
        return data;
      },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Echec ',
            footer: '<span style="color:red">La modification a echoué veuillez  réessayer</span>',
             });
        });
    }
  UpdateReferentiel(): any {
    this.formData.append('libelle', this.referentielForm.value.libelle);
    this.formData.append('presentation', this.referentielForm.value.presentation);
    this.formData.append('grpcompetence', this.newCompetenceArray);
    this.formData.append('criterevaluation', this.newEvaluationArray);
    this.formData.append('critereadmission', this.newAdmissionArray);
    this.formData.append('_method', 'put');
    for (const pair of this.formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
  }
    this.Update( this.formData);
  }
}
