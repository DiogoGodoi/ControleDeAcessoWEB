import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { mdlUsuario } from '../../../../model/mdlUsuario';
import { ApiService } from 'src/app/services/api.service';
import { mdlAuthResponse } from '../../../../model/mdlAuthResponse';
import { Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: mdlUsuario = {nome: "", senha: ""};
  msg?: string;
  exibirCaixa?: boolean = false;
  constructor(private api: ApiService, private auth: AuthService, private router: Router) {
  }

  Logar(): void {
      this.auth.autenticar(this.usuario).subscribe(dados => {
      mdlAuthResponse.token = dados.token.token;
      mdlAuthResponse.respostaAuth = dados.autenticacao;
      this.auth.logando.emit(true);
      this.router.navigate(['entradas'])
    }, error => {
      this.exibirCaixa = true;
      this.auth.logando.emit(false);
      this.msg = "Falha no login !!"
    });
    }
  }
