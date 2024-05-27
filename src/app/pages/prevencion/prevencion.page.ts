import { Component, OnInit } from '@angular/core';
import { ViolentometroComponent } from 'src/app/components/violentometro/violentometro.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prevencion',
  templateUrl: './prevencion.page.html',
  styleUrls: ['./prevencion.page.scss'],
})
export class PrevencionPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirTest(){
    const modal = await this.modalCtrl.create({
      component: ViolentometroComponent,
      initialBreakpoint:  .9,
      mode: 'md',
      showBackdrop: true,
      backdropDismiss: false,
    });
    return await modal.present();
  }

}
