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

    this.continente = 'Europa';
    this.identificador = 'europa';

    /**
    console.log(deviceValue);
    this._router.navigate(['//unirse-pais/', deviceValue]);
    this.identificador = deviceValue;
    this.continente = deviceValue; 
    switch(this.continente) { 
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
   **/
  

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
    this.continente = 'Europa';
    this.identificador = 'europa';
    /**
    let id = this._route.snapshot.paramMap.get('id');
    this.continente = id; 
    this.identificador = id;
    switch(this.continente) { 
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
   **/
  }

}
