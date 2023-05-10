import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { EntradasComponent } from './components/Acessos/entradas/entradas.component';
import { SaidasComponent } from './components/Acessos/saidas/saidas.component';
import { Guard } from './services/Guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{path: "login", component:LoginComponent}, 
{path: "", redirectTo: "login", pathMatch: "full"},
{path: "home", redirectTo: "login", pathMatch: "full"},
{path: "home", component: HomeComponent, canActivate: [Guard], children: [
  {path: "entradas", component: EntradasComponent},
  {path: "saidas", component: SaidasComponent},
  {path: "entradaFinalizada", component: EntradasComponent}]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
