import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { Puntuacion } from 'src/app/interfaces/opiniones';

@Component({
  selector: 'app-puntuacion-pu',
  templateUrl: './puntuacion-pu.component.html',
  styleUrls: ['./puntuacion-pu.component.scss']
})
export class PuntuacionPuComponent implements OnInit {

  constructor() { }

  @Output() puntuacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() cerrado: EventEmitter<any> = new EventEmitter<any>();

  estrellas = [false, false, false, false, false];
  estable = -1;

  getPuntuacion(){
    var puntuacion = 0;
    var i = 0;
    var cerrado = true;
    for (i; i < this.estrellas.length ; i++){
      if(this.estrellas[i] == true){
        puntuacion = puntuacion + 1; //si es verdadera sumamos un punto
      }
      else{
        this.puntuacion.emit(puntuacion);
        return puntuacion; //si una es falsa sus siguientes tambien
      }
    }
    this.puntuacion.emit(puntuacion);
    this.cerrado.emit(cerrado); //como aceptamos, cerramos
    return puntuacion; //devolvemos la puntuacion
  }

  cerrar():boolean{
    var cerrado = true; //devolvemos un true para cerrar el popup
    var puntuacion = -1; //no se ha puntuado, se devuelve un -1 para que no se haga la puntuación
    this.cerrado.emit(cerrado);
    this.puntuacion.emit(puntuacion);
    return cerrado;
  }

  rellenar(i){
    if(this.estable == -1){
      for (i; i>= 0; i--){
        this.estrellas[i] = true;
      }
    }
  }

  vaciar(i){
    if(this.estable == -1){
      var j;
    for (j = i; j>= 0; j--){
      this.estrellas[j] = false;
    }
    }
  }

  establecer(i){
    
    
    if(this.estable == -1){
      //si no hay ninguna estrella fija, se fija la que se ha pasado y se rellenan las anteriores
      this.estable = i;
      for (i; i>= 0; i--){
        this.estrellas[i] = true;
      }
    }
    else if (this.estable == i){
      //si ya hay una estrella fija y es sobre la que se ha pulsado, se desfija esa estrella y se vacían todas
      this.estable = -1;
      for (i; i>= 0; i--){
        this.estrellas[i] = false;
      }
    }
    else{
      //si ya hay una estrella vacía, pero es diferente a la que se ha pulsado, se desfija, se fija la nueva
      //se vacían todas y se rellena hasta la nueva
      var j = 0;
      for (j; j<this.estrellas.length ; j++){
        this.estrellas[j] = false;
      }//vaciar todo

      this.estable = i; //establecer la nueva

      for (i; i>= 0; i--){
        this.estrellas[i] = true;
      }//rellenar hasta i
    }
    
  }

  ngOnInit(): void {
  }

}
