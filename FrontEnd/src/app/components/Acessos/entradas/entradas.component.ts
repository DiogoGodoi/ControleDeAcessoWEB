import { ApiService } from '../../../services/api.service';
import { mdlEntradas } from '../../../../../model/mdlEntradas';
import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit{

  Entradas?: mdlEntradas[];
  dataEntrada?: Date;
  faArrowRight = faArrowRight
  respostaAPI: boolean = true;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getEntradas().subscribe(dados => {
      this.Entradas = dados;
      this.respostaAPI = false;
    },
    (error) => {
      if(error.status == 404) {
      this.respostaAPI = true;
      }
    })
  }

  pesquisarEntrada(): void {
    this.ApiService.getEntradasID(this.dataEntrada).subscribe(dados =>{
      this.Entradas = dados;
      this.respostaAPI = false;
    },
    (error) => {
      if(error.status == 404) {
      this.respostaAPI = true;
      }
    })
  }

}
