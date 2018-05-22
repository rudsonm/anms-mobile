import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { Doacao } from "../../../models/doacao";
import { AlertController } from "ionic-angular/components/alert/alert-controller";
import { Candidatura } from "../../../models/candidatura";
import { Usuario } from "../../../models/usuario";
import { RestService } from "../../../app/services/rest.service";
import { UsuarioService } from "../../../app/services/usuario.service";
import { ToastService } from "../../../app/services/toast.service";
import { CandidateModal } from "../candidate/candidate";

@Component({
    selector: 'app-animal',
    templateUrl: 'animal.html'
})
export class AnimalPage {
    public usuario: Usuario;
    public doacao: Doacao;
    public candidatura: Candidatura;
    constructor(
        private navCtrl: NavController, 
        private navParams: NavParams, 
        private alertCtrl: AlertController,
        private service: RestService,
        private usuarioService: UsuarioService,
        private toast: ToastService,
        private modalCtrl: ModalController
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

    ionViewCanEnter() {
        if(this.usuario.Id != this.doacao.Usuario.Id)
            this.getCandidature(this.usuario.Id, this.doacao.Id);
    }

    openCandidateSelectModal() {
        let modal = this.modalCtrl.create(CandidateModal, {
            usuario: this.usuario,
            doacao: this.doacao
        });
        modal.onDidDismiss(candidate => {
            console.log(candidate);
        });
        modal.present();
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
                handler: res => {
                    this.sendCandidature(this.doacao, this.usuario, res.reason);
                },
                cssClass: 'secondary'
            }]
        });
        alert.present();
    }

    openCancelCandidatureAlert(candidatura) {
        let alert = this.alertCtrl.create({
            title: 'Cancel Candidature',
            subTitle: `
                Are you shure to cancel your candidature?
                <p>${this.candidatura.Motivo}</p>
            `,
            buttons: [{
                text: 'Cancel',
                role: 'cancel'
            }, {
                text: 'Confirm',
                handler: () => {
                    this.removeCandidature(this.candidatura);
                }
            }]
        })
    }

    removeCandidature(candidature) {
        this.service
            .delete("solicitacoes-adocao", candidature.Id)
            .subscribe(res => {
                this.toast.show("Solicitação cancelada com sucesso.");
                this.candidatura = null;
            });
    }

    getCandidature(usuario?: number, doacao?: number) {
        this.service
            .get("solicitacoes-adocao", { 
                doacao: doacao || 0, 
                usuario: usuario || 0,
                status: "PENDENTE"
            })
            .subscribe(res => {
                this.candidatura = (res as Array<Candidatura>).length ? res[0] : null;
            });
    }

    sendCandidature(donate, user, reason) {
        this.service.post(
            "solicitacoes-adocao",
            new Candidatura(
                this.doacao,
                this.usuarioService.usuario,
                reason
            )
        ).subscribe(res => 
            this.toast.show("Solicitação de adoção enviada com sucesso.")
        );
    }
}