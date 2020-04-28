import { UsuarioFirestoreService } from './../../services/firestore/usuario-firestore.service';
import { Viaje } from './../../interfaces/viaje';
import { FirestoreService } from './../../services/firestore/firestore.service';
import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router'; //Para redirigir a una página


@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss']
})
export class CrearViajeComponent implements OnInit {

  @Output() foto: EventEmitter<string> = new EventEmitter<string>();

  constructor(private route: Router, private viajeService: FirestoreService, private userService: UsuarioFirestoreService) { 
   
  }

  ngOnInit(): void {
     if(!localStorage.getItem('usuario') || 0 === localStorage.getItem('usuario').length){
      this.route.navigate(['/page1']);
    }
    this.userService.getUsuariosFiltered(localStorage.getItem('usuario')).subscribe(res=>{
        this.email = res[0].email;      
    })
  }



  continentes = ["Europa", "Asia" ,"America del Norte" ,"America del Sur","America Central",
  "Oceania","Africa"];

  europa = ['España', 'Francia', 'Italia', 'Suecia', 'Alemania'];
  asia = ['Kazajistán', 'China', 'Corea del Norte', 'Corea del Sur', 'Japón'];
  americaNorte = ['Canada', 'EEUU'];
  americaSur = ['Colombia', 'Venezuela', 'Argentina', 'Perú', 'Ecuador'];
  americaCentro = ['Costa Rica', 'Salvador', 'Guatemala'];
  oceania = ['Australia', 'Nueva Zelanda'];
  africa = ['Argelia,', 'Camerún', 'Burkina Fasso', 'Egipto', 'Marruecos'];

  paises = [];

  public continenteSelect: string = "";
  public paisSelect: string = "";
  public ciudadSelect: string = "";
  public startDate: string = "";
  public endDate: string = "";
  public limitDate: string = "";
  public limitPayDate: string = "";
  public desc: string = "";
  public email: string = "";
  public telefono: string = "";
  public prefijo:string = "";
  public item:string = "";
  public precio:string = "";
  public maxpers:string = "";
  public vuelo:boolean = false;
  public alojamiento:boolean = false;
  public comidas:boolean = false;
  public miFoto = "";


  onCreate(){
    
    var newViaje:Viaje = new Viaje();
    newViaje.ciudad = this.ciudadSelect;
    newViaje.continente = this.continenteSelect;
    newViaje.descripcion = this.desc;
    newViaje.email = this.email; 
    newViaje.fin = this.endDate;
    newViaje.img = this.miFoto;
    newViaje.inicio = this.startDate
    newViaje.limitePago = this.limitPayDate;
    newViaje.limiteUnion = this.limitDate;
    newViaje.maximo = this.maxpers;
    newViaje.pais = this.paisSelect;
    newViaje.precio = this.precio;
    newViaje.tlf = '+' + this.prefijo + ' ' + this.telefono;
    newViaje.servicios = '';
    newViaje.viajeros = '';
  
    if(this.vuelo){
      newViaje.servicios += 'Vuelo,';
    }
    if(this.alojamiento){
      newViaje.servicios += 'Alojamiento,';
    }
    if(this.comidas){
      newViaje.servicios += 'Comidas,';
    }
    alert("El viaje se ha creado correctamente");
    this.route.navigate(['/mis-viajes']);
  }


  chooseImagen(){
    document.getElementById("pedir-imagen").style.display = "block";
    document.getElementById("general").style.display = "none";
  }

  setImagen(e){
    this.miFoto = e;
    
  }

  cerrarPopup(e, id){
    if(e == true){
      document.getElementById(id).style.display = "none";
      document.getElementById("general").style.display = "block";
    }
  }

  back(){
    this.route.navigate(['/mis-viajes']);
  }

  getPais(){
    
    if(this.continenteSelect===''){
      return this.paises;
    }
    if(this.continenteSelect === 'Europa'){
      return this.europa;
    }else if(this.continenteSelect === 'Asia'){
        return this.asia;
    }else if(this.continenteSelect === 'America del Norte'){
       return  this.americaNorte;
    }else if(this.continenteSelect === 'America del Sur'){
      return  this.americaSur;
    }else if(this.continenteSelect ==='America Central'){
      return  this.americaCentro;
    }else if(this.continenteSelect ==='Oceania'){
      return  this.oceania;
    }else if(this.continenteSelect === 'Africa'){
      return this.africa;
    }else{
      return this.paises;
    }
  
  }

  checkFields(){
  
    if (this.ciudadSelect==='' || this.continenteSelect==='' || this.desc==='' || 
    this.endDate==='' || this.startDate==='' || this.limitPayDate==='' || this.limitDate==='' 
    || this.maxpers === '' || this.precio === '' || this.paisSelect === '' || this.telefono === '' || this.prefijo===''){
      
      document.getElementById("error").style.display="block";
      document.getElementById("error_img").style.display="block";
      document.getElementById("error1").style.display="block";
      document.getElementById("error2").style.display="none";
      document.getElementById("error3").style.display="none";
      return true;
    }else if(this.miFoto===''){
      document.getElementById("error").style.display="block";
      document.getElementById("error_img").style.display="block";
      document.getElementById("error2").style.display="block";
      document.getElementById("error1").style.display="none";
      document.getElementById("error3").style.display="none";
      return true;
    }else if (this.telefono.length<9 || this.prefijo.length<2){
      document.getElementById("error").style.display="block";
      document.getElementById("error_img").style.display="block";
      document.getElementById("error3").style.display="block";
      document.getElementById("error2").style.display="none";
      document.getElementById("error1").style.display="none";
      return true;
    }else{
      document.getElementById("error").style.display="none";
      document.getElementById("error_img").style.display="none";
      document.getElementById("error3").style.display="none";
      document.getElementById("error2").style.display="none";
      document.getElementById("error1").style.display="none";
      return false;
    } 
  }


}
