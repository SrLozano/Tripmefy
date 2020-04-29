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

  public getSolicitud(id: string):Promise<Solicitud>
  {
    return this.afs.doc(id).get().toPromise().then(r=>{
      var solicitud = r.data() as Solicitud;
      return solicitud;
    });
  }

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
  public getSolicitudesByOrganizadorEmail(email:String):Observable<Solicitud[]>
  {  
    return this.firestore.collection<Solicitud>('Solicitud',ref=>ref.where('idOrganizador','==',email)).valueChanges();
  }

  public createSolicitud(data: ISolicitud):Promise<string>
  {
    //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
    //  return r.id;});   
    
    data.id=this.firestore.createId();
    
    localStorage.setItem('solicitud', data.id);
       
    return this.afs.doc(data.id).set({... data}).then(r=>{
      return data.id;  
    });

  }  

  public updateSolicitud(data:Solicitud)
  {
    return this.afs.doc(data.id).set(data);
  }

}