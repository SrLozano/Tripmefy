import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router'; //Para redirigir a una página


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() public titulo:string;
  constructor(private authSvc : AuthService,
             private _route:ActivatedRoute, private route: Router) {
    this.titulo = "";
   }

  ngOnInit(): void {
  }

  irPerfil(){
    var origin = window.location.origin + '/'; //obtenemos la parte de la izquierda de la url
    
    //var datos = window.location.pathname;
    //var routerLink = datos.split('/');

    var primero;

    if(localStorage.getItem('tipo') == 'organizador'){
      primero = 'perfil-organizador/';
    }else{
      primero = 'perfil-viajero/';
    }
    
    var segundo = localStorage.getItem('usuario');
    //var segundo = 'yhySIyMyRGwIqtwEeuZV';
    var destino = origin + primero + segundo;
   
    window.location.assign(destino);
  }

  toInicio(){
    this.route.navigate(['/mis-viajes']);
  }

  onLogout():void{
    this.authSvc.logOut();
  }

}