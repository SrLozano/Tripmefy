import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.scss']
})
export class LogrosComponent implements OnInit {

  constructor() { }
  logros = [
    {
      'nombre': 'Súper viajero',
      'descripcion': 'Has estado en todos los continentes',
      'img2': 'logros/log1.png',
      'img': 'banderas/hu.png'
    },
    {
      'nombre': 'Viajero amigo',
      'descripcion': 'Has hecho un viaje con más de seis personas',
      'img': 'logros/log2.png'
    },
    {
      'nombre': 'Europa',
      'descripcion': 'Has estado en Europa',
      'img': 'logros/log3.png'
    },
    {
    'nombre': 'Asia',
      'descripcion': 'Has estado en Asia',
      'img': 'logros/log4.png'
    },
    {
    'nombre': 'África',
      'descripcion': 'Has estado en África',
      'img': 'logros/log5.png'
    },
    {
    'nombre': 'Oceanía',
      'descripcion': 'Has estado en Oceanía',
      'img': 'logros/log6.png'
    },
    {
    'nombre': 'América del Norte',
      'descripcion': 'Has estado en América del Norte',
      'img': 'logros/log7.png'
    },
    {
    'nombre': 'América del Sur',
      'descripcion': 'Has estado en América del Sur',
      'img': 'logros/log8.png'
    },
    {
    'nombre': 'América Central',
      'descripcion': 'Has estado en América Central',
      'img': 'logros/log9.png'
    },
  ]
  ngOnInit(): void {
  }

}
