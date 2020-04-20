import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-perfil-organizador',
  templateUrl: './perfil-organizador.component.html',
  styleUrls: ['./perfil-organizador.component.scss']
})
export class PerfilOrganizadorComponent implements OnInit, OnDestroy {

  public susViajes = [

  ]

  public slides = [
    { src: "../../../assets/Paris-01.jpg"},
    { src: "../../../assets/Amsterdam-01.jpg"},
    { src: "../../../assets/Zurich-01.jpg" },
    { src: "../../../assets/Amberes-02.jpg" },
    { src: "../../../assets/Moscow-01.jpg" }
  ];

  @ViewChild('imageUser') inputImageUser;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  myUrl = "";

  public usuarios:Usuario[];
  public s_usuarios:Subscription;
  usuario:Usuario;

  stars:number = 4;    //Stars of the user
  Arr = Array;         //Array to print elements
  maxStars:number = 5; //Maximum of stars
  emptystars:number = this.maxStars - this.stars;

  comments = [
    {
      "id": "mmm",
      "photo": "../../../assets/person-1.jpg",
      "person": "Flavia",
      "comment": "Una agencia muy seria y profesional. He realizado unos cuantos viajes con ellos ya y nunca ha habido ningun problema "
    },
    {
      "id": "mmm",
      "photo": "../../../assets/person-3.jpg",
      "person": "Catalina",
      "comment": "Un poco careros pero se agradece la experiencia y la profesionalidad. Esperando hacer ya el proximo viaje con ellos!! "
    },
    {
      "id": "mmm",
      "photo": "../../../assets/person-4.jpg",
      "person": "Tomás",
      "comment": "Excelente atención y rapidez. La recomiendo al 100%. Estaban dispuestos a ayudarnos en todo momento"
    }
  ]

  private db:AngularFirestore;
  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private storage: AngularFireStorage,
              private firestoreServiceUser: UsuarioFirestoreService,
              private firestoreServiceViaje: FirestoreService,
              private firestoreServiceOpiniones: OpinionesFirestoreService
              ) {
                this.usuarios = [];
               }

  ngOnInit(): void {

    console.log(this.usuario);
    /**
    this.s_usuarios=this.firestoreService.getUsuariosSorted().subscribe(data=>{
      this.usuarios = data;
    });
    **/

  
    localStorage.setItem('user','CYKsM7eRfdObgvamcuCN');
    var userId = localStorage.getItem('user');
    var usuarioAux = this.firestoreServiceUser.getUsuario(userId).then((elem) => {


    
     
      var usuarioAux:Usuario = new Usuario();
      usuarioAux.id = elem.id;
      usuarioAux.email = elem.email;
      usuarioAux.ubicacion = elem.ubicacion;
      usuarioAux.descripcion = elem.descripcion;
      usuarioAux.tipo = elem.tipo;
      usuarioAux.nombre = elem.nombre;
      usuarioAux.apellidos = elem.apellidos;
      usuarioAux.password = elem.password;
      usuarioAux.estrellas = elem.estrellas;
      usuarioAux.image = elem.image;

      this.usuario = usuarioAux;
      this.stars = parseInt(this.usuario.estrellas);
      if(this.stars < 0){
        this.stars = 0;
        this.emptystars = this.maxStars;
      }else{
        this.emptystars = this.maxStars - this.stars;
      }

      this.firestoreServiceOpiniones.getPuntuacionesFiltered(this.usuario.id).subscribe(res=>{
        if (res.length <= 0){
          this.stars = 0;
          this.emptystars = this.maxStars;
        }else{
          var i;
          var media = 0;
          for (i = 0; i<res.length; i++){
            media = media + parseInt(res[i].puntuacion);
          }
          media = media/res.length;
          this.stars = media;
          this.emptystars = this.maxStars - media;
          //de esta forma, en el html ya no aparecerá el comentario de 'no hay puntuaciones'
          this.usuario.estrellas = "0";
          this.firestoreServiceUser.updateUsuario(this.usuario);
        }
      });

      this.firestoreServiceOpiniones.getComentariosFiltered(this.usuario.id).subscribe(res=>{
        this.comments = [];
        var i;
        var comment;
        var img;
        var nombre;
        var idUser;
        for (i = 0; i<res.length ; i++){
          comment = res[i].comentario;
          var usuarioAux = this.firestoreServiceUser.getUsuario(res[i].comentador).then((elem) => {
            img = elem.image;
            nombre = elem.nombre;
            idUser = elem.id;
            this.comments.push(
              {
                "id": idUser,
                "photo": img,
                "person": nombre,
                "comment": comment
              },
            )
          });
        }
        
      })

      this.firestoreServiceViaje.getViajesByEmail(this.usuario.email).subscribe(res=>{
          this.slides = [];
          var i;
          for (i = 0; i<res.length ; i++){
            this.slides.push({src: res[i].img});
            this.susViajes.push(res[i].id);
          }
      });

      /**
      stars:number = 4;    //Stars of the user
      Arr = Array;         //Array to print elements
      maxStars:number = 5; //Maximum of stars
      emptystars:number = this.maxStars - this.stars;
      **/
  
      
    
      
    }  
    );
    

    


    

    
   

    


  }

  
  ngOnDestroy()
  {
    this.s_usuarios.unsubscribe();
  }


}
