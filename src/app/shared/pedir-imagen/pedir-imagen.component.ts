import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
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
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-pedir-imagen',
  templateUrl: './pedir-imagen.component.html',
  styleUrls: ['./pedir-imagen.component.scss']
})
export class PedirImagenComponent implements OnInit {


  

  @ViewChild('imageUser') inputImageUser;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  myUrl = "";
  //@Output() public url = new EventEmitter();
  @Output() url: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _route:ActivatedRoute,
    private _router: Router,
    private storage: AngularFireStorage,
    private firestoreService: FirestoreService
    ) {
      
     }

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
  getURL(){
    var url = this.inputImageUser.nativeElement.value;
    console.log(url);
    this.url.emit(url);
    alert("La imagen se ha subido correctamente");
    return url;
  }

  cerrar(){
    document.getElementById("all").style.display = "none";
  }

  ngOnInit(): void {
  }

}
