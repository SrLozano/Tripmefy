import { Component, OnInit, Input, Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router'; //Para redirigir a una página
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
@Input() public titulo:string;
  constructor(private authSvc : AuthService,
             private _route:ActivatedRoute, private route: Router, public dialog: MatDialog) {
    this.titulo = "";
   }

  ngOnInit(): void {
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
    const dialogRef = this.dialog.open(DialogOverviewNNotificationDialog, {
      width: '250px',
    });
  }
}


@Component({
  selector: 'dialog-overview-notification',
  templateUrl: 'dialog-overview-notification.html',
})
export class DialogOverviewNNotificationDialog { //FUNCIONES POP-UP NOTIFICATION

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewNNotificationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private authSvc : AuthService) {}

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