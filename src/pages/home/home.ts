import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AnimalsPage } from '../animals/animals';
import { UsuarioService } from '../../app/services/usuario.service';
import { ToastService } from '../../app/services/toast.service';

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
    private toast: ToastService
  ) { }

  login(email:string, password:string) {
    this.service
        .login(email, password)
        .then(res => {
            this.email = this.password = "";
            this.navCtrl.push(AnimalsPage);
          }, err => {
            this.toast.show(err.error.error_description);
          });
  }

}
