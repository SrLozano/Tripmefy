import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-organizador',
  templateUrl: './perfil-organizador.component.html',
  styleUrls: ['./perfil-organizador.component.scss']
})
export class PerfilOrganizadorComponent implements OnInit {

  public slides = [
    { src: "../../../assets/Paris-01.jpg"},
    { src: "../../../assets/Amsterdam-01.jpg"},
    { src: "../../../assets/Zurich-01.jpg" },
    { src: "../../../assets/Amberes-02.jpg" },
    { src: "../../../assets/Moscow-01.jpg" }
  ];

  stars:number = 4;    //Stars of the user
  Arr = Array;         //Array to print elements
  maxStars:number = 5; //Maximum of stars
  emptystars:number = this.maxStars - this.stars;

  comments = [
    {
      "photo": "../../../assets/person-1.jpg",
      "person": "Flavia",
      "comment": "Una agencia muy seria y profesional. He realizado unos cuantos viajes con ellos ya y nunca ha habido ningun problema "
    },
    {
      "photo": "../../../assets/person-3.jpg",
      "person": "Catalina",
      "comment": "Un poco careros pero se agradece la experiencia y la profesionalidad. Esperando hacer ya el proximo viaje con ellos!! "
    },
    {
      "photo": "../../../assets/person-4.jpg",
      "person": "Tomás",
      "comment": "Excelente atención y rapidez. La recomiendo al 100%. Estaban dispuestos a ayudarnos en todo momento"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
