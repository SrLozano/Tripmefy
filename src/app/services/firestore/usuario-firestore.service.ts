import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot,Query } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { IUsuario,Usuario } from '../../interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  private afs:AngularFirestoreCollection<Usuario>;

  constructor(private firestore: AngularFirestore,
    private db:AngularFirestore,
    private storage: AngularFireStorage) 
  {
    this.afs=this.firestore.collection('Usuario');
  }

  public createUsuario(data: IUsuario):Promise<string>
  {
    //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
    //  return r.id;});   
    
    data.id=this.firestore.createId();
    data.estrellas = "-1";
    console.log("la id es ", data.id);
    localStorage.setItem('id', data.id);
    console.log("la id esss ", localStorage.getItem('id'));
    console.log("el tipo de usuario es ", localStorage.getItem("tipo"));
    
    return this.afs.doc(data.id).set({... data}).then(r=>{
      return data.id;  
    });
  }  

  public getUsuario(id: string):Promise<Usuario>
  {
    return this.afs.doc(id).get().toPromise().then(r=>{
      //Si quisieras forzar que se ejecute constructor de Contacto:
      //return new Contacto(r.data() as IContacto);
      var contacto = r.data() as Usuario;
      console.log(contacto);
      return contacto;
    });
  }
 
  public getUsuarios():Observable<Usuario[]>
  {
    return this.afs.valueChanges();
  }  
 
  
  public updateUsuario(data:Usuario)
  {
    return this.afs.doc(data.id).set(data);
  }

  public removeUsuario(id: string)
  {
    return this.afs.doc(id).delete();
  }

  // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.

  public getUsuariosSorted():Observable<Usuario[]>
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
  
    return this.firestore.collection<Usuario>('Usuario',ref=>ref.orderBy('puntuacion')).valueChanges();
  }

  
  public getUsuariosFiltered(id:String):Observable<Usuario[]>
  {  
    return this.firestore.collection<Usuario>('Usuario',ref=>ref.where('id','==',id)).valueChanges();
  }

  public getusuariosCombined(pais:String):Observable<Usuario[]>
  {  
    return this.firestore.collection<Usuario>('Usuario',ref=>ref.where('pais','==',pais).orderBy("ciudad")).valueChanges();
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
