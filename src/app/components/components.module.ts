import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './test/test.component';
import { ViolentometroComponent } from './violentometro/violentometro.component';
import { IntroMetodologiasComponent } from '../intro-metodologias/intro-metodologias.component';
import { IntroAutodiagnosticoComponent } from './intro-autodiagnostico/intro-autodiagnostico.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TestComponent,
    ViolentometroComponent,
    IntroMetodologiasComponent,
    IntroAutodiagnosticoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    IntroMetodologiasComponent,
    IntroAutodiagnosticoComponent
  ],
})
export class ComponentsModule { }
