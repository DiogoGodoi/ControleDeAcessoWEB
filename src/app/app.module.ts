import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { EntradasComponent } from './components/Acessos/entradas/entradas.component';
import { SaidasComponent } from './components/Acessos/saidas/saidas.component';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EntradaFinalizadaComponent } from './components/Acessos/entrada-finalizada/entrada-finalizada.component';
import { JwtInterceptor } from './services/jwtInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SlidebarComponent,
    EntradasComponent,
    SaidasComponent,
    FooterComponent,
    EntradaFinalizadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
