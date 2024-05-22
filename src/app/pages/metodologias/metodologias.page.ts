import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-metodologias',
  templateUrl: './metodologias.page.html',
  styleUrls: ['./metodologias.page.scss'],
})
export class MetodologiasPage implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
