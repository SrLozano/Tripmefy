import { PedirImagenComponent } from './../../shared/pedir-imagen/pedir-imagen.component';
import { IViaje, Viaje } from './../../interfaces/viaje';
import { FirestoreService } from './../../services/firestore/firestore.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router'; //Para redirigir a una página


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss']
})
export class CrearViajeComponent implements OnInit {

	// onFileChanged(event) {
  //   const file = event.target.files[0]
  // }

  // onUpload() {
  //   // Upload code goes here
  // }

  // addItem(item: string){
  //   this.opciones.push(item);
  // }

  // uploadFile($event) {
  //   console.log($event.target.files[0]); // outputs the first file
  // }

  constructor(private route: Router, private viajeService: FirestoreService) { }

  ngOnInit(): void {
  }

  @Output() foto: EventEmitter<string> = new EventEmitter<string>();


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

  continenteSelect: string;
  paisSelect: string;
  ciudadSelect: string;
  startDate: string;
  endDate: string;
  limitDate: string;
  limitPayDate: string;
  desc: string;
  email: string;
  telefono: string;
  prefijo:string;
  item:string;
  precio:string;
  maxpers:string;
  vuelo:boolean;
  alojamiento:boolean;
  comidas:boolean;
  miFoto = "";


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
    this.viajeService.createViaje(newViaje);
    this.route.navigate(['/mis-viajes']);


    //console.log("este es el viaje", newViaje)
  }
  chooseImagen(){
    document.getElementById("pedir-imagen").style.display = "block";
    document.getElementById("general").style.display = "none";
  }

  upImg(){

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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  telefFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  date1FormControl = new FormControl('', [
    Validators.required
  ]);

  date2FormControl = new FormControl('', [
    Validators.required
  ]);

  date3FormControl = new FormControl('', [
    Validators.required
  ]);

  date4FormControl = new FormControl('', [
    Validators.required
  ]);

  ciudadFormControl = new FormControl('', [
    Validators.required
  ]);


  matcher = new MyErrorStateMatcher();

}
