import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import {Router} from '@angular/router';
import {FirestoreService} from '../services/firestore/firestore.service';
import {Subscription} from 'rxjs';
import {Viaje, IViaje} from '../interfaces/viaje';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  constructor(private _route:ActivatedRoute,
    private _router: Router,
    private storage: AngularFireStorage,
    private firestoreService: FirestoreService
    ) {
      
     }

  ngOnInit(): void {
  }

  crearViaje(e){
    console.log("entra");
    var viaje:Viaje = new Viaje();
    viaje.pais = "Alemania"
    viaje.ciudad = "Berlín";
    viaje.continente = "Europa";
    viaje.email = "emailinventado@gmail.com";
    viaje.img = e;
    this.firestoreService.createViaje(viaje);

  } 

}
