import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botiquin',
  templateUrl: './botiquin.page.html',
  styleUrls: ['./botiquin.page.scss'],
})
export class BotiquinPage implements OnInit {
  audioReproduciendose: boolean = false;
  audio: any;

  constructor() { }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = '../../assets/meditacion.mp3';
    this.audio.load();
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

}
