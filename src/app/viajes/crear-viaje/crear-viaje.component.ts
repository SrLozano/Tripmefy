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

  continentes = ["Europa","Asia","America del Norte","America del sur","America Central","Oceania","Africa"]
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
