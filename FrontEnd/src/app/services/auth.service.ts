import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private readonly API_URL_AUTH = 'http://192.168.0.253:5228/auth';
  constructor(private http: HttpClient) { }


  Logar(usuario: any) {
    return this.http.post<any>(this.API_URL_AUTH, usuario)   
  }

  Deslogar(): void {
    localStorage.removeItem("Usuario");
  }

  GetUsuario(): { username: string } | null {
    const userStr = localStorage.getItem("Usuario");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  UsuarioLogado(): boolean {
    return !!localStorage.getItem("Usuario");
  }


}
