import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { IUsuario } from '../interfaces/usuario';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  hide = true;
  loginForm = new FormGroup({
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),

  })
  constructor(private authSvc : AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form){
    this.authSvc.loginByEmail(form);

  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  email: string;
  apellido:string;
  nombre: string;


  matcher = new MyErrorStateMatcher();

}
