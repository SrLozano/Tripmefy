import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { Page1Component } from './page1/page1.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { RegistroComponent } from './registro/registro.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PerfilOrganizadorComponent } from './perfiles/perfil-organizador/perfil-organizador.component';
import { PerfilViajeroComponent } from './perfiles/perfil-viajero/perfil-viajero.component';
import { CrearViajeComponent } from './viajes/crear-viaje/crear-viaje.component';
import { MisViajesComponent } from './viajes/mis-viajes/mis-viajes.component';
import { UnirseCiudadComponent } from './viajes/unirse-ciudad/unirse-ciudad.component';
import { UnirseContinenteComponent } from './viajes/unirse-continente/unirse-continente.component';
import { UnirsePaisComponent } from './viajes/unirse-pais/unirse-pais.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { LogrosComponent } from './logros/logros.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    NotFound404Component,
    Page1Component,
    PrivacidadComponent,
    RegistroComponent,
    FooterComponent,
    HeaderComponent,
    PerfilOrganizadorComponent,
    PerfilViajeroComponent,
    CrearViajeComponent,
    MisViajesComponent,
    UnirseCiudadComponent,
    UnirseContinenteComponent,
    UnirsePaisComponent,
    ViajeComponent,
    LogrosComponent,
    BienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
