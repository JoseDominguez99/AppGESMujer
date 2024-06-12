import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanacionPageRoutingModule } from './sanacion-routing.module';

import { SanacionPage } from './sanacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanacionPageRoutingModule
  ],
  declarations: [SanacionPage]
})
export class SanacionPageModule {}
