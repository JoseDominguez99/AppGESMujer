import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor(
    private router: Router,
    private netService: NetworkService,
  ) { }

  ngOnInit() {
  }

  aceptar() {
    this.router.navigateByUrl('/colectivo');
  }

  irARegistro() {
    this.router.navigateByUrl('/inicio');
    this.netService.isInvited = false;
  }

}
