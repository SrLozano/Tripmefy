import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss']
})
export class ViajeComponent implements OnInit {

  public slides = [
    { src: "../../../assets/person-1.jpg"},
    { src: "../../../assets/person-2.jpg" },
    { src: "../../../assets/person-3.jpg" },
    { src: "../../../assets/person-4.jpg" },
    { src: "../../../assets/person-5.jpg" },
    { src: "../../../assets/person-6.jpg" }
  ];

  public slides2 = [
    { src: "../../../assets/Amsterdam-01.jpg"},
    { src: "../../../assets/Amsterdam-02.jpg" },
    { src: "../../../assets/Amsterdam-03.jpg" },
    { src: "../../../assets/Amsterdam-04.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
