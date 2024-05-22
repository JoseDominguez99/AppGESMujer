import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  template: `
    <ion-content class="ion-padding">
      Desliza a la izquierda en cada paso
    </ion-content>`
})
export class PopoverComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
