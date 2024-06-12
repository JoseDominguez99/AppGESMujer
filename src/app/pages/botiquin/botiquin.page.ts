import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DescargasService } from 'src/app/services/descargas.service';
import { ToastController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { ModalController } from '@ionic/angular';
import { IntroBotiquinComponent } from 'src/app/components/intro-botiquin/intro-botiquin.component';

@Component({
  selector: 'app-botiquin',
  templateUrl: './botiquin.page.html',
  styleUrls: ['./botiquin.page.scss'],
})
export class BotiquinPage implements OnInit {
  audioReproduciendose: boolean = false;
  audio: any;


  constructor(
    private router: Router,
    private descarga: DescargasService,
    private toastCtrl: ToastController,
    public netService: NetworkService,
    private modalCtrl: ModalController) { 
  }


  ngOnInit() {
    this.mostrarModal();
    this.netService.checkNetworkConnection2();
    this.audio = new Audio();
    this.audio.src = '../../assets/meditacion.mp3';
    this.audio.load();
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroBotiquinComponent,
    });
    await modal.present();
  }
  playAudio() {
    if (this.audioReproduciendose) {
      this.pausarAudio();
    } else {
      this.reproducirAudio();
    }
  }
  reproducirAudio() {
    this.audio.play();
    this.audioReproduciendose = true;
  }

  pausarAudio() {
    this.audio.pause();
    this.audioReproduciendose = false;
  }

  abrirKit(){
    this.router.navigate(['/kit-seguridad']);
  }

  downloadPoliticas() {
    this.descarga.downloadFile('documentos/politicas.docx').subscribe(url => {
      window.open(url, '_blank');
      this.mostrarToast('Documento guardado en el dispositivo');
    }, error => {
      console.error('Error al descargar el archivo', error);
    });
  }
  downloadPlan() {
    this.descarga.downloadFile('documentos/PLAN_DE_AUTOCUIDADO_COLECTIVO.docx').subscribe(url => {
      window.open(url, '_blank');
      this.mostrarToast('Documento guardado en el dispositivo');
    }, error => {
      console.error('Error al descargar el archivo', error);
    });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000, 
      position: 'bottom',
      animated: true,
    });
    toast.present();
  }


}
