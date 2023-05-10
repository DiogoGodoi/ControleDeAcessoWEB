import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { mdlUsuario } from '../../../../model/mdlUsuario';
import { ApiService } from 'src/app/services/api.service';
import { mdlAuthResponse } from '../../../../model/mdlAuthResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: mdlUsuario = {nome: "", senha: ""};
  msg?: string;
  exibirCaixa?: boolean = false;
  constructor(private api: ApiService, private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  Logar(): void {

      this.auth.Logar(this.usuario).subscribe(dados => {
      mdlAuthResponse.token = dados.token.token;
      const token = mdlAuthResponse.token;
      console.log(token)
      if(token != null) {
        console.log(token)
        this.router.navigate(['home/entradas'])
      } 
    }, error => {
      this.exibirCaixa = true;
      this.msg = "Falha no login !!"
    });
    }
  }
