import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

	onFileChanged(event) {
    const file = event.target.files[0]
  }

  onUpload() {
    // Upload code goes here
  }

  addItem(item: string){
    this.opciones.push(item);
  }

  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
  }

  constructor() { }

  ngOnInit(): void {
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

  // continentes = [["Europa", 1],["Asia",2],["America del Norte",3],["America del sur",4],["America Central",5],
  // ["Oceania",6],["Africa",7]]

  // paises =  [['España',1], ['Francia',1], ['Italia',1], ['Suecia',1], ['Alemania',1],
  //           ['Kazajistán',2], ['China',2], ['Corea del Norte',2], ['Corea del Sur',2], ['Japón',2],
  //           ['Canada',3], ['EEUU',4],
  //           ['Colombia',4], ['Venezuela',4], ['Argentina',4], ['Perú',4], ['Ecuador',4],
  //           ['Costa Rica',5], ['Salvador',5], ['Guatemala',5],
  //           ['Australia',6], ['Nueva Zelanda',6],
  //           ['Argelia,',7], ['Camerún',7], ['Burkina Fasso',7], ['Egipto',7], ['Marruecos',7]
  //           ];
  continenteSelect: string;
  paisSelect: string;
  ciudadSelect: string;
  startDate: string;
  endDate: string;
  limitDate: string;
  limitPayDate: string;
  descripcion: string;
  email: string;
  telefono: string;
  prefijo:string;
  item:string;

  opciones = ["Vuelo", "Alojamiento", "Comidas"];

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
