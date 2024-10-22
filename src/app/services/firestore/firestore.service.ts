import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot,Query } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { IViaje,Viaje, Slides, ISlides } from '../../interfaces/viaje';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  
  private afs:AngularFirestoreCollection<Viaje>;
  private sli:AngularFirestoreCollection<Slides>;
 
  //private db: AngularFirestore;

  constructor(private firestore: AngularFirestore,
              private db:AngularFirestore,
              private storage: AngularFireStorage) 
  {
    this.afs=this.firestore.collection('Viaje');
    this.sli=this.firestore.collection('Slides');
    
  }

 
  public createViaje(data: IViaje):Promise<string>
  {
    //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
    //  return r.id;});   
    
    data.id=this.firestore.createId();
    data.unidas = "0";
    
    return this.afs.doc(data.id).set({... data}).then(r=>{
      return data.id;  
    });
  }  

  public getViaje(id: string):Promise<Viaje>
  {
    return this.afs.doc(id).get().toPromise().then(r=>{
      
      var viaje = r.data() as Viaje;
      return viaje;
    });
  }
 
  public getViajes():Observable<Viaje[]>
  {
    return this.afs.valueChanges();
  }  
 
  
  public updateViaje(data:Viaje)
  {
    console.log("hola");
    return this.afs.doc(data.id).set(data);
  }

  public removeViaje(id: string)
  {
    return this.afs.doc(id).delete();
  }

  // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.

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
  
    return this.firestore.collection<Viaje>('Viaje',ref=>ref.orderBy('ciudad')).valueChanges();
  }

  
  public getViajesFiltered(pais:String):Observable<Viaje[]>
  {  
    return this.firestore.collection<Viaje>('Viaje',ref=>ref.where('pais','==',pais)).valueChanges();
  }

  public getViajesByEmail(email:String):Observable<Viaje[]>
  {  
    return this.firestore.collection<Viaje>('Viaje',ref=>ref.where('email','==',email)).valueChanges();
  }

  public getViajesCombined(pais:String):Observable<Viaje[]>
  {  
    return this.firestore.collection<Viaje>('Viaje',ref=>ref.where('pais','==',pais).orderBy("ciudad")).valueChanges();
  }


  //Tarea para subir archivo
  public storageFile(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public getFileRef(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  public getSlides(idViaje: string):Observable<Slides[]>
  {
    return this.firestore.collection<Slides>('Slides',ref=>ref.where('idViaje','==',idViaje)).valueChanges();
  } 

}