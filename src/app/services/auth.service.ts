import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(correo: string, password: string){
    return this.auth.signInWithEmailAndPassword(correo, password);
  }

  registro(correo: string, password: string){
    return this.auth.createUserWithEmailAndPassword(correo, password);
  }

  logOut(){
    return this.auth.signOut();
  }
}
