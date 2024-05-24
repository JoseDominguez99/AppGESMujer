import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent  implements OnInit {

  public progress = 0;
  step = 1;
  si = 0;
  no = 0;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  async closeModal() {
    await this.modalCtrl.dismiss({
    });
  }

  aumentarSi(){
    this.step += 1;
    this.si += 1;
    console.log(this.step);
  }

  aumentarNo(){
    this.step += 1;
    this.no += 1;
    console.log(this.step);
    
  }

}
