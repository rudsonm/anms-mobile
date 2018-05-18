import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Doacao } from "../../../models/doacao";
import { AlertController } from "ionic-angular/components/alert/alert-controller";
import { Candidatura } from "../../../models/candidatura";
import { Usuario } from "../../../models/usuario";
import { RestService } from "../../../app/services/rest.service";
import { UsuarioService } from "../../../app/services/usuario.service";
import { ToastService } from "../../../app/services/toast.service";

@Component({
    selector: 'app-animal',
    templateUrl: 'animal.html'
})
export class AnimalPage {
    public usuario: Usuario;
    public doacao: Doacao;
    constructor(
        private navCtrl: NavController, 
        private navParams: NavParams, 
        private alertCtrl: AlertController,
        private service: RestService,
        private usuarioService: UsuarioService,
        private toast: ToastService
    ) {
        this.usuario = usuarioService.usuario;
        this.doacao = navParams.data;
    }

    private removeDonation() {
        this.doacao.Status = "CANCELADO";
        this.service
            .put("doacoes", this.doacao)
            .subscribe(res => {
                this.navCtrl.pop();
            });
    }

    openDonationRemoveAlert() {
        let confirm = this.alertCtrl.create({
            title: 'Delete Donation',
            message: 'Are you shure to remove the donation of '.concat(this.doacao.Animal.Nome).concat('?'),
            buttons: [
                { text: 'Disagree' },
                { 
                    text: 'Agree', 
                    handler: () => this.removeDonation()
                }
            ]
        });
        confirm.present();
    }

    openReasonAlert() {
        let alert = this.alertCtrl.create({
            title: 'Adoption',
            subTitle: 'Candidature for adoption',
            inputs: [{
                name: 'reason',
                placeholder: 'Reason'
            }],
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'danger'
            },
            {
                text: 'Send',
                handler: reason => {
                    this.service.post(
                        "solicitacoes-adocao",
                        new Candidatura(
                            this.doacao,
                            this.usuarioService.usuario,
                            reason
                        )
                    ).subscribe(res => 
                        this.toast.show("Candidatura enviada com sucesso.")
                    );
                },
                cssClass: 'secondary'
            }]
        });
        alert.present();
    }
}