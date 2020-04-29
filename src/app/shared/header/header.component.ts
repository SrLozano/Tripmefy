import { Component, OnInit, Input, Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router'; //Para redirigir a una página
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SolicitudFirestoreService} from '../../services/firestore/solicitud-firestore.service';
import {UsuarioFirestoreService} from '../../services/firestore/usuario-firestore.service';
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
             private _route:ActivatedRoute, private route: Router, public dialog: MatDialog) {
    this.titulo = "";
   }

  public solicitudes = [];
  public numberOfSolicitudes = 0;
  usuario:Usuario;

  animal: string;
  name: string;
  
  ngOnInit(): void {

    /*  Este pedazo de código obtiene el nombre del usuario cuyo organizador que está navegando
        en esta página ha organizado algún viaje, de manera que posteriormente podamos imprimir
        las solicitudes que deben ser aceptadas en un viaje por el organizador */

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

  onNotification():void{
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
  }

  close():void {
    document.getElementById("myForm").style.display = "none";
  }

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
}