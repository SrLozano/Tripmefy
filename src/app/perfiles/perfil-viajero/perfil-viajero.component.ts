import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-viajero',
  templateUrl: './perfil-viajero.component.html',
  styleUrls: ['./perfil-viajero.component.scss']
})
export class PerfilViajeroComponent implements OnInit {

  public slides = [
    { src: "../../../assets/bucarest.jpg"},
    { src: "../../../assets/amberes.jpg" },
    { src: "../../../assets/cracovia.jpg" },
    { src: "../../../assets/zurich.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
