import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro-autodiagnostico',
  templateUrl: './intro-autodiagnostico.component.html',
  styleUrls: ['./intro-autodiagnostico.component.scss'],
})
export class IntroAutodiagnosticoComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

}
