import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  logando = new EventEmitter<boolean>();

  private readonly API_URL_AUTH = 'http://192.168.0.253:5228/auth';
  constructor(private http: HttpClient) { }

  autenticar(usuario: any) {
    return this.http.post<any>(this.API_URL_AUTH, usuario)
  }

}
