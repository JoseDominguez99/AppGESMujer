import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroKitComponent } from 'src/app/components/intro-kit/intro-kit.component';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.page.html',
  styleUrls: ['./kit.page.scss'],
})
export class KitPage implements OnInit {

  constructor(
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.abrirIntro();
  }

  async abrirIntro(){
    const modal = await this.modalCtrl.create({
      component: IntroKitComponent
    });
    return await modal.present();
  }

}
