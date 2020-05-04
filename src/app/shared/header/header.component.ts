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

  public menuOpen = false; //indica si el menu esta abierto. (Solo util en vista movil)

  public solicitudes = [];
  public numberOfSolicitudes = 0;
  public mensajes = [];
  public numberOfMensajes = 0;
  
  //Esta variable escogera el numero a mostrar (solicitudes o mensajes)->Ir a OnInit
  public isViajero = false; 

  usuario:Usuario;
  
  ngOnInit(): void {

    /* IMPORTANTE-> El ngOnInit se vuelve a ejecutar con cada modificación de la bbdd en firebase */

    /*  Este pedazo de código obtiene el nombre de los nombres de las ciudades de cada una
    de las solicitudes realizadas por el usuario  */

    /*----------------- CASO VIAJERO--------------------- */

    if(localStorage.getItem('tipo') == 'viajero'){
      this.numberOfSolicitudes = 0;
      this.isViajero = true;
      this.firestoreServiceSolicitud.getSolicitudesByUserId(localStorage.getItem('usuario')).subscribe(res=>{
        var i;
        for (i = 0; i<res.length; i++){
          if(res[i].estado != "pendiente"){
            console.log("inicializado:onInit (getSolicitud): ", res[i].id);
            var añadir=true;
            var kk;
            for (kk=0; kk<this.mensajes.length;kk++){
              if(res[i].id == this.mensajes[kk].idSolicitud){
                añadir = false;
              }
            }if(añadir==true){
              this.numberOfMensajes = this.numberOfMensajes + 1;
              this.mensajes.push({idSolicitud: res[i].id, idViaje: res[i].idViaje, estado: res[i].estado, nombreViaje: "--"});
            }

            this.firestoreServiceViaje.getViaje(res[i].idViaje).then((elem) => {            
              var j;
              for (j=0; j<this.mensajes.length;j++){
                if(this.mensajes[j].idViaje == elem.id && this.mensajes[j].nombreViaje == "--"){
                  console.log("inicializado:onInit (getViaje): ", elem.ciudad);
                  this.mensajes[j].nombreViaje = elem.ciudad;
                }
              }
              
            });
            
          }
        }
      });
    }

    /*  Este pedazo de código obtiene el nombre del usuario cuyo organizador que está navegando
        en esta página ha organizado algún viaje, de manera que posteriormente podamos imprimir
        las solicitudes que deben ser aceptadas en un viaje por el organizador */

    /*----------------- CASO ORGANIZADOR--------------------- */
    
    this.firestoreServiceUser.getUsuario(localStorage.getItem('usuario')).then((elem) => {
      
      var organizadorEmail = elem.email;
      this.firestoreServiceSolicitud.getSolicitudesByOrganizadorEmail(organizadorEmail).subscribe(res=>{
        var i; 
        for (i = 0; i<res.length ; i++){
          if (res[i].estado=="pendiente"){
            console.log("inicializado:onInit (getSolicitud): ", res[i].id);
            var añadir=true;
            var kk;
            for (kk=0; kk<this.solicitudes.length;kk++){
              if(res[i].id == this.solicitudes[kk].idSolicitud){
                añadir = false;
              }
            }
            if(añadir==true){
              this.numberOfSolicitudes = this.numberOfSolicitudes + 1;
              this.solicitudes.push({nombre: "--", idSolicitud: res[i].id, idViajero: res[i].idUsuario});
            }
            //Nos quedamos con el nombre y el id del usuario de nuestras solicitudes:
            this.firestoreServiceUser.getUsuario(res[i].idUsuario).then((elem) => { 
              var j;
              for (j=0; j<this.solicitudes.length;j++){
                if(this.solicitudes[j].idViajero == elem.id && this.solicitudes[j].nombre == "--"){
                  this.solicitudes[j].nombre = elem.nombre;
                  console.log("inicializado:onInit (getUser): ", elem.nombre);
                }
              }
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
    /**
    if(localStorage.getItem('tipo') == 'organizador'){
      primero = 'perfil-organizador/';
    }else{
      primero = 'perfil-viajero/';
    }
    
    var segundo = localStorage.getItem('usuario');
    var destino = origin + primero + segundo;
    window.location.assign(destino);
    **/
   var perfil = localStorage.getItem('usuario');
   if(localStorage.getItem('tipo') == 'organizador'){
     var ruta = '/perfil-organizador/' + perfil;
    this.route.navigate([ruta]);
   }else{
    var ruta = '/perfil-viajero/' + perfil;
    this.route.navigate([ruta]);
   }
  }

  /* Redirigir a la página de privacidad pulsando sobre about us*/

  irAboutUs(){ 
    //  Obtenemos la parte de la izquierda de la url
  
    this.route.navigate(['/privacidad']);
  }

  toInicio(){
    this.route.navigate(['/mis-viajes']);
  }

  onLogout():void{
    this.authSvc.logOut();
  }

  /* Esta función rellena los arrays de solicitudes o de mensajes dependiendo de 
     si el usuario es organizador o viajero, de tal forma que sea posible mostrale
     notificaciones significativas. 

     IMPORTANTE!! SE USA SOLO CUANDO QUEREMOS OBTENER INFORMACIÓN DE LAS SOLICITUDES DE LA 
     BASE DE DATOS COMO EL ESTADO DE LA SOLICITUD O LOS IDS. La informacion relativa a estos
     ids la captamos anteriormente en el OnInit */
  
  onNotification():void{

    /*----------------- CASO ORGANIZADOR--------------------- */

    if(localStorage.getItem('tipo') == 'organizador'){
      
      document.getElementById("myForm").style.display = "block";

    /*----------------- CASO VIAJERO--------------------- */

    }else if(localStorage.getItem('tipo') == 'viajero'){
      
      document.getElementById("myFormViajero").style.display = "block";
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

  showMenuMovil():void{
    if (this.menuOpen == false){
      document.getElementById("myFormMenu").style.display = "block";
      this.menuOpen = true;
    }else if(this.menuOpen == true){
      document.getElementById("myFormMenu").style.display = "none";
      this.menuOpen = false;
    }else{
      console.log("error->Menu movil");
    }
    
  }

  /* Función que acepta a alguien en un viaje desde la vista del organizador*/

  accept(id:string):void{
    console.log("Has aceptado");
    //Borramos de la lista de solicitudes del organizador
    var i;
    for (i = 0; i<this.solicitudes.length;i++){
      if(this.solicitudes[i].idSolicitud == id){
        this.solicitudes.splice(i, 1);

        /*Ponemos a 0 debido a que todos los valores del array 
        son inicializados de nuevo en el OnInit, por tanto el número a mostrar
        estara siempre actualizado */
        this.numberOfSolicitudes = 0;  
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

        /*Ponemos a 0 debido a que todos los valores del array 
        son inicializados de nuevo en el OnInit, por tanto el número a mostrar
        estara siempre actualizado */
        this.numberOfSolicitudes = 0;
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
            //this.numberOfMensajes = 0;
            this.mensajes[i].estado = "pagado";
          }
        }

        this.firestoreServiceSolicitud.getSolicitudesByTripId(id).subscribe(res=>{
          var i;
          var new_solicitud:Solicitud = new Solicitud();
          for(i=0; i<res.length; i++){
            if(res[i].idUsuario == localStorage.getItem('usuario')){
              new_solicitud = res[i];
              new_solicitud.estado = "pagado";
              console.log("Paso a pagar")
              this.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
            }
          }  
        });
      }
}