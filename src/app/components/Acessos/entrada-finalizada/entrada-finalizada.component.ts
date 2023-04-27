import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { mdlEntradaFinalizada } from '../../../../../model/mdlEntradaFinalizada';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-finalizada',
  templateUrl: './entrada-finalizada.component.html',
  styleUrls: ['./entrada-finalizada.component.css']
})
export class EntradaFinalizadaComponent implements OnInit {

  faCheck = faCheck;
  EntradaFinalizada?: mdlEntradaFinalizada[] = [];
  dataEntrada?: string;
  respostaAPI: boolean = true;

    constructor(private api: ApiService) {
    }
    ngOnInit(): void {
      this.api.getEntradaFinalizada().subscribe(dados => {
      this.EntradaFinalizada = dados;
      this.respostaAPI = false;
    },
    (error) => {
      if(error.status == 404) {
      this.respostaAPI = true;
      }
    })
    }

    pesquisarEntradaFinalizada(): void {
      this.api.getEntradaFinalizadaID(this.dataEntrada).subscribe(dados =>{
        this.EntradaFinalizada = dados;
        this.respostaAPI = false;
      },
      (error) => {
        if(error.status == 404) {
        this.respostaAPI = true;
        }
      })
    }
}
