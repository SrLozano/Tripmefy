import { Component, OnInit, Input, Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router'; //Para redirigir a una página
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SolicitudFirestoreService} from '../../services/firestore/solicitud-firestore.service';
import {UsuarioFirestoreService} from '../../services/firestore/usuario-firestore.service';
import {FirestoreService} from '../../services/firestore/firestore.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { NgModule } from '@angular/core';
import { database } from 'firebase';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ISolicitud,Solicitud } from '../../interfaces/solicitud';

export interface DialogData {
  name: string[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
@Input() public titulo:string;
  constructor(private authSvc : AuthService,
              private firestoreServiceSolicitud:SolicitudFirestoreService,
              private firestoreServiceUser: UsuarioFirestoreService,
              private firestoreServiceViaje: FirestoreService,
             private _route:ActivatedRoute, private route: Router, public dialog: MatDialog) {
    this.titulo = "";
   }

  public solicitudes = [];
  public numberOfSolicitudes = 0;
  public mensajes = [];
  public numberOfMensajes = 0;
  
  //Esta variable escogera el numero a mostrar (solicitudes o mensajes)->Ir a OnInit
  public isViajero = false; 

  usuario:Usuario;

  public payButton = true;
  public alreadyPaid = false;
  
  ngOnInit(): void {

    /*  Este pedazo de código obtiene el nombre del usuario cuyo organizador que está navegando
        en esta página ha organizado algún viaje, de manera que posteriormente podamos imprimir
        las solicitudes que deben ser aceptadas en un viaje por el organizador */
    
    if(localStorage.getItem('tipo') == 'viajero'){
      this.numberOfSolicitudes = 0;
      this.isViajero = true;
      this.firestoreServiceSolicitud.getSolicitudesByUserId(localStorage.getItem('usuario')).subscribe(res=>{
        var i;
        for (i = 0; i<res.length; i++){
          if(res[i].estado == "aceptado"){
            console.log("inicializado:onInit");
            this.numberOfMensajes = this.numberOfMensajes + 1;
            
            this.firestoreServiceViaje.getViaje(res[i].idViaje).then((elem) => {
              this.mensajes.push({idViaje: "--", nombreViaje: elem.ciudad});
            });
            
          }
        }
      });
    }
    

    this.firestoreServiceUser.getUsuario(localStorage.getItem('usuario')).then((elem) => {
      var organizadorEmail = elem.email;
      this.firestoreServiceSolicitud.getSolicitudesByOrganizadorEmail(organizadorEmail).subscribe(res=>{
        var i; 
        this.numberOfSolicitudes = res.length;
        for (i = 0; i<res.length ; i++){
          if (res[i].estado=="pendiente"){
            //Nos quedamos con el nombre y el id del usuario de nuestras solicitudes:
            this.firestoreServiceUser.getUsuario(res[i].idUsuario).then((elem) => { 
              this.solicitudes.push({nombre: elem.nombre, idSolicitud: "--"});
            });
          }
        }
      });
    });  
    
  }

  /* Redirigir a la página de perfil pulsando sobre perfil */

  irPerfil(){

    //  Obtenemos la parte de la izquierda de la url
    var origin = window.location.origin + '/'; 
    var primero;

    if(localStorage.getItem('tipo') == 'organizador'){
      primero = 'perfil-organizador/';
    }else{
      primero = 'perfil-viajero/';
    }
    
    var segundo = localStorage.getItem('usuario');
    var destino = origin + primero + segundo;
    window.location.assign(destino);
  }

  /* Redirigir a la página de privacidad pulsando sobre about us*/

  irAboutUs(){ 
    //  Obtenemos la parte de la izquierda de la url
    var origin = window.location.origin + '/'; 
    var primero = "privacidad" ;
    var destino = origin + primero
    window.location.assign(destino);
  }

  toInicio(){
    this.route.navigate(['/mis-viajes']);
  }

  onLogout():void{
    this.authSvc.logOut();
  }

  /* Esta función rellena los arrays de solicitudes o de mensajes dependiendo de 
     si el usuario es organizador o viajero, de tal forma que sea posible mostrale
     notificaciones significativas. */
  
  onNotification():void{

    if(localStorage.getItem('tipo') == 'organizador'){
      this.firestoreServiceUser.getUsuario(localStorage.getItem('usuario')).then((elem) => {
        var organizadorEmail = elem.email;
        this.firestoreServiceSolicitud.getSolicitudesByOrganizadorEmail(organizadorEmail).subscribe(res=>{
          var i; 
          this.numberOfSolicitudes = res.length;
          for (i = 0; i<this.solicitudes.length ; i++){
            this.solicitudes[i].idSolicitud = res[i].id;
          }
        });
      });
      document.getElementById("myForm").style.display = "block";
    }else if(localStorage.getItem('tipo') == 'viajero'){
      this.firestoreServiceSolicitud.getSolicitudesByUserId(localStorage.getItem('usuario')).subscribe(res=>{
        var i;
        for (i = 0; i<res.length; i++){
          if(res[i].estado == "aceptado"){
            this.mensajes[i].idViaje = res[i].id;
            
          }
        }
      });
      document.getElementById("myFormViajero").style.display = "block";
    }
    
    var i;
    for (i = 0; i<this.mensajes.length; i++){
      //console.log(this.mensajes[i].idViaje);
      /*
      this.firestoreServiceViaje.getViaje(this.mensajes[i].idViaje).then((elem) => {
        console.log(this.mensajes[i].idViaje);
        this.mensajes[i].nombreViaje = elem.ciudad;
        console.log(elem.ciudad);
      });*/
      //this.mensajes = this.firestoreServiceViaje.getViajeName(this.mensajes, this.mensajes[i].idViaje);
    }  
    //console.log(this.mensajes[0].idViaje);
  }

  /* Esta pareja de funciones se encarga de limpiar los arrays para que no se acumulen los resultados
    y de cerrar los popups asociados. */

  close():void {
    document.getElementById("myForm").style.display = "none";
  }

  close1():void {
    document.getElementById("myFormViajero").style.display = "none";
  }

  /* Función que acepta a alguien en un viaje desde la vista del organizador*/

  accept(id:string):void{
    console.log("Has aceptado");
    //Borramos de la lista de solicitudes del organizador
    var i;
    for (i = 0; i<this.solicitudes.length;i++){
      if(this.solicitudes[i].idSolicitud == id){
        this.solicitudes.splice(i, 1);
      }
    }

    //Actualizamos la solicitud en la base de datos
    var new_solicitud:Solicitud = new Solicitud();
    this.firestoreServiceSolicitud.getSolicitud(id).then((elem) => {
      new_solicitud = elem;
      new_solicitud.estado = "aceptado";
      this.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
    });
  }

  /* Función que rechaza a alguien en un viaje desde la vista del organizador, 
     el viajero se queda en casa. */

  aCasa(id:string):void{
    console.log("Has rechazado");
    //Borramos de la lista de solicitudes del organizador
    var i;
    for (i = 0; i<this.solicitudes.length;i++){
      if(this.solicitudes[i].idSolicitud == id){
        this.solicitudes.splice(i, 1);
      }
    }
    //Actualizamos la solicitud en la base de datos
    var new_solicitud:Solicitud = new Solicitud();
    this.firestoreServiceSolicitud.getSolicitud(id).then((elem) => {
      new_solicitud = elem;
      new_solicitud.estado = "rechazado";
      this.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
    });
  }

   /*  Función que une actualiza en la solicitud de la persona el estado de aceptado a pagado
      Se activa al pinchar sobre el botón de pagar */

      pagar(id:string){
        var i;
        for (i = 0; i<this.mensajes.length;i++){
          if(this.mensajes[i].idViaje == id){
            // SI QUEREMOS QUE SE ELIMINE EL MENSAJE NADA MAS DARLE AL BOTON DE PAGAR DESCOMENTAR ESTO
            //this.mensajes.splice(i, 1);  
            this.numberOfMensajes = this.numberOfMensajes -1;
          }
        }

        this.firestoreServiceSolicitud.getSolicitudesByTripId(this._route.snapshot.paramMap.get('id')).subscribe(res=>{
          var i;
          var new_solicitud:Solicitud = new Solicitud();
          for(i=0; i<res.length; i++){
            if(res[i].idUsuario == localStorage.getItem('usuario')){
              new_solicitud = res[i];
              new_solicitud.estado = "pagado";
              this.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
            }
          }  
        });
        this.payButton=false;      // No mostramos botón pago si ya ha pagado
        this.alreadyPaid = true;   // Activamos mensaje de confimración de pago
      }
}