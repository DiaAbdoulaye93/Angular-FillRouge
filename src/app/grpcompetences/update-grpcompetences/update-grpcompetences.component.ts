import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Params } from '@angular/router';
import { CompetencesService } from 'src/app/competences.service';
import { GrpcompetencesService } from 'src/app/grpcompetences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { User } from 'src/app/modeles/User';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-grpcompetences',
  templateUrl: './update-grpcompetences.component.html',
  styleUrls: ['./update-grpcompetences.component.css']
})
export class UpdateGrpcompetencesComponent implements OnInit {

  constructor(private  http: HttpClient,
              private CompetencesServices: CompetencesService, private grpCompetenceService: GrpcompetencesService,
              private fb: FormBuilder, private routeActive: ActivatedRoute) { }
  couleur = '#E3E3E3';
  clicked = false;
  competences: any = '';
  dataSource: any;
  grCompetence: any;
  newcompetenceArray: string[] = [];
  prefixe = '/api/admin/competences/';
  currentGrpCompetence: any;
  panelOpenState = false;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  FreeCompetences: string[] = [];
  fruitCtrl = new FormControl();
  grpcompetencesForm = this.fb.group({
    libelle: ['', [Validators.required]],
    description: ['', [Validators.required]],
    competences : this.fb.array([])
});
get CompetencesArray(): any {
  return this.grpcompetencesForm.get('competences') as FormArray;
}
  ngOnInit(): void {
    let j = 0;
    this.currentGrpCompetence = this.routeActive.snapshot.params['id'];
    this.grpCompetenceService.getgrpsCompetenceById(+this.currentGrpCompetence)
    .subscribe((data: any) => {
      this.grCompetence = data;
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.newcompetenceArray = [];
                    this.FreeCompetences = [];
                    this.currentGrpCompetence = +param['id'];
                    this.grpCompetenceService.getgrpsCompetenceById(+this.currentGrpCompetence)
                    .subscribe((data: User[]) => {
                      this.grCompetence = data;
                      this.grCompetence.competences.forEach((element: any) => {
                          this.newcompetenceArray.push(element.libelle);
                      });
                    });
                    this.CompetencesServices.getCompetences().subscribe(
                      (data1: any) => {
                      this.dataSource = data1['hydra:member'] as ProfilSortie[];
                      this.dataSource.forEach((element: any) => {
                       this.grCompetence.competences.forEach((element1: any) => {
                        if (element.libelle === element1.libelle)
                        {
                          j = j + 1;
                        }
                       });
                       if ( j === 0){
                        this.FreeCompetences.push(element.libelle);
                       }
                       j = 0;
                      });
                    },
                  );
                  });
  }
  click(competence: any){
    let i = 0;
    this.clicked = !this.clicked;
    if (competence)
     {
      this.newcompetenceArray.forEach((element: any) => {
      if ( competence === element)
      {
        i = i + 1;
      }
    });
      if( i === 0 ){
      this.newcompetenceArray.push(competence);
    }
      console.log(this.newcompetenceArray);
  }}
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.newcompetenceArray.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
    console.log(this.newcompetenceArray);
  }
  remove(fruit: string): void {
    const index = this.newcompetenceArray.indexOf(fruit);

    if (index >= 0) {
      this.newcompetenceArray.splice(index, 1);
    }
  }
  remove_neWerCOmpetence(fruit: string): void {
    const index = this.FreeCompetences.indexOf(fruit);

    if (index >= 0) {
      this.FreeCompetences.splice(index, 1);
    }
  }
  Updategrpcompetence(grpcompetence: any) {
    this.http.put(`api/admin/grpecompetences/${this.currentGrpCompetence}`, grpcompetence).subscribe((data: any) => {
      Swal.fire({
        position: 'center',
             icon: 'success',
             title: 'Modification du groupe de competence reussi',
             showConfirmButton: false,
             timer: 2000
              });
      return data;

    },
     (err: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Echec de la modification ',
          footer: '<span style="color:red">Veuillez renseigner correctement les champs , Si oui verifier le libelle que vous avez renseigné qui est un attribut unique </span>',
           });
      });
  }
 UpdategrpCompetences(): any {
  let i =0;
  if (this.newcompetenceArray)
  {
   this.newcompetenceArray.forEach((element: any) => {
     this.dataSource.forEach((element1: any) => {
       if (element === element1.libelle){
        i = i + 1;
        this.CompetencesArray.push(
          this.fb.group({
             id: this.prefixe + element1.id
          })
        );
       }
     });
     if (i === 0){
      this.CompetencesArray.push(
        this.fb.group({
           libelle: element
        })
      );
  }
   });
 }
  console.log(this.CompetencesArray);
  this.Updategrpcompetence(this.grpcompetencesForm.value);
   }
}
