import { Component } from "@angular/core";
import { ViewController, NavParams, AlertCmp, AlertController } from "ionic-angular";
import { Candidatura } from "../../../models/candidatura";
import { Usuario } from "../../../models/usuario";
import { Doacao } from "../../../models/doacao";
import { RestService } from "../../../app/services/rest.service";

@Component({
    selector: 'app-candidate-modal',
    templateUrl: 'candidate.html'
})
export class CandidateModal {
    private user: Usuario;
    private donate: Doacao;
    private candidatures: Candidatura[];
    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams,
        private restService: RestService,
        private alertCtrl: AlertController
    ) {
        this.user = navParams.get("usuario");
        this.donate = navParams.get("doacao");
        this.getCandidatures(this.donate);
    }

    getCandidatures(donate: Doacao) {
        this.restService
            .get("solicitacoes-adocao", { doacao: donate.Id, status: "PENDENTE" })
            .subscribe(res => {
                this.candidatures = (res as Array<Candidatura>);

                if(!this.candidatures.length)
                    this.dismiss()
            });
    }

    dismiss(candidate?: Candidatura) {
        this.viewCtrl.dismiss(candidate || null);
    }

    openCandidateConfirmAlert(candidate: Candidatura) {
        let confirm = this.alertCtrl.create({
            title: 'Confirm Candidate',
            message: 'Are you shure to select '.concat(
                candidate.Usuario.Nome,
                ' to adopt ',
                this.donate.Animal.Nome,
                '?'
            ),
            buttons: [
                { text: 'Disagree' },
                { 
                    text: 'Agree',
                    handler: () => this.dismiss(candidate)
                }
            ]
        });
        confirm.present();
    }
}