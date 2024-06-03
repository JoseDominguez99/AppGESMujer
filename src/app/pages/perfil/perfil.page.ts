import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth-types';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { NetworkService } from 'src/app/services/network.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilFoto: string = '';
  userMail: string | null = null;
  datos = {
    nombre: '',
    edad: '',
    estado: '',
    localidad: '',
  };

  constructor(
    private router: Router, 
    private auth: AngularFireAuth, 
    private firestore: AngularFirestore, 
    private storage: AngularFireStorage,
    public netService: NetworkService){
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
        this.obtenerDatosUsuario();
        console.log(this.datos);
      }else{
        this.userMail = null;
      }
    });
   }

  ngOnInit() {
    this.netService.checkNetworkConnection2();
  }

  selectImage() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  uploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const filePath = `profile_images/${new Date().getTime()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.perfilFoto = url;
            this.saveImageUrl(url);
          });
        })
      ).subscribe();
    }
  }
  saveImageUrl(url: string) {
    this.firestore.collection('Users', ref => ref.where('Correo', '==', this.userMail)).get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        this.firestore.collection('Users').doc(doc.id).update({ profileImageUrl: url }).then(() => {
          console.log('URL de la imagen guardada en Firestore');
        }).catch(error => {
          console.error('Error al guardar la URL en Firestore:', error);
        });
      });
    });
  }
 
  obtenerDatosUsuario() {
    this.firestore.collection('Users', ref => ref.where('Correo', '==', this.userMail)).valueChanges().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.datos.nombre = data[0].Nombre;
        this.datos.edad = data[0].Edad;
        this.datos.estado = data[0].Estado;
        this.datos.localidad = data[0].Localidad;
        this.perfilFoto = data[0].profileImageUrl || '../../../assets/GESMujer45años.png';
      }
    });
  }


  perfilCompleto() {
    this.router.navigate(['./extra']);
  }

}
