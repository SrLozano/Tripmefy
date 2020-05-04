import { CrearViajeComponent } from './../crear-viaje/crear-viaje.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';
import { HAMMER_LOADER } from '@angular/platform-browser';
import {SolicitudFirestoreService} from '../../services/firestore/solicitud-firestore.service';
import {Viaje, IViaje} from '../../interfaces/viaje';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {UsuarioFirestoreService} from '../../services/firestore/usuario-firestore.service';
import { PreloadAllModules } from '@angular/router';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.scss']
})
export class MisViajesComponent implements OnInit {
  
  

  title = 'España';
  estePais = "";
  precio = "Todos";
  escogidas = [];
  buscar = "";
  ciudadesId = [];
  ciudades = [];
  estaVacio(){
    return this.escogidas.length < 1;
  }


  busqueda(){
    
    var i;
    var selec;
    this.escogidas = [];
    for (i = 0; i < this.ciudades.length; i++) {
      // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
      //console.log(this.estePais);
      selec = this.filtro(i);
      if(selec != -1 && selec['ciudad'].toUpperCase().includes(this.buscar.toUpperCase())){
        this.escogidas.push(selec);
      }
     
    };
  }

  filtrar(){
    var i;
    var selec;
    this.escogidas = [];
    for (i = 0; i < this.ciudades.length; i++) {
      // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
      //console.log(this.estePais);
      selec = this.filtro(i);
      if(selec != -1){
        this.escogidas.push(selec);
      }
      

    };
  }

  filtro(i:number): any{
    var ciudad = this.ciudades[i];
    //solo metemos los viajes del pais escogido
    
        
    switch(this.precio){
      case "Hasta 100€":
        if (parseInt(ciudad['precio'].substr(0,3)) <= 100 ){
          //this.escogidas.push(ciudad);
          return ciudad;
        }
        break;
      case "Hasta 300€":
        if (parseInt(ciudad['precio'].substr(0,3)) <= 300 ){
          //this.escogidas.push(ciudad);
          return ciudad;
        }
        break;
      case "Hasta 500€":
        if (parseInt(ciudad['precio'].substr(0,3)) <= 500 ){
          //this.escogidas.push(ciudad);
          return ciudad;
        }
        break;
      default:  
          //this.escogidas.push(ciudad);
          return ciudad;
        break; 
    }
    return -1;
  }
  
  //ciudades = [['Sevilla', 'hola'], ['Barcelona'], ['Galicia'], ['Madrid']];
  
  myciudad= this.ciudades[0];

  constructor(private _route:ActivatedRoute, 
              private _router: Router,
              private firestoreServiceSolicitud: SolicitudFirestoreService,
              private firestoreService: FirestoreService,
              private firestoreServiceUser: UsuarioFirestoreService,) {
                this.ciudades = [];
                this.escogidas = [];
               }

  ngOnInit(): void {
    //let dato = JSON.parse(localStorage.getItem('pais'));

    if(localStorage.getItem('usuario')== "null"){
      var origin = window.location.origin + '/'; 
      var destino = origin + "page1";
      window.location.assign(destino);
    }
    
    //let id = localStorage.getItem('pais');
    this.escogidas = this.ciudades;
    
    /**SI EL USUARIO ES VIAJERO
     * Deben buscarse las solicitudes del usuario y meter los datos de sus viajes en el array
     */
    if(localStorage.getItem('tipo') == 'viajero'){
        this.escogidas = [];
        this.ciudades = [];
        this.firestoreServiceSolicitud.getSolicitudesByUserId(localStorage.getItem('usuario')).subscribe(res=>{
            var i;
            this.ciudadesId = [];
            for (i = 0; i < res.length ; i++){
              this.ciudadesId.push(res[i].idViaje);
            }
            
            //console.log(this.ciudadesId);
            for(i = 0; i < this.ciudadesId.length ; i++){
              if(res[i].estado != "pendiente" && res[i].estado != "rechazado" ){
                  this.firestoreService.getViaje(this.ciudadesId[i]).then(elem=>{
                  
                    
                    this.ciudades.push(elem);
                    this.escogidas.push(elem);

                    
                    //una vez estan todos los viajes al pais seleccionado metidos en el array, los filtros funcionan correctamente
                    }
                  
                   );
                }
              }
          });
      }

    /**SI EL USUARIO ES ORGANIZADOR
     * Deben buscarse su email y buscar aquellos viajes que tengan como email el email del organizador
     */
    if(localStorage.getItem('tipo') == 'organizador'){
      this.escogidas = [];
      this.ciudades = [];
      this.firestoreServiceUser.getUsuariosFiltered(localStorage.getItem('usuario')).subscribe(res=>{
        var email = res[0].email;
        
        this.firestoreService.getViajesByEmail(email).subscribe(elem=>{
          var i;
          for(i = 0; i<elem.length ; i++){
            //console.log(elem[i].descripcion);
            this.ciudades.push(elem[i]);
            this.escogidas.push(elem[i]);
            //console.log(this.ciudades[i].descripcion);
          }
          
        });
      });
      }

    }

  
  comprobarViajero(){
    return localStorage.getItem('tipo') == "viajero";
  }
  comprobarOrganizador(){
    return localStorage.getItem('tipo') == "organizador";
  }



}
