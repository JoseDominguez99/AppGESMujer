import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { Platform } from '@ionic/angular';
import { NetworkService } from './services/network.service';
import { ToastController } from '@ionic/angular';
import { LocalNotifications, LocalNotificationActionPerformed, LocalNotification} from '@capacitor/local-notifications';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userMail: string | null = null;
  alarma: any;

  public appPages = [
    { title: 'Registrarme', url: '/inicio', icon: 'person-circle' },
    { title: 'Mi perfil', url: '/perfil', icon: 'person' },
    { title: 'Autocuidado', url: '/colectivo', icon: 'people' },
    { title: 'Metodología de autocuidado', url: '/metodologias', icon: 'footsteps' },
    { title: 'Claves del autocuidado', url: '/autocuidado', icon: 'heart' },
    { title: 'Kit de seguridad digital', url: '/kit', icon: 'wifi' },
    { title: 'Kit de sanación', url: '/sanacion', icon: 'heart-half' },
    { title: 'Botiquín de autocuidado', url: '/botiquin', icon: 'medkit' },
    { title: 'Comunicación acertiva', url: '/comunicacion', icon: 'chatbubble-ellipses' },
    { title: 'Prevención de la violencia', url: '/prevencion', icon: 'hand-right' },
    { title: 'Recursos', url: '/recursos', icon: 'folder-open' },
    { title: 'Créditos', url: '/creditos', icon: 'information-circle' },
    { title: 'Ayúdanos a crecer', url: '/extra', icon: 'id-card' },
  ];

  constructor(
    private auth: AngularFireAuth,
    private router: Router, 
    private platform: Platform,
    public netService: NetworkService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,

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
    this.alarma = new Audio();
    this.alarma.src = '../../assets/alarma.mp3';
    this.alarma.load();
    this.platform.ready().then(() => {
      document.body.classList.remove('dark'); // Asegura que la clase dark se elimina del body
      document.body.setAttribute('data-theme', 'light');
      this.netService.checkNetworkConnection();
      this.permisos();
    });

  }
  isLoggedIn(): boolean {
    return !!this.userMail;
  }

  async permisos(){
    const result = await LocalNotifications.requestPermissions();
    const resultado = result.display;
    if (result.display === 'granted'){
      console.log(resultado);
      this.mostrarToast('Permisos concedidos');
      this.horarioNotificaciones();
      this.setupNotificationListeners();
    }else{
      console.log(resultado);
      this.mostrarToast('Permisos denegados');
    }
  }

  shouldShowMenu(): boolean {
    return this.isLoggedIn() || !this.netService.isConnected || this.netService.isInvited;
  }
  
  logout(): void {
    this.auth.signOut();
    this.router.navigate(['/inicio']);
    this.netService.isInvited = false;
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

  async horarioNotificaciones(){
    const notifications = [
      {
        id: 1,
        title: 'Recordatorio 1',
        body: 'Es hora del autocuidado matutino',
        schedule: {
          at: new Date(new Date().setHours(9, 0, 0)), // Alarma a las 9 de la mañana
        },
        sound: 'default'
      },
      {
        id: 2,
        title: 'Recordatorio 2',
        body: 'Es hora del autocuidado vespertino',
        schedule: {
          at: new Date(new Date().setHours(14, 0, 0)), // Alarma a las 2 de la tarde
        },
        sound: 'default'
      },
      {
        id: 3,
        title: 'Notificacion 1',
        body: 'Es hora del autocuidado nocturno',
        schedule: {
          at: new Date(new Date().setHours(20, 0, 0)), // Alarma a las 8 de la noche
        },
        sound: 'default'
      },
    ];
    await LocalNotifications.schedule({ notifications });
    
  }
  setupNotificationListeners() {
    LocalNotifications.addListener('localNotificationReceived', (notification: LocalNotification) => {
      this.alarma.play();
    });

    LocalNotifications.addListener('localNotificationActionPerformed', (notification: LocalNotificationActionPerformed) => {
      this.alarma.play();
    });
  }
  
}
