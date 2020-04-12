import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss']
})
export class ViajeComponent implements OnInit {

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
