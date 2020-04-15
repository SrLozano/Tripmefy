import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilOrganizadorComponent } from './perfiles/perfil-organizador/perfil-organizador.component';
import { PerfilViajeroComponent } from './perfiles/perfil-viajero/perfil-viajero.component';
import { CrearViajeComponent } from './viajes/crear-viaje/crear-viaje.component';
import { MisViajesComponent } from './viajes/mis-viajes/mis-viajes.component';
import { UnirseCiudadComponent } from './viajes/unirse-ciudad/unirse-ciudad.component';
import { UnirsePaisComponent } from './viajes/unirse-pais/unirse-pais.component';
import { UnirseContinenteComponent } from './viajes/unirse-continente/unirse-continente.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { LogrosComponent } from './logros/logros.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
const routes: Routes = [
  {path:'page1', component:Page1Component},
  {path:'inicio-sesion', component:InicioSesionComponent},
  {path:'registro', component:RegistroComponent},
  {path:'perfil-organizador', component:PerfilOrganizadorComponent},
  {path:'perfil-viajero', component:PerfilViajeroComponent},
  {path:'crear-viaje', component:CrearViajeComponent},
  {path:'mis-viajes', component:MisViajesComponent},
  {path:'unirse-ciudad/:id', component:UnirseCiudadComponent},
  {path:'unirse-pais', component:UnirsePaisComponent},
  {path: 'unirse-continente', component:UnirseContinenteComponent},
  {path:'viaje/:id', component:ViajeComponent},
  {path:'privacidad', component:PrivacidadComponent},
  {path:'not-found404', component: NotFound404Component},
  {path: 'logros', component: LogrosComponent},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'page1'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }