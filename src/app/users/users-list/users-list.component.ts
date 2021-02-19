import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification.service';
import { User } from 'src/app/modeles/User';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private dataService: UserService,
              private route: ActivatedRoute, public authService: AuthentificationService
    ) { }
   // updateFonction = this.updateButton.fillForm;
   reviewBtn = false;
displayedColumns = ['photo', 'id', 'nom', 'prenom', 'email',  'profil', 'detailles', 'modifier', 'supprimer'];
dataSource = new MatTableDataSource<User>();
userObjet: any = {};
@ViewChild(MatPaginator)
paginator!: MatPaginator;
currentUser = null;
AdminEmail = this.authService.getEmail();
users: User[] = [];
   ngAfterViewInit() {
this.dataSource.paginator = this.paginator;
}
ngOnInit(): void {
  this.dataService.getUsers().subscribe(
    (data: any) => {
      this.dataSource.data = data['hydra:member'] as User[];
      console.log(this.dataSource);
      
    },
  );
}
removeUser(id: number): void{
  this.dataService.archiveUser(id).subscribe(
    (data: any ) => {
      this.currentUser = data;
      Swal.fire({
        position: 'top-end',
        title: 'Etes vous sure de vouloire supprimmer cet utilisateur ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'oui j\'en suis sûre !',
        cancelButtonText: 'Annuler la suppression'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Suppression confirmé !',
            'Vous avez archivé cet utilisateur',
            'success'
          );
        }
      });
    },
    (error: any) => {
      console.log(error);
    }) ;
  }
}

