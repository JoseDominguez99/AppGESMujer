import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestComponent } from 'src/app/components/test/test.component';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth-types';


@Component({
  selector: 'app-colectivo',
  templateUrl: './colectivo.page.html',
  styleUrls: ['./colectivo.page.scss'],
})
export class ColectivoPage implements OnInit {
  userMail: string | null = null;
  respuestas = {
    si: '',
    no: ''
  }

  constructor(
    private modalCtrl: ModalController,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth) { 
    }

  ngOnInit() {
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
        this.firestore.collection('resultadosTest', ref => ref.where('correo', '==', this.userMail)).valueChanges().subscribe((data: any[]) => {
          if (data.length > 0) {
            this.respuestas.si = data[0].respuestasSi;
            this.respuestas.no = data[0].respuestasNo;
          }else{
            console.log('no hay resultados');
          }
        });
      }else{
        this.userMail = null;
      }
    });
  }


  async abrirTest(){
    const modal = await this.modalCtrl.create({
      component: TestComponent,
      initialBreakpoint:  .8,
      mode: 'md',
      showBackdrop: true,
      backdropDismiss: false,
    });
    return await modal.present();
  }
}
