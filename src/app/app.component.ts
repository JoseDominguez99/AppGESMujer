import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { Platform } from '@ionic/angular';
import { NetworkService } from './services/network.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userMail: string | null = null;

  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Metodologías de autocuidado', url: '/metodologias', icon: 'footsteps' },
    { title: 'Autocuidado', url: '/autocuidado', icon: 'heart' },
    { title: 'Botiquín de autocuidado', url: '/botiquin', icon: 'medkit' },
    { title: 'Autocuidado colectivo', url: '/colectivo', icon: 'people' },
    { title: 'Prevención de la violencia', url: '/prevencion', icon: 'hand-right' },
    { title: 'Créditos', url: '/creditos', icon: 'information-circle' },
    { title: 'Ayúdanos a crecer', url: '/extra', icon: 'id-card' },
  ];

  constructor(
    private auth: AngularFireAuth,
    private router: Router, 
    private platform: Platform,
    public netService: NetworkService
  ) {
    this.initializeApp();
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
      }else{
        this.userMail = null;
      }
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      document.body.classList.remove('dark'); // Asegura que la clase dark se elimina del body
      document.body.setAttribute('data-theme', 'light');
      this.netService.checkNetworkConnection();
    });
  }
  isLoggedIn(): boolean {
    return !!this.userMail;
  }

  shouldShowMenu(): boolean {
    return this.isLoggedIn() || !this.netService.isConnected;
  }
  
  logout(): void {
    this.auth.signOut();
    this.router.navigate(['/inicio']);
  }
}
