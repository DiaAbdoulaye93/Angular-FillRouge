import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  authService: AuthentificationService) { }
  isconnected= this.authService.loggedIn();
  ngOnInit(): void {  
  //  console.log(this.isconnected);
    
  }
  logoutProcess () {

    this.authService.logout();
    console.log(this.authService.getToken());
  }
}
