import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EntradasComponent } from './components/Acessos/entradas/entradas.component';
import { SaidasComponent } from './components/Acessos/saidas/saidas.component';
import { EntradaFinalizadaComponent } from './components/Acessos/entrada-finalizada/entrada-finalizada.component';

const routes: Routes = [
{path: "", redirectTo: "home", pathMatch: "full"},
{path: "auth", component: LoginComponent},
{path: "home", component: HomeComponent}, 
{path: "entradas", component: EntradasComponent},
{path: "entradaFinalizada", component: EntradaFinalizadaComponent},
{path: "saidas", component: SaidasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
