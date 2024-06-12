import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './test/test.component';
import { ViolentometroComponent } from './violentometro/violentometro.component';
import { IntroMetodologiasComponent } from '../intro-metodologias/intro-metodologias.component';
import { IntroAutodiagnosticoComponent } from './intro-autodiagnostico/intro-autodiagnostico.component';
import { IntroKitComponent } from './intro-kit/intro-kit.component';
import { IntroClavesComponent } from './intro-claves/intro-claves.component';
import { IntroSanacionComponent } from './intro-sanacion/intro-sanacion.component';
import { IntroBotiquinComponent } from './intro-botiquin/intro-botiquin.component';
import { IntroAsertivaComponent } from './intro-asertiva/intro-asertiva.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TestComponent,
    ViolentometroComponent,
    IntroMetodologiasComponent,
    IntroAutodiagnosticoComponent,
    IntroKitComponent,
    IntroClavesComponent,
    IntroSanacionComponent,
    IntroBotiquinComponent,
    IntroAsertivaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    IntroMetodologiasComponent,
    IntroAutodiagnosticoComponent,
    IntroKitComponent,
    IntroClavesComponent,
    IntroSanacionComponent,
    IntroBotiquinComponent,
    IntroAsertivaComponent
  ],
})
export class ComponentsModule { }
