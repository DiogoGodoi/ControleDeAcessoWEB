import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.html',
  styleUrls: ['./app-root.css']
})
export class AppComponent implements OnInit{

    logar?: Boolean = false;
  
    constructor(private auth: AuthService){

    }

    ngOnInit(): void {
      this.auth.logando.subscribe(dados =>{
        this.logar = dados;
      })
    }

}

