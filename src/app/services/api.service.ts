import { mdlAuthResponse } from '../../../model/mdlAuthResponse';
import { mdlUsuario } from '../../../model/mdlUsuario';
import { mdlEntradaFinalizada } from '../../../model/mdlEntradaFinalizada';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { mdlEntradas } from '../../../model/mdlEntradas';
import { mdlSaidas } from '../../../model/mdlSaidas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private readonly API_URL_ENTRADA = 'http://192.168.0.253:5228/Entradas';
  private readonly API_URL_ENTRADAFINALIZADA = 'http://192.168.0.253:5228/EntradaFinalizada';
  private readonly API_URL_SAIDA = 'http://192.168.0.253:5228/Saidas';

  constructor(private http: HttpClient) { }

  getEntradas(): Observable<mdlEntradas[]> {
    return this.http.get<mdlEntradas[]>(this.API_URL_ENTRADA).pipe(
      catchError((error: any) => {
        console.error('Erro na requisição: ', error);
        return throwError(error);
      })
    );
  }
  getEntradaFinalizada(): Observable<mdlEntradaFinalizada[]> {
    return this.http.get<mdlEntradaFinalizada[]>(this.API_URL_ENTRADAFINALIZADA).pipe(
      catchError((error: any) => {
        console.error('Erro na requisição: ', error);
        return throwError(error);
      })
    );
  }
  getSaidas(): Observable<mdlSaidas[]>{
    return this.http.get<mdlSaidas[]>(this.API_URL_SAIDA).pipe(
      catchError((error: any) => {
        console.error('Erro na requisição: ', error);
        return throwError(error);
      })
    );
  }
  getEntradasID(dataEntrada: any): Observable<mdlEntradas[]> {
    return this.http.get<mdlEntradas[]>(`${this.API_URL_ENTRADA}/${dataEntrada}`).pipe(
      catchError((error: any) => {
        console.error('Erro na requisição: ', error);
        return throwError(error);
      })
    );
  }
  getSaidasID(dataSaida: any): Observable<mdlSaidas[]> {
    return this.http.get<mdlSaidas[]>(`${this.API_URL_SAIDA}/${dataSaida}`).pipe(
      catchError((error: any) => {
        console.error('Erro na requisição: ', error);
        return throwError(error);
      })
    );
  }
  getEntradaFinalizadaID(dataEntrada: any): Observable<mdlEntradaFinalizada[]> {
    return this.http.get<mdlEntradaFinalizada[]>(`${this.API_URL_ENTRADAFINALIZADA}/${dataEntrada}`).pipe(
      catchError((error: any) => {
        console.error('Erro na requisição: ', error);
        return throwError(error);
      })
    );
  }
}
