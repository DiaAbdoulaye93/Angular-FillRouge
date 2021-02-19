import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/modeles/User';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  hide = true;
  opened = true;
  fChecked = false;
  hChecked = false;
    Sex: any = [
      {libelle: 'M'},
      {libelle: 'F'}
    ];
  formData: any = new FormData();
  ava: any;
  formGroup: any = {};
  currentuser: any;
  user: User[] = [];
  users: any ;
  administrateur = 'api/admin/profils/6';
  apprenant = 'api/admin/profils/9';
  formateur = 'api/admin/profils/7';
  cm = 'api/admin/profils/8';
  image: any;
  constructor(private  http: HttpClient, private userService: UserService, private routeActive: ActivatedRoute, private fb: FormBuilder) { }
  userForm = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    adresse: ['', [Validators.required]],
    email: ['', [Validators.required]],
    profil: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    telephone: ['', [Validators.required]],
    photo: [null]
 });
  ngOnInit(): void {
    this.currentuser = this.routeActive.snapshot.params['id'];
    this.userService.getUser(+this.currentuser)
    .subscribe((data: User[]) => {
      this.users = data;
    });
    this.routeActive.params
                  .subscribe((param: Params) =>
                  {
                    this.currentuser = +param['id'];
                    this.userService.getUser(+this.currentuser)
                    .subscribe((data: User[]) => {
                      this.users = data;
                      console.log(this.Sex);
                      console.log(this.users);
                      if ( this.users.Sex === 'H' || this.users.Sex === 'h'){
                           this.hChecked = true;
                      }
                      else if (this.users.Sex === 'F' || this.users.Sex === 'f' ){
                          this.fChecked = true;
                      }
                    });
                  });
  }
  showSalaire(): void {
    this.opened = false;
  }
 hideSalaire(): void {
    this.opened = true;
  }

  onFileComplete(data: any): any {
    console.log(data);
  }
  Update(user: any): any {
    this.http.post(`${'api/admin/users/'}${+this.currentuser}`, user).subscribe(data => {
      Swal.fire({
        position: 'center',
             icon: 'success',
             title: 'modification reuissi merci à la prochaine...!',
             showConfirmButton: false,
             timer: 2000
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
    this.formData.append('_method', 'put');
    for (const pair of this.formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
  }
    this.Update( this.formData);
}

}
