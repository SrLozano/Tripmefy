import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
// ELEMENTOS UI ESPECÍFICOS:
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


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
import { CarouselComponent } from './carousel/carousel.component';


import { LogrosComponent } from './logros/logros.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CommonModule } from '@angular/common';

import { VolverComponent } from './shared/volver/volver.component';


import { BotonComponent } from './shared/boton/boton.component';


import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { PedirImagenComponent } from './shared/pedir-imagen/pedir-imagen.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PuntuacionPuComponent } from './shared/puntuacion-pu/puntuacion-pu.component';
import { ComentarioPuComponent } from './shared/comentario-pu/comentario-pu.component';
import { EdicionPuComponent } from './shared/edicion-pu/edicion-pu.component';
import { MensajeComponent } from './shared/mensaje/mensaje.component';





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
    CarouselComponent,
    VolverComponent,
    LogrosComponent,
    BienvenidaComponent,
    VolverComponent,

    ScrollTopComponent,

    BotonComponent,

    PedirImagenComponent,

    PruebasComponent,
    PuntuacionPuComponent,
    ComentarioPuComponent,
    EdicionPuComponent,
    MensajeComponent,
  ],
  imports: [

    AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
