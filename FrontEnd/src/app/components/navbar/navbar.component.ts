import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mdlAuthResponse } from 'model/mdlAuthResponse';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private auth: AuthService) {
  }

  deslogar(): void {
    this.router.navigate(['login'])
    mdlAuthResponse.token = ""
  }

}
