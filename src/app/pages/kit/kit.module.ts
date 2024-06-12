import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitPageRoutingModule } from './kit-routing.module';

import { KitPage } from './kit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitPageRoutingModule
  ],
  declarations: [KitPage]
})
export class KitPageModule {}
