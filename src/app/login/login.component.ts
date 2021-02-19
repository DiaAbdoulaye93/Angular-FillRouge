import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup: any = {};
  userType: any = [];
      constructor(private  http: HttpClient, public authService: AuthentificationService) { }

  ngOnInit(): void {}
  loginProcess() {    
    this.authService.posteToken(this.formGroup);
    console.log(this.authService.posteToken(this.formGroup));
    this.userType = this.authService.decodeToken();
    console.log(this.userType.roles[0]);
    this.authService.redirectByRole(this.userType.roles[0]);
  }
 }
