import { Component, OnInit, Input, Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router'; //Para redirigir a una página
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SolicitudFirestoreService} from '../../services/firestore/solicitud-firestore.service';
import {UsuarioFirestoreService} from '../../services/firestore/usuario-firestore.service';
import {HeaderFirestoreService} from '../../services/firestore/header-firestore.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { NgModule } from '@angular/core';
import { database } from 'firebase';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



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
              private firestoreServiceHeader: HeaderFirestoreService,
             private _route:ActivatedRoute, private route: Router, public dialog: MatDialog) {
    this.titulo = "";
   }

  public solicitudes = [];
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
        for (i = 0; i<res.length ; i++){
          //Nos quedamos con el nombre y el id del usuario de nuestras solicitudes:
          this.firestoreServiceUser.getUsuario(res[i].idUsuario).then((elem) => { 
            this.solicitudes.push({nombre: elem.nombre});
        });
        }
      });
    });  

    //  Se comunica el array de solicitudes con el html de dialog-overview-notifications.html
    this.firestoreServiceHeader.setArray(this.solicitudes);
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
    
    //ABRIR POP-UP AL PULSAR LOGOUT
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onNotification():void{
    var array_nombres = [];
    for (var i=0; i<this.solicitudes.length; i++){
      array_nombres.push(this.solicitudes[i].nombre);
    }
    const dialogRef = this.dialog.open(DialogOverviewNNotificationDialog, {
      width: '250px',
      data: {name: array_nombres}
    });
  }
}


@Component({
  selector: 'dialog-overview-notification',
  templateUrl: 'dialog-overview-notification.html',
})
export class DialogOverviewNNotificationDialog { //FUNCIONES POP-UP NOTIFICATION

  public solicitudes = [];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewNNotificationDialog>,
    private firestoreServiceHeader: HeaderFirestoreService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private authSvc : AuthService) {}
    
    ngOnInit(): void {
    //  Se comunica el array de solicitudes con el html de dialog-overview-notifications.html
    //solicitudes = this.firestoreServiceHeader.getArray();
    }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog { //FUNCIONES POP-UP LOGUT

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private authSvc : AuthService) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.authSvc.logOut();
    var pagInicio = window.location.origin + '/page1'; 
    window.location.assign(pagInicio);
  }

}