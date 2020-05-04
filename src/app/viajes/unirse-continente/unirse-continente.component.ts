import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-unirse-continente',
  templateUrl: './unirse-continente.component.html',
  styleUrls: ['./unirse-continente.component.scss']
})
export class UnirseContinenteComponent implements OnInit {

  clickMessage = '';

  constructor() { }
/** 
  establecerContinente(continente:string):void{
    alert(continente);
  }
  **/
  
 

  ngOnInit(): void {
    if(localStorage.getItem('usuario')== "null"){
      var origin = window.location.origin + '/'; 
      var destino = origin + "page1";
      window.location.assign(destino);
    }
    
  }
  

}
