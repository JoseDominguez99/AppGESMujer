import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestComponent } from 'src/app/components/test/test.component';

@Component({
  selector: 'app-colectivo',
  templateUrl: './colectivo.page.html',
  styleUrls: ['./colectivo.page.scss'],
})
export class ColectivoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
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
