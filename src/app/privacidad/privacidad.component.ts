import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.scss']
})
export class PrivacidadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Botón pulsado");
    if (window && window.pageYOffset) {
      window.scroll(0, 0);
    }
  }

}
