import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: Router) { 
    this.userData = afAuth.authState;
  }

  registerUser(email: string, password: string){
    return new Promise ((resolve, reject)=>{
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(userData => 
          resolve(userData),
          err => reject(err));
    });
  }

  

  loginByEmail(user: IUsuario){
    const {email, password} = user;
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Successfuly', res)
      this.route.navigate(['/mis-viajes'])
    })
    .catch(err => 
      console.log('Error', err)
    )
  }

  logOut(){
    console.log('Successfuly');
    this.afAuth.signOut();
    localStorage.clear();
    this.route.navigate(['/'])
  }
}
