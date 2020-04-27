import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';
import {UsuarioFirestoreService} from '../../services/firestore/usuario-firestore.service';
import {OpinionesFirestoreService} from '../../services/firestore/opiniones-firestore.service';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {Subscription} from 'rxjs';
import {Viaje, IViaje} from '../../interfaces/viaje';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { ISolicitud,Solicitud } from '../../interfaces/solicitud';
import {SolicitudFirestoreService} from '../../services/firestore/solicitud-firestore.service';
import { Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss']
})

export class ViajeComponent implements OnInit {

  /* Array de prueba para los carouseles en caso de encontrarse offline

  public slides = [
    { src: "../../../assets/person-1.jpg"},
    { src: "../../../assets/person-2.jpg" },
    { src: "../../../assets/person-3.jpg" },
    { src: "../../../assets/person-4.jpg" },
    { src: "../../../assets/person-5.jpg" },
    { src: "../../../assets/person-6.jpg" }
  ];

  public slides2 = [
    { src: "../../../assets/Amsterdam-01.jpg"},
    { src: "../../../assets/Amsterdam-02.jpg" },
    { src: "../../../assets/Amsterdam-03.jpg" },
    { src: "../../../assets/Amsterdam-04.jpg" }
  ];
  */

  public slides3 = [];

  public solicitudes = [];

  public usuarios_viaje = [];
  public img_usuarios_viaje = [];

  public links: string[];


  public show = true;
  public payButton = false;
  public alreadyPaid = false;
  public pendingRequest = false;


  @ViewChild('imageUser') inputImageUser;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  myUrl = "";

  public viajes:Viaje[];
  viaje:Viaje;

  private db:AngularFirestore;
  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private storage: AngularFireStorage,
              private firestoreServiceUser: UsuarioFirestoreService,
              private firestoreServiceViaje: FirestoreService,
              private firestoreServiceOpiniones: OpinionesFirestoreService,
              private firestoreServiceSolicitud:SolicitudFirestoreService
              ) {
                
                /* Inicializaciones */
                this.viajes = [];
                this.viaje = new Viaje();
                this.solicitudes = [];
                this.usuarios_viaje = [];
               }

  /* Función que selecciona el tipo de botón a mostar al usuraio en un viaje
     Si el usuario no se ha apuntado y es viajero se le da la opción de apuntarse,
     si el usuario viajero no ha pagado pero está apuntado y aceptado puede pagar
     si el usuario ya ha pagado no se le muestran los botones pues no los necesita*/

  showButtonJoin(solicitudes:Solicitud[]){
    if(localStorage.getItem('tipo') == 'organizador'){
      this.show = false;
    }else{ // Es tipo viajero y hay que mirar las solicitudes
      for(var i=0; i<solicitudes.length; i++){
        if(solicitudes[i].idUsuario == localStorage.getItem('usuario') ){
          this.show=false; // El usuario ya se ha apuntado luego se elimina la posibilidad
          if(solicitudes[i].estado == 'pendiente'){
            this.pendingRequest=true;  //Mostramos de esperar confirmación
          } else if(solicitudes[i].estado == 'aceptado'){
              this.pendingRequest=false;  //Mostramos de esperar confirmación
              this.payButton=true;  //Mostramos botón de pago
          } else if(solicitudes[i].estado == 'pagado'){
              this.payButton=false; // No mostramos botón pago si ya ha pagado
              this.alreadyPaid = true; // Activamos mensaje de confimración de pago
          }
        }
      }
    }
  }   
  
  /*  Función que une a una persona a la base de datos en el apartado de solicitues para el viaje en cuestión
      Se activa al pinchar sobre el botón de unirse */

  unirse(){
      var new_solicitud:Solicitud = new Solicitud();
      new_solicitud.idUsuario = localStorage.getItem('usuario');
      new_solicitud.idViaje = this._route.snapshot.paramMap.get('id');
      new_solicitud.estado = "pendiente";
      this.firestoreServiceUser.getUsuariosByEmail(this.viaje.email).subscribe(res=>{ //Para coger el idOrganizador
        new_solicitud.idOrganizador = res[0].email;
        this.firestoreServiceSolicitud.createSolicitud(new_solicitud);
      });
  }

  /*  Función que une actualiza en la solicitud de la persona el estado de aceptado a pagado
      Se activa al pinchar sobre el botón de pagar */

  pagar(){
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
  }

  ngOnInit(): void {

    // El viaje a Roma es: lWdwEvTbnVAptd1xpr3Z

    // Obtenemos el id a partir de la ruta de forma automática
    var tripId = this._route.snapshot.paramMap.get('id');
    
    /*SI SE INTENTA ACCEDER A ESTA PAGINA SIN HABER INICIADO SESION RETORNAREMOS
    A LA PAGINA PRINCIPAL */
    if (localStorage.getItem('usuario')==null){
      localStorage.clear();
      console.log("Any user is logged");
      var pagInicio = window.location.origin + '/page1'; 
      window.location.assign(pagInicio);
    }
    
    var tripAux = this.firestoreServiceViaje.getViaje(tripId).then((elem) => {

      var tripAux:Viaje = new Viaje();
      tripAux.continente = elem.continente;
      tripAux.ciudad = elem.ciudad;
      tripAux.descripcion = elem.descripcion;
      tripAux.duracion = elem.duracion;
      tripAux.email = elem.email;
      tripAux.fin = elem.fin;
      tripAux.id = elem.id;
      tripAux.img = elem.img;
      tripAux.inicio = elem.inicio;
      tripAux.limitePago = elem.limitePago;
      tripAux.limiteUnion = elem.limiteUnion;
      tripAux.maximo = elem.maximo;
      tripAux.pais = elem.pais;
      tripAux.precio = elem.precio;
      tripAux.servicios = elem.servicios;
      tripAux.tlf = elem.tlf;
      tripAux.unidas = elem.unidas;
      tripAux.viajeros = elem.viajeros;

      this.viaje = tripAux;

      /* Esta función devuelve un array de imágenes para el viaje en el que nos encontremos*/

      this.firestoreServiceViaje.getSlides(this.viaje.id).subscribe(res=>{
        this.slides3 = [];
          var i;
          for (i = 0; i<res.length ; i++){
            this.slides3.push({src: res[i].url});
          }
      });

      /* Esta función devuelve el array de solicitudes de un viaje */
        this.firestoreServiceSolicitud.getSolicitudesByTripId(this.viaje.id).subscribe(res=>{
          this.solicitudes = []
          var i;
          for(i=0; i<res.length; i++){
            this.solicitudes.push({idUsuario: res[i].idUsuario, estado: res[i].estado});
          }

          // Mostaremos el botón de unirse si el usuario no tiene el viaje entre sus solicitures y es viajero
          this.showButtonJoin(this.solicitudes);

          /* Esta función devuelve un array con las imagenes de los usuarios en un viaje */
          this.firestoreServiceUser.getUsuarios().subscribe(res=>{
          this.usuarios_viaje = []
          var i, j;
          // Se recorre el array de solicitudes
          for(i=0; i<this.solicitudes.length; i++){ 
            // Recorremos la base de datos
            for(j=0; j<res.length; j++){ 
              // Encontramos el usuario de la solicitud
              if(this.solicitudes[i].idUsuario == res[j].id && this.solicitudes[i].estado != "pendiente"){ 
                // Guardamos las imagenes para el carousel
                this.usuarios_viaje.push({src: res[j].image});
                if (res[j].tipo == 'viajero') {
                  this.img_usuarios_viaje.push(['perfil-viajero',res[j].id]);
                }else{
                  this.img_usuarios_viaje.push(['perfil-organizador',res[j].id]);
                }
              }
            } 
          }
        });    
      });
    
   });
  }
}