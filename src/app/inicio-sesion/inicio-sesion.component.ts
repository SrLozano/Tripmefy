import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioFirestoreService } from './../services/firestore/usuario-firestore.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; //Para redirigir a una página


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  public hide = true;

  constructor(private route: Router, private authSvc : AuthService, private userService: UsuarioFirestoreService) { }

  public password:string;
  public email:string;

 
  ngOnInit(): void {
  }

  back(){
    this.route.navigate(['/page1']);
  }

  onLogin(){
    var form:Usuario = new Usuario();
    form.email = this.email;
    form.password = this.password;
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

}
