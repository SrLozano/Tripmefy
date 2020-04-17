import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-viajero',
  templateUrl: './perfil-viajero.component.html',
  styleUrls: ['./perfil-viajero.component.scss']
})
export class PerfilViajeroComponent implements OnInit {

  public slides = [
    { src: "../../../assets/Zurich-01.jpg" },
    { src: "../../../assets/Bucarest-01.jpg"},
    { src: "../../../assets/Amberes-01.jpg" },
    { src: "../../../assets/Moscow-01.jpg" }
  ];

  stars:number = 3;    //Stars of the user
  Arr = Array;         //Array to print elements
  maxStars:number = 5; //Maximum of stars
  emptystars:number = this.maxStars - this.stars;

  comments = [
    {
      "photo": "../../../assets/person-1.jpg",
      "person": "Flavia",
      "comment": "Divertido, amable, tiene iniciativa y sabe tocar el Ukelele!!! Aquella mágica noche en la orilla Brienz de Interlaken supe que hice un amigo para siempre... "
    },
    {
      "photo": "../../../assets/person-3.jpg",
      "person": "Catalina",
      "comment": "El chico de la Karmeliet, le conocen en todo Flandes!!! Alejandro es una delicia de persona, recomiendo a todo el mundo que quiera buen rollo que se vayan con Alejandro 10/10 "
    },
    {
      "photo": "../../../assets/person-4.jpg",
      "person": "Tomás",
      "comment": "Admito que Alejandro es una gran persona, sin embargo, es demasido activo y no supo guardar la compostura cuando visitamos El Kremlin. ¡Casi nos echan!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
