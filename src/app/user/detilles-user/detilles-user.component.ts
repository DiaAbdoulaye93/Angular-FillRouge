import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/modeles/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-detilles-user',
  templateUrl: './detilles-user.component.html',
  styleUrls: ['./detilles-user.component.css']
})
export class DetillesUserComponent implements OnInit {
  currentuser: any;
  user: User[] = [];
  users: any ;
  constructor(private userService: UserService, private routeActive: ActivatedRoute) { }

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
                    });
                    console.log(this.users);
                  });
  }

}
