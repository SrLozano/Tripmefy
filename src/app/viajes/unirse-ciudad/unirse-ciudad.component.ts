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
  
  //ciudades = [['Sevilla', 'hola'], ['Barcelona'], ['Galicia'], ['Madrid']];
  ciudades = [
    {
      "id":"1",
      "pais": "España",
      "ciudad": "Sevilla",
      "mensaje": "La capital andaluza destila alegría y bullicio en cada una de las calles y plazas que configuran su casco histórico, que alberga un interesante conjunto de construcciones declaradas Patrimonio Mundial y barrios de hondo sabor popular, como el de Triana o La Macarena. ",
      "precio": "400€",
      "personas": "1/5"
    },
    {
      "id":"2",
      "pais": "España",
      "ciudad": "Barcelona",
      "mensaje": "Situada a orillas del Mediterráneo, Barcelona es una ciudad cosmopolita con una gran importancia tanto cultural como comercial, financiera y turística. Barcelona es una de las ciudades europeas más visitadas",
      "precio": "350€",
      "personas": "2/5"
    },
    {
      "id":"3",
      "pais": "España",
      "ciudad": "Galicia",
      "mensaje": "Patrimonio cultural, museos, alojamiento, fiestas... Todos los recursos turísticos de Galicia a tu alcance",
      "precio": "300€",
      "personas": "3/5"
    },
    {
      "id":"4",
      "pais": "España",
      "ciudad": "Madrid",
      "mensaje": "Déjate seducir por la magnífica ciudad de Madrid visitando todos sus museos y paseando por sus calles peculiares. La oferta incluye vuelos desde Cádiz y alojamiento en hotel 4*.",
      "precio": "370€",
      "personas": "0/5"
    }
    
  ]
  myciudad= this.ciudades[0];

  constructor(private _route:ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    //let dato = JSON.parse(localStorage.getItem('pais'));
    
    //let id = localStorage.getItem('pais');
    let id = this._route.snapshot.paramMap.get('id');

    this.estePais = id.toUpperCase();
    

  }
  

}
