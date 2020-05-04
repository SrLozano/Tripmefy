import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {Subscription} from 'rxjs';
import {Viaje, IViaje} from '../../interfaces/viaje';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unirse-ciudad',
  templateUrl: './unirse-ciudad.component.html',
  styleUrls: ['./unirse-ciudad.component.scss']

  
})


export class UnirseCiudadComponent implements OnInit, OnDestroy {



  title = 'España';
  estePais = "";
  escogidas = [];
  precio = "Todos";
  buscar = "";
  ciudades = [];


  //fileToUpload: File = null;
  @ViewChild('imageUser') inputImageUser;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  myUrl = "";

  public viajes:Viaje[];
  public s_viajes:Subscription;

  public viaje;

  public search_texto:string="";
  public search_tipo:number=0;


  estaVacio(){
    return this.escogidas.length < 1;
  }

  busqueda(){

    var i;
    var selec;
    this.escogidas = [];
    for (i = 0; i < this.ciudades.length; i++) {
      // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
      //console.log(this.estePais);
      selec = this.filtro(i);
      if(selec != -1 && selec.ciudad.toUpperCase().includes(this.buscar.toUpperCase())){
        this.escogidas.push(selec);
      }


    };
  }


  filtrar(){
    var i;
    var selec;
    this.escogidas = [];
    for (i = 0; i < this.ciudades.length; i++) {
      // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
      //console.log(this.estePais);
      selec = this.filtro(i);
      if(selec != -1){
        this.escogidas.push(selec);
      }


    };
  }

  filtro(i:number): any{
    var ciudad = this.ciudades[i];
    //solo metemos los viajes del pais escogido
    

    switch(this.precio){
      case "Hasta 100€":
        if (parseInt(ciudad.precio.substr(0,ciudad.precio.length - 1)) <= 100 ){
          //this.escogidas.push(ciudad);
          return ciudad;
        }
        break;
      case "Hasta 300€":
        if (parseInt(ciudad.precio.substr(0,ciudad.precio.length - 1)) <= 300 ){
          //this.escogidas.push(ciudad);
          return ciudad;
        }
        break;
      case "Hasta 500€":
        if (parseInt(ciudad.precio.substr(0,ciudad.precio.length - 1)) <= 500 ){
          //this.escogidas.push(ciudad);
          return ciudad;
        }
        break;
      default:
          //this.escogidas.push(ciudad);
          return ciudad;
        break;

      
    }
    return -1;
  }
  /**
  //ciudades = [['Sevilla', 'hola'], ['Barcelona'], ['Galicia'], ['Madrid']];
  ciudades = [
    {
      "id":"1",
      "pais": "España",
      "ciudad": "Sevilla",
      "mensaje": "La capital andaluza destila alegría y bullicio en cada una de las calles y plazas que configuran su casco histórico, que alberga un interesante conjunto de construcciones declaradas Patrimonio Mundial y barrios de hondo sabor popular, como el de Triana o La Macarena. ",
      "precio": "80€",
      "unidas": "1",
      "maximo": "5"
    },
    {
      "id":"2",
      "pais": "España",
      "ciudad": "Barcelona",
      "mensaje": "Situada a orillas del Mediterráneo, Barcelona es una ciudad cosmopolita con una gran importancia tanto cultural como comercial, financiera y turística. Barcelona es una de las ciudades europeas más visitadas",
      "precio": "300€",
      "unidas": "1",
      "maximo": "5"
    },
    {
      "id":"3",
      "pais": "España",
      "ciudad": "Galicia",
      "mensaje": "Patrimonio cultural, museos, alojamiento, fiestas... Todos los recursos turísticos de Galicia a tu alcance",
      "precio": "450€",
      "unidas": "1",
      "maximo": "5"
    },
    {
      "id":"4",
      "pais": "España",
      "ciudad": "Madrid",
      "mensaje": "Déjate seducir por la magnífica ciudad de Madrid visitando todos sus museos y paseando por sus calles peculiares. La oferta incluye vuelos desde Cádiz y alojamiento en hotel 4*.",
      "precio": "625€",
      "unidas": "1",
      "maximo": "5"
    },
    {
      "id":"4",
      "pais": "Italia",
      "ciudad": "Roma",
      "mensaje": "Déjate seducir por la magnífica ciudad de Madrid visitando todos sus museos y paseando por sus calles peculiares. La oferta incluye vuelos desde Cádiz y alojamiento en hotel 4*.",
      "precio": "625€",
      "unidas": "1",
      "maximo": "5"
    }

  ]
  **/
  //myciudad= this.ciudades[0];
  private db:AngularFirestore;
  public misViajes = []
  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private storage: AngularFireStorage,
              private firestoreService: FirestoreService
              ) {
                this.viajes = [];
               }

    /**Esta función recoge el file seleccionado */   
    /**    
    onUpload(e){
      //console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2); //generamos un id aleatorio para que no haya nombres repetidos
      const file = e.target.files[0]; //cogemos el fichero que ha subido el usuario
      const filePath = `upload/viaje_${id}`; //utilizamos literales para meter el id
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(finalize(() => 
        this.urlImage = ref.getDownloadURL()
             
      
      
      
      )).subscribe();
      //this.crearViaje(this.urlImage);
      
    
    }
    **/
   onUpload(e){
    const id = Math.random().toString(36).substring(2); //generamos un id aleatorio para que no haya nombres repetidos
    const file = e.target.files[0]; //cogemos el fichero que ha subido el usuario
    const filePath = `upload/viaje_${id}`; //utilizamos literales para meter el id
    const ref = this.firestoreService.getFileRef(filePath);
    const task = this.firestoreService.storageFile(filePath, file);

    //console.log(ref.getDownloadURL());
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => {
        this.urlImage = ref.getDownloadURL();
        
    }
      )).subscribe();
    

    
    
   }
   
    crearViaje(){
      console.log("entra");
      var viaje:Viaje = new Viaje();
      viaje.pais = "Francia"
      viaje.ciudad = "París";
      viaje.continente = "Europa";
      viaje.email = "emailinventado@gmail.com";
      viaje.img = this.inputImageUser.nativeElement.value;
      this.firestoreService.createViaje(viaje);

    } 
    




  ngOnInit(): void {
    //let dato = JSON.parse(localStorage.getItem('pais'));
    
    //let id = localStorage.getItem('pais');
    if(localStorage.getItem('usuario')== "null"){
      var origin = window.location.origin + '/'; 
      var destino = origin + "page1";
      window.location.assign(destino);
    }
    
    let id = this._route.snapshot.paramMap.get('id'); //para saber el pais a traves de la URL
    localStorage.setItem('pais', id);//se establece el local Storage
    
    this.estePais = id.toUpperCase(); //para el titulo

   


    this.s_viajes=this.firestoreService.getViajesSorted().subscribe(data=>{
      this.viajes=data;
    });

    this.firestoreService.getViajesFiltered(this._route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.viajes=res; //obtenemos todos los viajes a dicho pais
      var i = 0;
      var iterado;//servira de variable auxiliar
      this.escogidas = [];//lo vaciamos al cargar la página
      this.ciudades = []//lo vaciamos al cargar la página

      for (i = 0; i<this.viajes.length; i++){
        //recorremos todos los viajes del pais y vamos metiendolos con sus datos en el atributo escogidas
        iterado = new Viaje();
        iterado.id = this.viajes[i].id;
        iterado.ciudad = this.viajes[i].ciudad;
        iterado.continente = this.viajes[i].continente;
        iterado.descripcion = this.viajes[i].descripcion;
        iterado.duracion = this.viajes[i].duracion;
        iterado.email = this.viajes[i].email;
        iterado.fin = this.viajes[i].fin;
        iterado.img = this.viajes[i].img;
        iterado.tlf = this.viajes[i].tlf;
        iterado.inicio = this.viajes[i].inicio;
        iterado.limitePago = this.viajes[i].limitePago;
        iterado.limiteUnion = this.viajes[i].limiteUnion;
        iterado.maximo = this.viajes[i].maximo;
        iterado.servicios = this.viajes[i].servicios;
        iterado.precio = this.viajes[i].precio;
        iterado.pais = this.viajes[i].pais;
        iterado.viajeros = this.viajes[i].viajeros;
        iterado.unidas = this.viajes[i].unidas;
        this.ciudades.push(iterado);
        this.escogidas.push(iterado);

      }
      //una vez estan todos los viajes al pais seleccionado metidos en el array, los filtros funcionan correctamente
      }
    );

    

      

      /**
      var dir = "../../../assets/viajes/Europa/Barcelona-00.jpg"
      //var dir = "Otawa-00";
      var archivo = dir;
      var ref = this.firestoreService.getFileRef("Amberes-01.jpg");
      var tarea = this.firestoreService.storageFile("Amberes-01.jpg", archivo);
      
      ref.getDownloadURL().subscribe((URL) => {
        viaje.img = URL;
      });
      **/
      

      //console.log(this.firestoreService.createViaje(viaje));


  

  






  }








  ngOnDestroy()
  {
    this.s_viajes.unsubscribe();
  }







}
