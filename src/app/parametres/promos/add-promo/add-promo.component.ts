import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ProfilSortie } from 'src/app/modeles/profil-sortie';
import { PromosService } from 'src/app/promos.service';
import { ReferentielService } from 'src/app/referentiel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.css']
})
export class AddPromoComponent implements OnInit {
  formGroup: any = '';
  button: any = 'fa fa-sort-down';
  open = false ;
  dataSourceFabrique: any;
  dataSourceLangue: any;
  panelOpenState = false;
  formData: any = new FormData();
  dataSourceReferentiel: any;
  dataSource: any;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  strudentsMails: string[] = [];
  fruitCtrl = new FormControl();
  promoForm = this.fb.group({
    titre: ['', [Validators.required]],
    description: ['', [Validators.required]],
    lieu: ['', [Validators.required]],
    referenceAgate: ['', [Validators.required]],
    datedebut: [''],
    datefin: [''],
    referentiel: this.fb.array([]),
    apprenant: this.fb.array([]),
    langue: ['', [Validators.required]],
    fabrique: ['', [Validators.required]],
    photo: [null],
    apprenants: [null]
 });
  constructor(private promoData: PromosService, private  http: HttpClient, private fb: FormBuilder,
              private referentielData: ReferentielService) { }
   get referentielArray(): any {
        return this.promoForm.get('referentiel') as FormArray;
       }
   click_referentiel(referentiel: any): any{
    referentiel.clicked = !referentiel.clicked;
    if (referentiel.clicked === true)
    {
       this.referentielArray.push(
       this.fb.group({
        libelle: referentiel.libelle
       })
     );
    }
    else{
       this.referentielArray.removeAt(
       this.fb.group({
        libelle: referentiel.libelle
       })
     );
    }
    console.log(this.referentielArray);

  }
  selectedlangue(value: any): any{
    this.formData.append('langue', this.promoForm.value.langue);
    }
    selectedfabrique(value: any): any{
      this.formData.append('fabrique', this.promoForm.value.fabrique);
      }
      ngOnInit(){
        this.promoData.getFabrique().subscribe(
          (data: any) => {
          this.dataSourceFabrique = data['hydra:member'] as ProfilSortie[];
           },
       );
        this.promoData.getLangueus().subscribe(
        (data: any) => {
               this.dataSourceLangue = data['hydra:member'] as ProfilSortie[];
           },
        );
        this.referentielData.getReferentiels().subscribe(
          (data: any) => {
                  this.dataSourceReferentiel = data['hydra:member'] as ProfilSortie[];
           },
        );
      }
      add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
          this.strudentsMails.push(value.trim());
        }
        // Reset the input value
        if (input) {
          input.value = '';
        }
        this.fruitCtrl.setValue(null);
      }
      remove(fruit: string): void {
        const index = this.strudentsMails.indexOf(fruit);
        if (index >= 0) {
          this.strudentsMails.splice(index, 1);
        }
      }
  insert(promo: any) {
        // console.log(grpcompetences);
         this.http.post('api/admin/promo', promo).subscribe(data => {
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
       fileChange(event: any): any{
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file: File = fileList[0];
            this.formData.append('photo', file, file.name);
        }}

        onFileInput(event: any): any{
          const fileList: FileList = event.target.files;
          if (fileList.length > 0) {
              const file: File = fileList[0];
              this.formData.append('apprenants', file, file.name);
          }}

      show_or_hide(): any {
        this.open = !this.open;
        this.button = this.open ? 'fa fa-sort-up' : 'fa fa-sort-down' ;
      }

      AddPromo(): any {
        const referentielsList: Array<any> = [];
        this.promoForm.value.referentiel.forEach((element: { libelle: any; }) => {
          referentielsList.push(element.libelle);
         });
        this.formData.append('titre', this.promoForm.value.titre);
        this.formData.append('description', this.promoForm.value.description);
        this.formData.append('referentiel', referentielsList);
        this.formData.append('apprenant', this.strudentsMails);
        this.formData.append('referenceagate', this.promoForm.value.referenceAgate);
        this.formData.append('datedebut', this.promoForm.value.datedebut);
        this.formData.append('datefin', this.promoForm.value.datefin);
        for (const pair of this.formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
      }
        this.insert( this.formData);
      }
}

