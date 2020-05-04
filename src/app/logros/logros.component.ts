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
      'img': 'logros/logro1.png',
      'activado': 'no'
    },
    {
      'nombre': 'Viajero amigo',
      'descripcion': 'Has hecho un viaje con más de seis personas',
      'img': 'logros/logro2.png',
      'activado': 'no'
    },
    {
      'nombre': 'Europa',
      'descripcion': 'Has estado en Europa',
      'img': 'logros/logro3.png',
      'activado': 'no'
    },
    {
    'nombre': 'Asia',
      'descripcion': 'Has estado en Asia',
      'img': 'logros/logro4.png',
      'activado': 'no'
    },
    {
    'nombre': 'África',
      'descripcion': 'Has estado en África',
      'img': 'logros/logro5.png',
      'activado': 'no'
    },
    {
    'nombre': 'Oceanía',
      'descripcion': 'Has estado en Oceanía',
      'img': 'logros/logro6.png',
      'activado': 'no'
    },
    {
    'nombre': 'América del Norte',
      'descripcion': 'Has estado en América del Norte',
      'img': 'logros/logro7.png',
      'activado': 'no'
    },
    {
    'nombre': 'América del Sur',
      'descripcion': 'Has estado en América del Sur',
      'img': 'logros/logro8.png',
      'activado': 'no'
    },
    {
    'nombre': 'América Central',
      'descripcion': 'Has estado en América Central',
      'img': 'logros/logro9.png',
      'activado': 'no'
    },
  ]
  ngOnInit(): void {
  }

}
