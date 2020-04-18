import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot,Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IViaje, Viaje } from '../interfaces/viaje';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private afs:AngularFirestoreCollection<Viaje>;

  constructor(private firestore: AngularFirestore) {
    this.afs=this.firestore.collection('Viaje');
   }


  public createViaje(data: IViaje):Promise<string>
  {
    //return this.firestore.collection<IViaje>('contactos').add({... data}).then(r=>{
    //  return r.id;});   
    
    data.id=this.firestore.createId();
    return this.afs.doc(data.id).set({... data}).then(r=>{
      return data.id;  
    });
  } 
  
  public getViaje(id: string):Promise<Viaje>
  {
    return this.afs.doc(id).get().toPromise().then(r=>{
      //Si quisieras forzar que se ejecute constructor de Contacto:
      //return new Contacto(r.data() as IContacto);
      var contacto = r.data() as Viaje;
      console.log(contacto);
      return contacto;
    });
  }
  public getViajes():Observable<Viaje[]>
  {
    return this.afs.valueChanges();
  }  
  public updateViaje(data:Viaje)
  {
    return this.afs.doc(data.id).set(data);
  }

  public removeViaje(id: string)
  {
    return this.afs.doc(id).delete();
  }

  public getViajesSorted():Observable<Viaje[]>
  {  
    /*
    PUEDE SER UTIL:

    this.afs.ref.orderBy('nombre').onSnapshot(z=>{
      z.docChanges().filter(f=>f.type==="added").forEach(d=>{
          console.log(d.doc.data());
      });
    });
    
    this.afs.ref.orderBy('nombre').onSnapshot(z=>{
      z.docs.forEach(d=>{
          console.log(d.data());
      });
    });
    */
  
    return this.firestore.collection<Viaje>('contactos',ref=>ref.orderBy('ciudad')).valueChanges();
  }
}
