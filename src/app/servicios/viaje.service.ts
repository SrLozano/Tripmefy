import { Injectable } from '@angular/core';
import {Viaje} from '../interfaces/viaje'
@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  newViaje: Viaje;
  viajes: Viaje[];
  constructor() {   }
   
   crearViaje(pais:String, ciudad:String, mensaje:String, precio:String, personas:String):Viaje{
      var newViaje: Viaje;
      newViaje.id = this.viajes.length + 1;
      newViaje.pais = pais;
      newViaje.ciudad = ciudad;
      newViaje.mensaje = mensaje;
      newViaje.precio = precio;
      newViaje.personas = personas;

      this.viajes.push(newViaje);

      return newViaje;

   }

   verViaje(id:number){
     let posicion = id -1;
     return this.viajes[posicion];
   }

   
}

