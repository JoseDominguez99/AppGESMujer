import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'metodologias',
    loadChildren: () => import('./pages/metodologias/metodologias.module').then( m => m.MetodologiasPageModule)
  },
  {
    path: 'botiquin',
    loadChildren: () => import('./pages/botiquin/botiquin.module').then( m => m.BotiquinPageModule)
  },
  {
    path: 'colectivo',
    loadChildren: () => import('./pages/colectivo/colectivo.module').then( m => m.ColectivoPageModule)
  },
  {
    path: 'prevencion',
    loadChildren: () => import('./pages/prevencion/prevencion.module').then( m => m.PrevencionPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./pages/tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./pages/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'extra',
    loadChildren: () => import('./pages/extra/extra.module').then( m => m.ExtraPageModule)
  },
  {
    path: 'autocuidado',
    loadChildren: () => import('./pages/autocuidado/autocuidado.module').then( m => m.AutocuidadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}