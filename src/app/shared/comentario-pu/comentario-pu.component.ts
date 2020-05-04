import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { Puntuacion } from 'src/app/interfaces/opiniones';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-comentario-pu',
  templateUrl: './comentario-pu.component.html',
  styleUrls: ['./comentario-pu.component.scss']
})
export class ComentarioPuComponent implements OnInit {

  constructor() { }

  @Output() comentario: EventEmitter<string> = new EventEmitter<string>();
  @Output() cerrado: EventEmitter<any> = new EventEmitter<any>();

  miComentario = "";

  getComentario(){
    var cerrado = true; //tenemos que cerrar porque hemos aceptado
    this.comentario.emit(this.miComentario);
    this.cerrado.emit(cerrado); //como aceptamos, cerramos
  }

  cerrar():boolean{
    var cerrado = true; //devolvemos un true para cerrar el popup
    this.miComentario = ""; //no se ha comentado, se devuelve un vacío para que no se haga el comentario
    this.cerrado.emit(cerrado);
    this.comentario.emit(this.miComentario);
    return cerrado;
  }


  ngOnInit(): void {
  }

}
