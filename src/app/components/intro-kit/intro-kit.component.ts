import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro-kit',
  templateUrl: './intro-kit.component.html',
  styleUrls: ['./intro-kit.component.scss'],
})
export class IntroKitComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

}
