import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";
import { RestService } from "../../../app/services/rest.service";
import { Usuario } from "../../../models/usuario";
import { ToastService } from "../../../app/services/toast.service";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.html'
})
export class SignUpModal {
    public usuario: Usuario = new Usuario;

    constructor(
        private viewCtrl: ViewController,
        private restService: RestService,
        private toastService: ToastService
    ) {
        this.usuario = new Usuario();
    }

    ionViewCanEnter() {
        this.usuario = new Usuario();
    }

    dismiss(usuario?: Usuario) {
        this.viewCtrl.dismiss(usuario || null);
    }

    createUser(user: Usuario) {
        this.restService
            .post("usuarios", user)
            .subscribe(res => {
                this.toastService.show("Usuário criado com sucesso.");
                this.dismiss((res as Usuario));
            });
    }
}