import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot,Query } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { IUsuario,Usuario } from '../../interfaces/usuario';
import { IViaje,Viaje } from '../../interfaces/viaje';
import { ISolicitud,Solicitud } from '../../interfaces/solicitud';


@Injectable({
  providedIn: 'root'
})
export class SolicitudFirestoreService {

  constructor(private firestore: AngularFirestore,
    private db:AngularFirestore,
    private storage: AngularFireStorage) 
  {
    this.afs=this.firestore.collection('Solicitud');
  }

  private afs:AngularFirestoreCollection<Solicitud>;

  public getSolicitudesByUserId(id:String):Observable<Solicitud[]>
  {  
    return this.firestore.collection<Solicitud>('Solicitud',ref=>ref.where('idUsuario','==',id)).valueChanges();
  }

  public getSolicitudesByTripId(id:String):Observable<Solicitud[]>
  {  
    return this.firestore.collection<Solicitud>('Solicitud',ref=>ref.where('idViaje','==',id)).valueChanges();
  }
  public getSolicitudesByOrganizadorId(id:String):Observable<Solicitud[]>
  {  
    return this.firestore.collection<Solicitud>('Solicitud',ref=>ref.where('idOrganizador','==',id)).valueChanges();
  }
}