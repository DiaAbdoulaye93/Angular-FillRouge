import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CriteresAdmissionService } from 'src/app/criteres-admission.service';
import { CriteresEvaluationsService } from 'src/app/criteres-evaluations.service';
import { GrpcompetencesService } from 'src/app/grpcompetences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-referentiels',
  templateUrl: './add-referentiels.component.html',
  styleUrls: ['./add-referentiels.component.css']
})
export class AddReferentielsComponent implements OnInit {
  formGroup: any = '' ;
  constructor(private grpCompetencesData: GrpcompetencesService, private  http: HttpClient, private fb: FormBuilder,
              private evaluationData: CriteresEvaluationsService, private admissionDatas: CriteresAdmissionService) { }
  couleur = '#E3E3E3';
  clicked = false;
  prefixeGrpCompetences = '/api/admin/grpecompetences/';
  prefixeCriteresEvaluation = '/api/admin/critere_evaluations/';
  prefixeCrieresAdmission = '/api/admin/critere_admissions/';
  ChipsColor: any;
  panelOpenState: any;
  formData: any = new FormData();
  dataSourceGrpCompetences: any;
  dataSourceEvaluation: any;
  dataSourceAdmission: any;
  referentiel: any;
  referentielForm = this.fb.group({
   libelle: ['', [Validators.required]],
   presentation: ['', [Validators.required]],
   referentielGrpCompetences: this.fb.array([]),
   criterevaluation: this.fb.array([]),
   critereadmission: this.fb.array([]),
   programme: [null]
});
// tslint:disable-next-line:typedef


get grpCompetencesArray(): any {
  return this.referentielForm.get('referentielGrpCompetences') as FormArray;
}
get criteres_EvaluationArray(): any {
  return this.referentielForm.get('criterevaluation') as FormArray;
}
get criteres_AdmissionArray(): any {
  return this.referentielForm.get('critereadmission') as FormArray;
}
  click_competence(competence: any): any{
    competence.clicked = !competence.clicked;
    if (competence.clicked === true)
    {
       this.grpCompetencesArray.push(
       this.fb.group({
        libelle: competence.libelle
       })
     );
    }
    else{
       this.grpCompetencesArray.removeAt(
       this.fb.group({
        libelle: competence.libelle
       })
     );
    }
    console.log(this.grpCompetencesArray);
  }
  click_evaluation(evaluation: any): any{
    evaluation.clicked = !evaluation.clicked;
    if (evaluation.clicked === true)
    {
       this.criteres_EvaluationArray.push(
       this.fb.group({
        libelle: evaluation.libelle
       })
     );
    }
    else{
       this.criteres_EvaluationArray.removeAt(
       this.fb.group({
        libelle: evaluation.libelle
       })
     );
    }
    console.log(this.criteres_EvaluationArray);
  }
  click_admission(admission: any): any{
    admission.clicked = !admission.clicked;
    admission.color = 'warn';
    if (admission.clicked === true)
    {
       this.criteres_AdmissionArray.push(
       this.fb.group({
          libelle: admission.libelle
       })
     );
    }
    else{
       this.criteres_AdmissionArray.removeAt(
       this.fb.group({
           libelle: admission.libelle
       })
     );
    }
    console.log(this.criteres_AdmissionArray);
  }
  ngOnInit(){
    this.grpCompetencesData.getgrpsCompetences().subscribe(
      (data: any) => {
      this.dataSourceGrpCompetences = data['hydra:member'] as ProfilSortie[];
       },
   );
    this.evaluationData.getCrit_evaluation().subscribe(
    (data: any) => {
           this.dataSourceEvaluation = data['hydra:member'] as ProfilSortie[];
       },
    );
    this.admissionDatas.getCrit_admission().subscribe(
      (data: any) => {
              this.dataSourceAdmission = data['hydra:member'] as ProfilSortie[];
       },
    );
  }
  insert(referentiel: any) {
    // console.log(grpcompetences);
     this.http.post('api/admin/Referentiels', referentiel).subscribe(data => {
       Swal.fire({
         position: 'center',
              icon: 'success',
              title: 'enregistrement du referentiel reussi, merci a la prochaine (* - *)',
              showConfirmButton: true,
              timer: 4000
               });
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
   fileChange(event: any): any {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        this.formData.append('programme', file, file.name);
    }}
   AddReferentiel(): any {
    const grpcomplist: Array<any> = [];
    this.referentielForm.value.referentielGrpCompetences.forEach((element: { libelle: any; }) => {
      grpcomplist.push(element.libelle);
     });
    const admissionlist: Array<any> = [];
    this.referentielForm.value.critereadmission.forEach((element: { libelle: any; }) => {
      admissionlist.push(element.libelle);
      });
    const evaluationlist: Array<any> = [];
    this.referentielForm.value.criterevaluation.forEach((element: { libelle: any; }) => {
      evaluationlist.push(element.libelle);
       });
    this.formData.append('libelle', this.referentielForm.value.libelle);
    this.formData.append('presentation', this.referentielForm.value.presentation);
    this.formData.append('referentielGrpCompetences', grpcomplist);
    this.formData.append('criterevaluation', evaluationlist);
    this.formData.append('critereadmission', admissionlist);
    for (const pair of this.formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
  }
    this.insert( this.formData);
  }
}
