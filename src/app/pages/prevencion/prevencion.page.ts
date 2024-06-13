import { Component, OnInit } from '@angular/core';
import { ViolentometroComponent } from 'src/app/components/violentometro/violentometro.component';
import { ModalController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { IntroPrevencionComponent } from 'src/app/components/intro-prevencion/intro-prevencion.component';
@Component({
  selector: 'app-prevencion',
  templateUrl: './prevencion.page.html',
  styleUrls: ['./prevencion.page.scss'],
})
export class PrevencionPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.mostrarModal();
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

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroPrevencionComponent,
    });
    await modal.present();
  }

}
