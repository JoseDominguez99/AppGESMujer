import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocuidado',
  templateUrl: './autocuidado.page.html',
  styleUrls: ['./autocuidado.page.scss'],
})
export class AutocuidadoPage implements OnInit {

  seleccion = '';
  constructor() { }

  ngOnInit() {
  }

  selectCategory(ev: any){
    this.seleccion = ev.detail.value;
  }

}
