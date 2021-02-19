import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  hide = true;
  opened = true;
  ava: any;
  formData: any = new FormData();
  formGroup: any = {};
  administrateur = 'api/admin/profils/6';
  apprenant = 'api/admin/profils/9';
  formateur = 'api/admin/profils/7';
  cm = 'api/admin/profils/8';
  srcResult = '';
  constructor(private  http: HttpClient, public fb: FormBuilder) { }
  userForm = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    adresse: ['', [Validators.required]],
    email: ['', [Validators.required]],
    profil: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    telephone: ['', [Validators.required]],
    
    password: ['', [Validators.required]],
    photo: [null]
 });
 onFileComplete(data: any) {
  console.log(data);
}
  showSalaire() {
    this.opened = false;
  }
 hideSalaire() {
    this.opened = true;
  }
  
  ngOnInit(): void {
  }
  insert(user: any) {
    this.http.post('api/admin/users', user).subscribe(data => {
      console.log(data);
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
          footer: '<span style="color:red">Veuillez renseigner correctement les champs , Si oui verifier le mail que vous avez renseigné qui est un attribut unique </span>',
           });
      });
  }
  fileChange(event: any): any {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        this.formData.append('photo', file, file.name);
    }}
  AddUser() {
    this.formData.append('nom', this.userForm.value.nom);
    this.formData.append('prenom', this.userForm.value.prenom);
    this.formData.append('sex', this.userForm.value.sex);
    this.formData.append('adresse', this.userForm.value.adresse);
    this.formData.append('email', this.userForm.value.email);

    this.formData.append('telephone', this.userForm.value.telephone);
    this.formData.append('profil', this.userForm.value.profil);
  
    for (const pair of this.formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
  }
    this.insert( this.formData);
}


}
