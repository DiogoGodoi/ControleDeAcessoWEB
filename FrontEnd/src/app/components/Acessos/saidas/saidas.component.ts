import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { mdlSaidas } from '../../../../../model/mdlSaidas';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-saidas',
  templateUrl: './saidas.component.html',
  styleUrls: ['./saidas.component.css']
})
export class SaidasComponent implements OnInit{

  Saidas?: mdlSaidas[];
  dataSaida?: string;
  faArrowLeft = faArrowLeft
  respostaAPI: boolean = true

  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    this.api.getSaidas().subscribe(dados =>{
      this.Saidas = dados;
      this.respostaAPI = false;
    },
    (error) => {
      if(error.status == 404) {
      this.respostaAPI = true;
      }
    })
  }

  pesquisarSaida(): void {
    this.api.getSaidasID(this.dataSaida).subscribe(dados =>{
      this.Saidas = dados;
      this.respostaAPI = false;
    },
    (error) => {
      if(error.status == 404) {
      this.respostaAPI = true;
      }
    })
  }
}
