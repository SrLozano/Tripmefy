import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-unirse-ciudad',
  templateUrl: './unirse-ciudad.component.html',
  styleUrls: ['./unirse-ciudad.component.scss']
})
export class UnirseCiudadComponent implements OnInit {



  title = 'España';
  estePais = "";
  escogidas = [];
  precio = "Todos";
  buscar = "";


  estaVacio(){
    return this.escogidas.length < 1;
  }

  busqueda(){
    
    var i;
    var selec;
    this.escogidas = [];
    for (i = 0; i < this.ciudades.length; i++) {
      // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
      //console.log(this.estePais);
      selec = this.filtro(i);
      if(selec != -1 && selec['ciudad'].toUpperCase().includes(this.buscar.toUpperCase())){
        this.escogidas.push(selec);
      }
      

    };
  }
    
  
  filtrar(){
    var i;
    var selec;
    this.escogidas = [];
    for (i = 0; i < this.ciudades.length; i++) {
      // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
      //console.log(this.estePais);
      selec = this.filtro(i);
      if(selec != -1){
        this.escogidas.push(selec);
      }
      

    };
  }

  filtro(i:number): any{
    var ciudad = this.ciudades[i];
    //solo metemos los viajes del pais escogido
    if (ciudad['pais'].toUpperCase() == this.estePais){
        
      switch(this.precio){
        case "Hasta 100€":
          if (parseInt(ciudad['precio'].substr(0,3)) <= 100 ){
            //this.escogidas.push(ciudad);
            return ciudad;
          }
          break;
        case "Hasta 300€":
          if (parseInt(ciudad['precio'].substr(0,3)) <= 300 ){
            //this.escogidas.push(ciudad);
            return ciudad;
          }
          break;
        case "Hasta 500€":
          if (parseInt(ciudad['precio'].substr(0,3)) <= 500 ){
            //this.escogidas.push(ciudad);
            return ciudad;
          }
          break;
        default:  
            //this.escogidas.push(ciudad);
            return ciudad;
          break;

      }
    }
    return -1;
  }
  
  //ciudades = [['Sevilla', 'hola'], ['Barcelona'], ['Galicia'], ['Madrid']];
  ciudades = [
    {
      "id":"1",
      "pais": "España",
      "ciudad": "Sevilla",
      "mensaje": "La capital andaluza destila alegría y bullicio en cada una de las calles y plazas que configuran su casco histórico, que alberga un interesante conjunto de construcciones declaradas Patrimonio Mundial y barrios de hondo sabor popular, como el de Triana o La Macarena. ",
      "precio": "80€",
      "unidas": "1",
      "maximo": "5"
    },
    {
      "id":"2",
      "pais": "España",
      "ciudad": "Barcelona",
      "mensaje": "Situada a orillas del Mediterráneo, Barcelona es una ciudad cosmopolita con una gran importancia tanto cultural como comercial, financiera y turística. Barcelona es una de las ciudades europeas más visitadas",
      "precio": "300€",
      "unidas": "1",
      "maximo": "5"
    },
    {
      "id":"3",
      "pais": "España",
      "ciudad": "Galicia",
      "mensaje": "Patrimonio cultural, museos, alojamiento, fiestas... Todos los recursos turísticos de Galicia a tu alcance",
      "precio": "450€",
      "unidas": "1",
      "maximo": "5"
    },
    {
      "id":"4",
      "pais": "España",
      "ciudad": "Madrid",
      "mensaje": "Déjate seducir por la magnífica ciudad de Madrid visitando todos sus museos y paseando por sus calles peculiares. La oferta incluye vuelos desde Cádiz y alojamiento en hotel 4*.",
      "precio": "625€",
      "unidas": "1",
      "maximo": "5"
    }
    
  ]
  myciudad= this.ciudades[0];

  constructor(private _route:ActivatedRoute, 
              private _router: Router,
              ) { }
  
  

  

  ngOnInit(): void {
    //let dato = JSON.parse(localStorage.getItem('pais'));
    
    //let id = localStorage.getItem('pais');
    let id = this._route.snapshot.paramMap.get('id'); //para saber el pais a traves de la URL
    
    this.estePais = id.toUpperCase(); //para el titulo

    var i; //iteramos sobre el conjunto de ciudades
    var ciudad; //para ver los datos de la ciudad iterada

    this.filtrar();

  

    
    

  }
  

}
