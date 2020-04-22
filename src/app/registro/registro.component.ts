import { UsuarioFirestoreService } from './../services/firestore/usuario-firestore.service';
import { IUsuario, Usuario } from './../interfaces/usuario';
import { style } from '@angular/animations';
import { Router } from '@angular/router'; //Para redirigir a una página
import { AuthService } from './../services/auth.service'; //para registro en base de datos
import { Component, OnInit } from '@angular/core';
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
  
  constructor(private route: Router, private authService: AuthService, private userService: UsuarioFirestoreService) { }

  public nombre: string = '';
  public apellido: string = '';
  public email: string = '';
  public password: string = '';
  public password2: string = '';
  public tipo: string = '';

  ngOnInit(): void {
  }

  onRegister(){
    if(this.password.localeCompare(this.password2) != 0){ //comprobamos la igualdad de las contraseñas
      document.getElementById("password1").style.color="red";
      document.getElementById("password2").style.color="red";
    }else{
      document.getElementById("password1").style.color="white";
      document.getElementById("password2").style.color="white";

      this.authService.registerUser(this.email, this.password) //almacenamos el usuario de registro en la bbdd (email y contraseña)
      .then((res)=> {
        this.route.navigate(['/bienvenida']);
       
        var usuario:Usuario = new Usuario();

        usuario.nombre = this.nombre;
        usuario.apellidos = this.apellido;
        usuario.email = this.email;
        usuario.password = this.password;
        usuario.tipo = this.tipo;
        
        this.userService.createUsuario(usuario);
        
        localStorage.setItem('tipo', this.tipo);
      }).catch(err => console.log('errooooooor\n', err.message));

  
    }
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  


  matcher = new MyErrorStateMatcher();


}
