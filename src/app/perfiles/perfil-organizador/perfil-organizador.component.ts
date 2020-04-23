import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild, NgZone} from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';
import {UsuarioFirestoreService} from '../../services/firestore/usuario-firestore.service';
import {OpinionesFirestoreService} from '../../services/firestore/opiniones-firestore.service';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {Subscription} from 'rxjs';
import {Viaje, IViaje} from '../../interfaces/viaje';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { Usuario, IUsuario } from 'src/app/interfaces/usuario';
import {IPuntuacion, Puntuacion, IComentario, Comentario} from '../../interfaces/opiniones'

@Component({
  selector: 'app-perfil-organizador',
  templateUrl: './perfil-organizador.component.html',
  styleUrls: ['./perfil-organizador.component.scss']
})
export class PerfilOrganizadorComponent implements OnInit, OnDestroy {

 

  public links: string[];

  @ViewChild('descripcion') newDescripcion;
  @ViewChild('imageUser') inputImageUser;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  myUrl = "";
  descripcion:string = "";
  titulo = "ORGANIZADOR";

  /****usuario****/
  public usuarios:Usuario[];
  public s_usuarios:Subscription;
  usuario:Usuario;

  /**viajes **/
  actualLink:string;
  public susViajes = [
  
  ];
  //almacena los id

  public slides = [
    { src: "../../../assets/noViajes.png"},
    
  ];//almacena las imagenes en el formato del carrusel
  

  /****estrellas****/
  //es necesario recargar para ver la actualización de las estrellas porque hay que hacer la media con el resto
  stars:number = 4;    //Stars of the user
  Arr = Array;         //Array to print elements
  maxStars:number = 5; //Maximum of stars
  emptystars:number = this.maxStars - this.stars;
 

  /****comentarios****/
  //no es necesario recargar para ver la actualización porque solo hay que añadir
  comentarios = []; //se rellena como un diccionario con los datos de un comentario:
  //id comentador, comentario, foto comentador, nombre comentador

  tuplasComentario = [];//0:id del comentador, 1:comentario, 3: true si añadir, false si añadido

  /****ediciones ****/
  nuevaFoto = "";
  nuevaDescripcion = "";

  //****permisos****/
  permisoOpinar = false; //si el usuario tiene permiso para opinar es true
  permisoEditar = false; //si el usuario tiene permiso para editar es true
  


  reload(){
    window.location.reload();
    window.scrollTo(0,0);
  }
 //es necesario activar las opiniones si se quiere comentar y puntuar
  activarOpiniones(){
    this.permisoOpinar = true;
  }
  //es necesario activar la edición si se quiere editar la descripción o la foto de perfil
  activarEdicion(visitanteId:string){
    this.permisoEditar = true;
  }

  //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
  //que accede
  puntuar(){
    document.getElementById("puntuar").style.display="block";
  }

  //resultante del evento cerrar de los componentes pu
  cerrar(cerrado, id){
    if (cerrado == true){
      document.getElementById(id).style.display="none";
    }
  }

  //resultante del evento puntuacion del componente hijo puntuacion-pu
  newPuntuacion(puntos){
    if(puntos > -1){
      var puntuacion:Puntuacion = new Puntuacion();
      puntuacion.puntuacion = puntos.toString();
      puntuacion.puntuador = localStorage.getItem('usuario');
      puntuacion.puntuado = this._route.snapshot.paramMap.get('id'); 
      this.firestoreServiceOpiniones.createPuntuacion(puntuacion);
      document.getElementById("graciasP").style.display="block";
    }document.getElementById("puntuar").style.display="none";
    
   
  }

  //resultante del evento puntuacion del comentario hijo comentario-pu
  newComentario(comment){
    if(comment != ""){
      var comentario:Comentario = new Comentario();
      comentario.comentario = comment;
      comentario.comentador = localStorage.getItem('usuario');
      comentario.comentado = this._route.snapshot.paramMap.get('id');
      this.firestoreServiceOpiniones.createComentario(comentario);
      document.getElementById("graciasC").style.display="block";
    }document.getElementById("comentar").style.display="none";
   
  }

  //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
  //que accede
  comentar(){
    document.getElementById("comentar").style.display="block";
  }
  
  //activa el botón de comentarios, es llamada cuando el usuario propietario es el mismo que el usuario
  //que accede
  editar(){
    document.getElementById("editar").style.display="block";
  }

  //resultante del evento foto del componente edicion-p
  
  setFoto(foto){
    this.nuevaFoto = foto;
    if(this.nuevaFoto != "" && this.nuevaFoto != undefined){
      this.usuario.image = foto;
      
    }
    
  }
  //resultante del evento newDescripcion del componente edicion-p
  setDescripcion(desc){
    this.nuevaDescripcion = desc;
    if(this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined){
      this.usuario.descripcion = desc;
      
    }
  }
  
 //resultante del evento signal del componente edicion-pu
 
  uploadUser(signal){
    
      
    
    if(this.nuevaFoto != "" && this.nuevaFoto != undefined){
      //alert(this.nuevaFoto);
      
      this.usuario.image = this.nuevaFoto;

     
    
    }
    if(this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined){
      //alert(this.nuevaDescripcion);
      this.usuario.descripcion = this.nuevaDescripcion;
     
      
    }

    //es necesario crear un objeto para que el set funcione

    var actualizar = {
      "id": this.usuario.id,
      "email": this.usuario.email,
      "ubicacion": this.usuario.ubicacion,
      "descripcion": this.usuario.descripcion,
      "tipo": this.usuario.tipo,
      "nombre": this.usuario.nombre,
      "apellidos": this.usuario.apellidos,
      "password": this.usuario.password,
      "estrellas": this.usuario.estrellas,
      "image": this.usuario.image,
    }
    
    this.firestoreServiceUser.updateUsuario(actualizar);
    document.getElementById("editOk").style.display="block";
  
    return true;
    
  }
  

  private db:AngularFirestore;
  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private storage: AngularFireStorage,
              private firestoreServiceUser: UsuarioFirestoreService,
              private firestoreServiceViaje: FirestoreService,
              private firestoreServiceOpiniones: OpinionesFirestoreService,
              private _activatedRoute: ActivatedRoute,
              private zone: NgZone
              ) {
                this.usuarios = [];
                this.usuario = new Usuario();
                
                
               }

  ngOnInit(): void {

    

    
    

    var visitanteId = localStorage.getItem('usuario'); //hace referencia al usuario que está navegando 
    var userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil

    //utilizo la subscripción a activatedRoute para que se actualice el pefil de haber cambios en la ruta
    this._activatedRoute.paramMap.subscribe((params) => {
      userId = params['id'];
        //this.reload();
      if(userId == undefined){
        userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil;
      }
      window.scrollTo(0,0); 

        var usuarioAux = this.firestoreServiceUser.getUsuario(userId).then((elem) => {

          /**Se obtiene el usuario propietario del perfil con su id (userId) y se pone el atributo usuario 
           * con los valores correspondientes.
           * Para eso nos apoyamos de una variable auxiliar usuarioAux, definida como Usuario. Elem será el 
           * valor devuelto por la función getUsuario del servicio firestoreServiceUser
           */
          var usuarioAux:Usuario = new Usuario();
          usuarioAux.id = elem.id;
          usuarioAux.email = elem.email;
          usuarioAux.ubicacion = elem.ubicacion;
          usuarioAux.descripcion = elem.descripcion;
          this.descripcion = elem.descripcion;
          usuarioAux.tipo = elem.tipo;
          usuarioAux.nombre = elem.nombre;
          usuarioAux.apellidos = elem.apellidos;
          usuarioAux.password = elem.password;
          usuarioAux.estrellas = elem.estrellas;
          usuarioAux.image = elem.image;

          this.usuario = usuarioAux; 

          this.firestoreServiceOpiniones.getPuntuacionesFiltered(this.usuario.id).subscribe(res=>{
            /**Se realiza el proceso de obtención de puntuaciones. Para ello se buscan todas aquellas
             * puntuaciones que tengan como valor "puntuado" el id del usuario obtenido anteriormente.
             * Esto se hace mediante el  método getPuntuacionesFiltered del servicio firestoreServiceOpiniones,
             * que filtra opiniones por el id del usuario puntuado.
             * 
             * La variable res será un array que contendrá todas las puntuaciones que tengan como 
             * puntuado al usuario propietario del perfil.
             * 
             * Si no hay puntuaciones, el número de estrellas llenas (stars) será cero, y el de vacías el 
             * máximo. Como no se modifica el parámetro 'estrellas' del usuario propietario del perfil (queda
             * a -1) se escribirá un mensaje "este usuario no tiene puntuaciones aún"
             * 
             * Si hay puntuaciones se recorre el array res con un for, se acumulan los valores de dichas 
             * puntuaciones (atributo puntuación). Finalmente se divide entre el número de puntuaciones
             * (el size de res) para obtener la media. Esta media será el número de estrellas a rellenar,
             * mientras que las estrellas vacías serán la resta del máximo de estrellas (se ha establecido 5)
             * y las estrellas llenas. Es importante notar que el atributo "estrellas" del usuario propietario
             * del perfil cambia a 0, por lo que ya no aparecerá el mensaje de "este usuario no tiene 
             * puntuaciones"
             * 
             * Para finalizar, se realiza un update del atributo usuario, de forma que la vista muestre los 
             * resultados obtenidos
             */
            

            if (res.length <= 0){
              this.stars = 0;
              this.emptystars = this.maxStars;
            }else{
              var i;
              var media = 0;
              for (i = 0; i<res.length; i++){
                media = media + parseInt(res[i].puntuacion);
                
              }
              media = Math.round(media/res.length); //es necesario redondear, no podemos rellenar media estrella
              this.stars = media;
              this.emptystars = this.maxStars - media;
              //de esta forma, en el html ya no aparecerá el comentario de 'no hay puntuaciones'
              this.usuario.estrellas = "0";
              
              //se requiere una variable auxiliar para que no salte el error DocumentReference.set() al llamar
              //a updateUsuario
              
              var actualizar = 
                {
                  "id": this.usuario.id,
                  "email": this.usuario.email,
                  "ubicacion": this.usuario.ubicacion,
                  "descripcion": this.usuario.descripcion,
                  "tipo": this.usuario.tipo,
                  "nombre": this.usuario.nombre,
                  "apellidos": this.usuario.apellidos,
                  "password": this.usuario.password,
                  "estrellas": this.usuario.estrellas,
                  "image": this.usuario.image
                }
              
              
              

              this.firestoreServiceUser.updateUsuario(actualizar);
            }
          });

          this.firestoreServiceOpiniones.getComentariosFiltered(this.usuario.id).subscribe(res=>{
            /**Se obtienen los comentarios que tienen como atributo "comentado" al usuario propietario
             * del perfil. Para ello se emplea el método getComentariosFiltered del servicio 
             * firestoreServiceOpiniones, que filtra los comentarios por el id del comentado.
             * 
             * Guardamos los comentarios en un diccionario, definido arriba como atributo,
             * que tendrá los siguientes parámetros:
             * id del comentador, foto del comentador (photo), nombre del comentador (person) y comentario
             * (comment)
             * 
             * Una vez tenemos el comentario, habiendo usado la función getComentariosFiltered, podemos usar
             * el id del comentador para obtener sus datos desde la tabla Usuario. Para ello empleamos
             * el método getUsuario del servicio firestoreServiceUser, donde elem será el usuario coincidente
             * con el id del comentador
             * 
             * Es importante notar que la obtención del comentario y la obtención del usuario se hacen en 
             * espacios temporales diferentes. Es por ello que los comentarios se almacenan junto con el id
             * del comentador en un array auxiliar de tuplas <comentario, idComentador>. Cuando se han metido
             * todos los comentadores en el diccionario, se emplea la información del array auxiliar para
             * meter también los comentarios.
             * 
             * Las comprobaciones hechas al meter un comentario en el diccionario permiten que:
             *  -Un usuario pueda hacer varios comentarios
             *  -Todas las entradas del diccionario tengan un comentario
             */
            this.comentarios = [];
            var i;
            for (i = 0; i<res.length ; i++){
              this.comentarios.push({
                    "id":"",
                    "photo": "",
                    "person": "",
                    "comment": "",
                    "tipo-url": ""
              },)
            
            
            }
            var comment;
            var img;
            var nombre;
            var idUser;
            var tipo;
            for (i = 0; i<res.length ; i++){
              comment = res[i].comentario;
              this.tuplasComentario.push([comment, res[i].comentador, true]);
            
              var contador = 0;
              var usuarioAux = this.firestoreServiceUser.getUsuario(res[i].comentador).then((elem) => {
                
                img = elem.image;
                this.comentarios[contador]["photo"] = img;
                
                nombre = elem.nombre;
                this.comentarios[contador]["person"] = nombre;
          
                idUser = elem.id;
                this.comentarios[contador]["id"] = idUser;

                tipo = elem.tipo;
                
                if(tipo == 'organizador'){
                  this.comentarios[contador]["tipo-url"] = '/perfil-organizador/';
                }else{
                  this.comentarios[contador]["tipo-url"] = '/perfil-viajero/';
                }
                var n;
                for (n = 0; n<this.tuplasComentario.length ; n ++){
                  if (this.tuplasComentario[n][1] == this.comentarios[contador]["id"] &&  this.comentarios[contador]["comment"] == "" && this.tuplasComentario[n][2] ){
                    this.comentarios[contador]["comment"] = this.tuplasComentario[n][0];
                    this.tuplasComentario[n][2] = false;
                    
                  }
                }

              contador = contador + 1 ;
              });
            }
            
          })

          /**Se obtienen los viajes organizados por el usuario propietario del perfil. Para ello se emplea
           * el método getViajesByEmail, del servicio firestoreServiceViaje, que filtra los viajes por
           * el email del organizador. La variable res sería un array con los viajes del organizador. Para
           * introducirlos, se hace push sobre el atributo slides, que se emplea en el carrusel de la vista.
           * Además se recoge el id del viaje, con la intención de hacer un LinkedLink.
           * 
           * De no haber viajes, aparecerá una imagen que indica que no hay viajes
           */

          this.firestoreServiceViaje.getViajesByEmail(this.usuario.email).subscribe(res=>{
              if(res.length>0){
                this.susViajes = [];
                this.slides = []; //esto es para que no aparezca la imagen de no hay viajes si hay viajes
                var i;
                for (i = 0; i<res.length ; i++){
                  this.slides.push({src: res[i].img});
                  this.susViajes.push(['viaje', res[i].id]);
                }
              }else{
                this.slides = [
                  { src: "../../../assets/noViajes.png"},
                  
                ];
                this.susViajes = [];
              }
                
          })
          
        
          
        }  
        );
    })
    /**Deben establecerse los permisos de opinión y edición. Para ello comprobamos los id del usuario
     * propietario del perfil y el visitante
    */
    if (userId != visitanteId){
      this.activarOpiniones(); //si el usuario está visitando un perfil distinto del suyo, puede comentar y puntuar
    }else{
      this.titulo = "TU PERFIL";
      this.activarEdicion(visitanteId); //si el usuario está visitando su perfil, puede editarlo
    }

    


    

    
   

    


  }

  
  ngOnDestroy()
  {
    //this.s_usuarios.unsubscribe();
  }


}
