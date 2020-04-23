import { Injectable } from '@angular/core';
import { Viaje, Slides } from 'src/app/interfaces/viaje';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot,Query } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { IUsuario,Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private afs:AngularFirestoreCollection<Usuario>;
  private sli:AngularFirestoreCollection<Slides>;

  constructor(private firestore: AngularFirestore,
    private db:AngularFirestore,
    private storage: AngularFireStorage) 
  {
    this.afs=this.firestore.collection('Viaje');
    this.sli=this.firestore.collection('Slides');
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

  
}
