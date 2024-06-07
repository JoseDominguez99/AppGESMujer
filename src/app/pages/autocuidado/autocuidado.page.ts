import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-autocuidado',
  templateUrl: './autocuidado.page.html',
  styleUrls: ['./autocuidado.page.scss'],
})
export class AutocuidadoPage implements OnInit {
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
  
  seleccion = '';
  constructor(
    private netService: NetworkService
  ) { }

  ngOnInit() {
    console.log(this.netService.isInvited.valueOf());
    
  }

  selectCategory(ev: any){
    this.seleccion = ev.detail.value;
  }

}
