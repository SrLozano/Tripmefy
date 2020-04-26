import { UsuarioFirestoreService } from './../services/firestore/usuario-firestore.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; //Para redirigir a una página



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
  constructor(private route: Router, private authSvc : AuthService, private userService: UsuarioFirestoreService) { }

  password:string;

  ngOnInit(): void {
  }

  back(){
    this.route.navigate(['/page1']);
  }

  onLogin(form){
    this.authSvc.loginByEmail(form);
    this.userService.getUsuariosByEmail(this.email).subscribe(res=>{
      var i;
        for(i=0; i<res.length; i++){ //nunca va a haber más de un usuario con ese email
          localStorage.setItem("usuario", res[i].id);
          localStorage.setItem("tipo", res[i].tipo);
        }
      })  
  }

  checkFields(){
    if (this.password==='' || this.email === '' || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email)){

      return true;
    }else{
        return false;
    } 
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  email: string;
  apellido:string;
  nombre: string;


  matcher = new MyErrorStateMatcher();

}
