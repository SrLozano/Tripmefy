import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-unirse-pais',
  templateUrl: './unirse-pais.component.html',
  styleUrls: ['./unirse-pais.component.scss']
})
export class UnirsePaisComponent implements OnInit {

  onChange(deviceValue) {
    console.log(deviceValue);
    localStorage.setItem('continente', deviceValue);
    this.identificador = localStorage.getItem('continente');
    this.continente = this.identificador;
    
    
    this.continente = deviceValue; 
    switch(this.identificador) { 
      case 'europa': { 
         this.continentes[0] = this.europa;
         this.continente = 'Europa';
         break; 
      } 
      case 'america-norte': { 
         this.continentes[0] = this.americaNorte;
         this.continente = 'América del Norte';
         break; 
      } 
      case 'america-sur': { 
        this.continentes[0] = this.americaSur;
        this.continente = 'América del Sur';
        break; 
     } 
     case 'america-centro': { 
      this.continentes[0] = this.americaCentro;
      this.continente = 'América Central';
      break; 
     } 
     case 'africa': { 
      this.continentes[0] = this.africa;
      this.continente = 'África';
      break; 
    } 
    case 'asia': { 
      this.continentes[0] = this.asia;
      this.continente = 'Asia';
      break; 
    } 
    case 'oceania': { 
      this.continentes[0] = this.oceania;
      this.continente = 'Oceanía';
      break; 
    } 
      default: { 
        this.continente = 'Europa';  
        this.identificador = "europa";
         break; 
      } 
      
   }
   
  

}

  constructor(private _route:ActivatedRoute, private _router: Router) {
    
  }

  

    identificador:string;
    continente:string;
    numContinente:number;
    americaNorte = [
      {
        "pais": "Francia",
        "imagen": "fr.png"
      }
    ];
    americaCentro = [
      {
        "pais": "Hungría",
        "imagen": "hu.png"
      }
    ];
    americaSur = [
      {
        "pais": "Francia",
        "imagen": "fr.png"
      }
    ];
    asia = [
      {
        "pais": "Italia",
        "imagen": "zw.png"
      }
    ];
    africa = [
      {
        "pais": "Francia",
        "imagen": "fr.png"
      }
    ];
    oceania = [
      {
        "pais": "España",
        "imagen"  : "sp.png"
      }
    ];
    europa = [
      {
        "pais": "España",
        "imagen"  : "sp.png"
      },
      {
        "pais": "Italia",
        "imagen": "zw.png"
      },
      {
        "pais": "Francia",
        "imagen": "fr.png"
      },
      {
        "pais": "España",
        "imagen": "sp.png"
      },
      {
        "pais": "Italia",
        "imagen": "zw.png"
      },
      {
        "pais": "Francia",
        "imagen": "fr.png"
      },
      {
        "pais": "Hungría",
        "imagen": "hu.png"
      }
    ];
    
    continentes = [this.europa];
    elem = this.continentes[this.numContinente];

  ngOnInit(): void {

    

    this.identificador = localStorage.getItem('continente');
    this.continente = this.identificador;
    this.continente[0].toUpperCase();
    
    
      
    switch(this.identificador) { 
      case 'europa': { 
         this.continentes[0] = this.europa;
         this.continente = 'Europa';
         break; 
      } 
      case 'america-norte': { 
         this.continentes[0] = this.americaNorte;
         this.continente = 'América del Norte';
         break; 
      } 
      case 'america-sur': { 
        this.continentes[0] = this.americaSur;
        this.continente = 'América del Sur';
        break; 
     } 
     case 'america-centro': { 
      this.continentes[0] = this.americaCentro;
      this.continente = 'América Central';
      break; 
     } 
     case 'africa': { 
      this.continentes[0] = this.africa;
      this.continente = 'África';
      break; 
    } 
    case 'asia': { 
      this.continentes[0] = this.asia;
      this.continente = 'Asia';
      break; 
    } 
    case 'oceania': { 
      this.continentes[0] = this.oceania;
      this.continente = 'Oceanía';
      break; 
    } 
      default: { 
        this.continente = 'Europa';  
         break; 
      } 
   }
   
  }
  
  establecerPais(){
     //onclick="localStorage.setItem('pais', pais['pais'])"
     //[routerLink]="['/unirse-ciudad']"
  }
  

}
