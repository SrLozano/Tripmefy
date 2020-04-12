import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unirse-pais',
  templateUrl: './unirse-pais.component.html',
  styleUrls: ['./unirse-pais.component.scss']
})
export class UnirsePaisComponent implements OnInit {

  title = 'Europa';
  //paises = ['España', 'Francia', 'Italia', 'Bélgica', 'Rumanía', 'Eslovaquia', 'Chipre', 'Malta', 'Bielorrusia', 'Ciudad del Vaticano', 'Bulgaria', 'Polonia', 'Suiza', 'Alemania'];
  europa = [
    {
      "pais": "España", 
      "imagen": "sp.png"
    },
    {
      "pais": "Francia",
      "imagen": "fr.png"
    },
    {
      "pais": "Hungría",
      "imagen": "hu.png"
    },
    {
      "pais": "Rumanía",
      "imagen": "zw.png"
    },
    {
      "pais": "Eslovaquia",
      "imagen": "zw.png"
    },
    {
      "pais": "Chipre",
      "imagen": "zw.png"
    },

  ] 
  mypais= this.europa[0];
  constructor() { }

  ngOnInit(): void {
  }

}
