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

  constructor() { }

  ngOnInit(): void {
  }

}
