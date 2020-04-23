import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {UsuarioFirestoreService} from '../../services/firestore/usuario-firestore.service';
import { Usuario, IUsuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-edicion-pu',
  templateUrl: './edicion-pu.component.html',
  styleUrls: ['./edicion-pu.component.scss']
})
export class EdicionPuComponent implements OnInit {

  constructor( private firestoreServiceUser: UsuarioFirestoreService,) { }

  @Input() public descripcion:string;
  @Input() public user:Usuario;
  @Output() newDescripcion: EventEmitter<string> = new EventEmitter<string>();
  @Output() foto: EventEmitter<string> = new EventEmitter<string>();
  @Output() cerrado: EventEmitter<any> = new EventEmitter<any>();
  @Output() signal: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  

  
  miFoto = "";
  
  

  setImagen(e){
    this.miFoto = e;
    console.log(this.miFoto);
  }

  chooseImagen(){
    document.getElementById("pedir-imagen").style.display = "block";
    document.getElementById("allContent").style.display = "none";
  }

  save(){
    var cerrado = true; //tenemos que cerrar porque hemos aceptado
    this.newDescripcion.emit(this.descripcion);
    this.cerrado.emit(cerrado); //como aceptamos, cerramos
    this.foto.emit(this.miFoto);
    this.signal.emit(this.user);

    var descrip = "";
    var img = "";
    
    if(this.miFoto != "" && this.miFoto != undefined){
      //alert(this.nuevaFoto);
      this.user.image = this.miFoto;
      
    
    }
    if(this.descripcion != "" && this.descripcion != undefined){
      //alert(this.nuevaDescripcion);
      descrip = this.descripcion;
      //this.firestoreServiceUser.updateUsuario(this.user);
     
    }

    /**
    var cerrado = true; //tenemos que cerrar porque hemos aceptado
    this.newDescripcion.emit(descrip);
    this.cerrado.emit(cerrado); //como aceptamos, cerramos
    this.foto.emit(this.miFoto);
    this.signal.emit(this.user);
    **/
   
    //this.firestoreServiceUser.updateUsuario(this.usuario);
    

  
  }

  cerrar():boolean{
    var cerrado = true; //devolvemos un true para cerrar el popup
    this.descripcion = ""; //no se ha comentado, se devuelve un vacío para que no se haga el comentario
    this.miFoto = ""
    this.cerrado.emit(cerrado);
    this.newDescripcion.emit(this.descripcion);
    this.foto.emit(this.miFoto);
    this.signal.emit(this.user);
    return cerrado;
  }

  cerrarPopup(e, id){
    if(e == true){
      document.getElementById(id).style.display = "none";
      document.getElementById("allContent").style.display = "block";
    }
  }

  ngOnInit(): void {

  
  }

}
