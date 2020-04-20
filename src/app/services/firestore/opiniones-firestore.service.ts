import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot,Query } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { IComentario,Comentario, IPuntuacion, Puntuacion } from '../../interfaces/opiniones';

@Injectable({
  providedIn: 'root'
})
export class OpinionesFirestoreService {

  private com:AngularFirestoreCollection<Comentario>;
  private pun:AngularFirestoreCollection<Puntuacion>;

  constructor(private firestore: AngularFirestore,
    private db:AngularFirestore,
    private storage: AngularFireStorage) 
  {
    this.com=this.firestore.collection('Comentario');
    this.pun=this.firestore.collection('Puntuacion');
  }

  public createComentario(data: IComentario):Promise<string>
  {
    //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
    //  return r.id;});   
    
    data.id=this.firestore.createId();
    
    
    return this.com.doc(data.id).set({... data}).then(r=>{
      return data.id;  
    });
  }
  public createPuntuacion(data: IPuntuacion):Promise<string>
  {
    //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
    //  return r.id;});   
    
    data.id=this.firestore.createId();
    
    
    return this.pun.doc(data.id).set({... data}).then(r=>{
      return data.id;  
    });
  }    

  public getComentario(id: string):Promise<Comentario>
  {
    return this.com.doc(id).get().toPromise().then(r=>{
      //Si quisieras forzar que se ejecute constructor de Contacto:
      //return new Contacto(r.data() as IContacto);
      var contacto = r.data() as Comentario;
      console.log(contacto);
      return contacto;
    });
  }
  public getPuntuacion(id: string):Promise<Puntuacion>
  {
    return this.pun.doc(id).get().toPromise().then(r=>{
      //Si quisieras forzar que se ejecute constructor de Contacto:
      //return new Contacto(r.data() as IContacto);
      var contacto = r.data() as Puntuacion;
      console.log(contacto);
      return contacto;
    });
  }
 
  public getComentarios():Observable<Comentario[]>
  {
    return this.com.valueChanges();
  }  
  public getPuntuaciones():Observable<Puntuacion[]>
  {
    return this.pun.valueChanges();
  }  
 
  
  public updateComentario(data:Comentario)
  {
    return this.com.doc(data.id).set(data);
  }
  public updatePuntuacion(data:Puntuacion)
  {
    return this.pun.doc(data.id).set(data);
  }

  public removeComentario(id: string)
  {
    return this.com.doc(id).delete();
  }
  public removePuntuacion(id: string)
  {
    return this.pun.doc(id).delete();
  }

  // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.

  public getComentariosSorted():Observable<Comentario[]>
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
  
    return this.firestore.collection<Comentario>('Comentario',ref=>ref.orderBy('comentador')).valueChanges();
  }
  public getPuntuacionesSorted():Observable<Puntuacion[]>
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
  
    return this.firestore.collection<Puntuacion>('Puntuacion',ref=>ref.orderBy('puntuado')).valueChanges();
  }

  
  public getComentariosFiltered(comentado:String):Observable<Comentario[]>
  {  
    return this.firestore.collection<Comentario>('Comentario',ref=>ref.where('comentado','==',comentado)).valueChanges();
  }

  public getPuntuacionesFiltered(puntuado:String):Observable<Puntuacion[]>
  {  
    return this.firestore.collection<Puntuacion>('Puntuacion',ref=>ref.where('puntuado','==',puntuado)).valueChanges();
  }

  public getComentariosCombined(comentado:String):Observable<Comentario[]>
  {  
    return this.firestore.collection<Comentario>('Comentario',ref=>ref.where('comentado','==',comentado).orderBy("comentador")).valueChanges();
  }

  public getPuntuacionesCombined(puntuado:String):Observable<Puntuacion[]>
  {  
    return this.firestore.collection<Puntuacion>('Puntuacion',ref=>ref.where('puntuado','==',puntuado).orderBy("puntuador")).valueChanges();
  }


  //Tarea para subir archivo
  public storageFile(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public getFileRef(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
}
