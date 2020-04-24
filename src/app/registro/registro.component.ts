import { UsuarioFirestoreService } from './../services/firestore/usuario-firestore.service';
import { IUsuario, Usuario } from './../interfaces/usuario';
import { style } from '@angular/animations';
import { Router } from '@angular/router'; //Para redirigir a una página
import { AuthService } from './../services/auth.service'; //para registro en base de datos
import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  hide = true;
  checked = false;
  labelPosition: 'before' | 'after' = 'after';
  @Input() public error:string; 

  constructor(private route: Router, private authService: AuthService, private userService: UsuarioFirestoreService) { 
    this.error = "";
  }

  public nombre: string = '';
  public apellido: string = '';
  public email: string = '';
  public password: string = '';
  public password2: string = '';
  public tipo: string = '';
  public poblacion: string = '';
  public pais: string = '';
  public terminos: boolean = false;

  ngOnInit(): void {
  }

  onRegister(){
    
    document.getElementById("password1").style.color="white";
    document.getElementById("password2").style.color="white";
    document.getElementById("email").style.color="white";

    this.authService.registerUser(this.email, this.password) //almacenamos el usuario de registro en la bbdd (email y contraseña)
    .then((res)=> {
      var usuario:Usuario = new Usuario();
      usuario.nombre = this.nombre;
      usuario.apellidos = this.apellido;
      usuario.email = this.email;
      usuario.password = this.password;
      usuario.tipo = this.tipo;
      usuario.image = "";
      usuario.descripcion = "";
      usuario.ubicacion = this.MaysPrimera(this.poblacion.toLowerCase()) + ", " + this.MaysPrimera(this.pais.toLowerCase());
      this.userService.createUsuario(usuario);
      
      localStorage.setItem('tipo', this.tipo);

      this.route.navigate(['/bienvenida']);

    }).catch(err => {
      this.error = "Este usuario ya existe";
      document.getElementById("email").style.color="red";
    });
  }

  checkFields(){
    if (this.nombre==='' || this.apellido==='' || this.email==='' || this.password==='' || 
    this.password2==='' || this.poblacion==='' || this.pais==='' || this.tipo==='' || !this.terminos ){

      document.getElementById("password1").style.color="white";
      document.getElementById("password2").style.color="white";
      this.error = "Introduce los campos obligatorios";
      return true;
    }else if(this.password.localeCompare(this.password2) != 0){

        document.getElementById("password1").style.color="red";
        document.getElementById("password2").style.color="red";

        return true;
    }else if(this.password.length<8){

      this.error = "Introduce una contraseña de 8 caracteres";

      return true;
    }else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email) ){

      this.error = "Introduce el email en el formato correcto example@examle.com";
      
      return true;
    }else{
        this.error = "";
        document.getElementById("password1").style.color="white";
        document.getElementById("password2").style.color="white";

        return false;
    } 
  }

  MaysPrimera(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);

  apellidoFormControl = new FormControl('', [
    Validators.required,
  ]);

  poblacionFormControl = new FormControl('', [
    Validators.required,
  ]);
  paisFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  password2FormControl = new FormControl('', [
    Validators.required,
  ]);

  


  matcher = new MyErrorStateMatcher();


}
