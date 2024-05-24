import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth-types';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent  implements OnInit {
  userMail: string | null = null;

  public progress = 0;
  step = 1;
  si = 0;
  no = 0;
  res = 0;
  respuestas = {
    correo: '',
    si: '',
    no: ''
  }

  constructor(
    private modalCtrl: ModalController,
    private auth: AngularFireAuth, 
    private firestore: AngularFirestore,
    private toastCtrl: ToastController) {
    }

  ngOnInit() {
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
        console.log(this.userMail);
        
      }else{
        this.userMail = null;
      }
    });
  }
  async closeModal() {
    await this.modalCtrl.dismiss({
    });
  }

  aumentarSi(){
    this.step += 1;
    this.si += 1;
    this.progress = this.progress + 0.09;
    console.log('pregunta: ' + this.step);
    console.log('progreso: ' + this.progress);
    if (this.step > 0) {
      this.evaluar();
    }
  }

  aumentarNo(){
    this.step += 1;
    this.no += 1;
    this.progress = this.progress + 0.09;
    console.log('pregunta: ' + this.step);
    console.log('progreso: ' + this.progress);
    if (this.step > 0) {
      this.evaluar();
    }
  }

  evaluar(){
    if(this.step == 12 && this.si <=4){
      this.res = 1;
    }else if( this.step == 12 && this.si >4 && this.si <=8){
      this.res = 2;
    }else if( this.step == 12 && this.si >8){
      this.res = 3;
    }
  }

  guardarResultado(){
    this.firestore.collection('resultadosTest').add({
      correo: this.userMail,
      respuestasSi: this.si,
      respuestasNo: this.no,
    }).then(()=>{
      this.mostrarToast('Datos guardados correctamente');

    }).catch(error => {
      this.mostrarToast('Error al registrar tus datos')
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
