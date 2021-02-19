import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CompetencesService } from 'src/app/competences.service';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-grpcompetences',
  templateUrl: './add-grpcompetences.component.html',
  styleUrls: ['./add-grpcompetences.component.css']
})
export class AddGrpcompetencesComponent implements OnInit {
  constructor(private dataService: CompetencesService, private  http: HttpClient, private fb: FormBuilder) { }
  get CompetencesArray(): any {
    return this.grpcompetencesForm.get('competences') as FormArray;
  }
  formGroup: any = '' ;
  var: any = '';
  couleur = '#E3E3E3';
  clicked = false;
  competences: any = '';
  dataSource: any;
  panelOpenState = false;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: string[] = [];
  fruitCtrl = new FormControl();
  prefixe = '/api/admin/competences/';
  grpcompetence: any;
    grpcompetencesForm = this.fb.group({
      libelle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      competences : this.fb.array([])
  });
  click(competence: any){
    let i =0;
    this.clicked = !this.clicked;
    if (competence)
     {
      this.dataSource.forEach((element: any) => {
      if ( competence === element.libelle)
      {
        i = i + 1;
        this.CompetencesArray.push(
          this.fb.group({
             id: this.prefixe + element.id
          })
        );
      }
    });
      if (i === 0){
        this.CompetencesArray.push(
          this.fb.group({
             libelle: competence
          })
        );
    }
     }
     else{
        this.CompetencesArray.removeAt(
        this.fb.group({
            id: this.prefixe + competence.id
        })
      );
     }
    console.log(this.CompetencesArray);
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }
  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  ngOnInit(): void {
    this.dataService.getCompetences().subscribe(
      (data: any) => {
      this.dataSource = data['hydra:member'] as ProfilSortie[];
      this.dataSource.forEach((element: any) => {
          this.fruits.push(element.libelle);
      });
    },
  );
  }
  insert(grpcompetences: any) {
   // console.log(grpcompetences);
    this.http.post('api/admin/grpecompetences', grpcompetences).subscribe(data => {
      Swal.fire({
        position: 'center',
             icon: 'success',
             title: 'enregistrement du reussi',
             showConfirmButton: false,
             timer: 2000
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
  AddgrpCompetences(): any {
    this.insert(this.grpcompetencesForm.value);
   }
}
