import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { EntradasComponent } from './components/Acessos/entradas/entradas.component';
import { SaidasComponent } from './components/Acessos/saidas/saidas.component';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { EntradaFinalizadaComponent } from './components/Acessos/entrada-finalizada/entrada-finalizada.component';
import { JwtInterceptor } from './services/jwtInterceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Guard } from './services/Guard';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    SlidebarComponent,
    EntradasComponent,
    SaidasComponent,
    FooterComponent,
    EntradaFinalizadaComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    Guard,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
