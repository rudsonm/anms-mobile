import { Doacao } from "../../../models/doacao";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UsuarioService } from "../../../app/services/usuario.service";
import { Animal } from "../../../models/animal";
import { RestService } from "../../../app/services/rest.service";
import { ToastService } from "../../../app/services/toast.service";

@Component({
    selector: 'app-donate',
    templateUrl: 'donate.html'
})
export class DonatePage {
    public doacao: Doacao;

    constructor(
        private navCtrl: NavController, 
        private usuarioService: UsuarioService,
        private service: RestService,
        private toast: ToastService
    ) {
        this.doacao = new Doacao(usuarioService.usuario, new Animal());
    }

    sendDonate(donate) {
        this.service
            .post("doacoes", donate)
            .subscribe(res => {
                this.toast.show("Donation saved successfully.");
                this.navCtrl.pop();
            });
    }
}