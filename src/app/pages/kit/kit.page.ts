import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroKitComponent } from 'src/app/components/intro-kit/intro-kit.component';
import { SwiperOptions } from 'swiper/types';
import { SwiperModule } from 'swiper/types';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.page.html',
  styleUrls: ['./kit.page.scss'],
})
export class KitPage implements OnInit {

  swiperConfig: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };



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
