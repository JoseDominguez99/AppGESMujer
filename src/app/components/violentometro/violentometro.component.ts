import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-violentometro',
  templateUrl: './violentometro.component.html',
  styleUrls: ['./violentometro.component.scss'],
})
export class ViolentometroComponent  implements OnInit {
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

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalCtrl.dismiss({
    });
  }

  aumentarSi(){
    this.step += 1;
    this.si += 1;
    this.progress = this.progress + 0.068;
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
    if(this.step == 14 && this.si <=4){
      this.res = 1;
    }else if( this.step == 14 && this.si >4 && this.si <=8){
      this.res = 2;
    }else if( this.step == 14 && this.si >8){
      this.res = 3;
    }
  }

}
