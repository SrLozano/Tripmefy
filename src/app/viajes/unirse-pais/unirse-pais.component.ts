import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-unirse-pais',
  templateUrl: './unirse-pais.component.html',
  styleUrls: ['./unirse-pais.component.scss']
})
export class UnirsePaisComponent implements OnInit {

  escogidos = [];
  buscar = "";

  hayPais():boolean{
    return this.escogidos.length > 0;
  }
  busqueda(){
    var i;
    var pais;
    this.escogidos = [];
    for (i = 0; i < this.continentes[0].length; i++) {
      // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
      //console.log(this.estePais);
      pais = this.continentes[0][i];
      if(pais['pais'].toUpperCase().includes(this.buscar.toUpperCase())){
        this.escogidos.push(pais);
      }
    }
    //si devuelve true, habra encontrado, si devuelve false, no habra encontrado
    
  }

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
   this.escogidos = this.continentes[0];
   
   
   
  

}

  constructor(private _route:ActivatedRoute, private _router: Router) {
    
  }

  

    identificador:string;
    continente:string;
    elegido = [];
    numContinente:number;


    americaNorte = [
      {
        "pais": "Canadá",
        "imagen": "cn.jpg"
      },
      {
        "pais": "EEUU",
        "imagen": "eeuu.png"
      },
    ];
    americaCentro = [
      {
        "pais": "Salvador",
        "imagen": "slv.png"
      },
      {
        "pais": "Costa Rica",
        "imagen": "csr.png"
      },
      {
        "pais": "Guatemala",
        "imagen": "gt.png"
      },
    ];
    americaSur = [
      {
        "pais": "Argentina",
        "imagen": "ar.png"
      },
      {
        "pais": "Colombia",
        "imagen": "cl.png"
      },
      {
        "pais": "Venezuela",
        "imagen": "vn.png"
      },
      {
        "pais": "Perú",
        "imagen": "pr.png"
      },
      {
        "pais": "Ecuador",
        "imagen": "ec.png"
      },
    ];
    asia = [
      {
        "pais": "China",
        "imagen": "ch.png"
      },
      {
        "pais":  "Kazajistán",
        "imagen": "kj.png"
      },
      {
        "pais": "Corea del Norte",
        "imagen": "cn.png"
      },
      {
        "pais": "Corea del Sur",
        "imagen": "cs.png"
      },
      {
        "pais": "Japón",
        "imagen": "jp.png"
      },
    ];
    africa = [
      {
        "pais": "Egipto",
        "imagen": "eg.png"
      },
      {
        "pais": "Argelia",
        "imagen": "arg.png"
      },
      {
        "pais": "Camerún",
        "imagen": "cm.png"
      },
      {
        "pais": "Burkina Faso",
        "imagen": "bf.png"
      },
      {
        "pais": "Marruecos",
        "imagen": "mr.png"
      },
    ];
    oceania = [
      {
        "pais": "Australia",
        "imagen"  : "au.png"
      },
      {
        "pais": "Nueva Zelanda",
        "imagen"  : "nz.png"
      }
    ];
    europa = [
      {
        "pais": "España",
        "imagen"  : "sp.png"
      },
      {
        "pais": "Italia",
        "imagen": "ita.png"
      },
      {
        "pais": "Francia",
        "imagen": "fr.png"
      },
      {
        "pais": "Suecia",
        "imagen": "su.png"
      }
    ];
    
    continentes = [this.europa];
    elem = this.continentes[this.numContinente];

  ngOnInit(): void {

    if(localStorage.getItem('usuario')== "null"){
      var origin = window.location.origin + '/'; 
      var destino = origin + "page1";
      window.location.assign(destino);
    }

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
   this.escogidos = this.continentes[0];

   
   
  }
  
  establecerPais(){
     //onclick="localStorage.setItem('pais', pais['pais'])"
     //[routerLink]="['/unirse-ciudad']"
  }
  

}
