import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { ToastController } from '@ionic/angular';

import { AngularFirestore} from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {
  userMail: string | null = null;
  datos = {
    correo: '',
    nombre: '',
    edad: '',
    estado: '',
    localidad: '',
  }

  constructor(private router: Router, private auth: AngularFireAuth, private toastCtrl: ToastController, private firestore: AngularFirestore) {
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
      }else{
        this.userMail = null;
      }
    });
   }

  ngOnInit() {
    this.firestore.collection('Users', ref => ref.where('Correo', '==', this.userMail)).valueChanges().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.datos.nombre = data[0].Nombre;
        this.datos.edad = data[0].Edad;
        this.datos.estado = data[0].Estado;
        this.datos.localidad = data[0].Localidad;
      }
    });
  }
  guardar(){
    this.firestore.collection('Users').add({
      Nombre: this.datos.nombre,
      Correo: this.userMail,
      Edad: this.datos.edad,
      Estado: this.datos.estado,
      Localidad: this.datos.localidad,
    }).then(()=>{
      this.mostrarToast('Datos guardados, gracias por ayudarnos a crecer');
      this.router.navigate(['./perfil']);

    }).catch(error => {
      this.mostrarToast('Error al registrar tuss datos')
    });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000, 
      position: 'bottom',
      animated: true,
    });
    toast.present();
  }

}
