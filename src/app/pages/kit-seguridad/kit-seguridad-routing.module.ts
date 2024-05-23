import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitSeguridadPage } from './kit-seguridad.page';

const routes: Routes = [
  {
    path: '',
    component: KitSeguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitSeguridadPageRoutingModule {}
