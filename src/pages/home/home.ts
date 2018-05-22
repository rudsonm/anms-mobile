import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController, ModalController } from 'ionic-angular';
import { AnimalsPage } from '../animals/animals';
import { UsuarioService } from '../../app/services/usuario.service';
import { ToastService } from '../../app/services/toast.service';
import { LoadingService } from '../../app/services/loading.service';
import { SignUpModal } from './signup/signup.modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email: string;
  public password: string;
  constructor(
    public navCtrl: NavController,
    private service: UsuarioService,
    private toast: ToastService,
    private loadService: LoadingService,
    private modalCtrl: ModalController
  ) { }

  login(email: string, password: string) {
    this.loadService.present();
    this.service
        .login(email, password)
        .then(res => {
          this.loadService.dismiss();
          this.email = this.password = "";
          this.navCtrl.push(AnimalsPage);
        }, err => {
          this.loadService.dismiss();
          this.toast.show(err.error.error_description);
        });
  }

  openSignUpModal() {
    let modal = this.modalCtrl.create(SignUpModal, null, { showBackdrop: true, enableBackdropDismiss: true });
    modal.onDidDismiss(usuario => {
      if(usuario)
        this.login(usuario.Email, usuario.Senha);
    });
    modal.present();
  }

}