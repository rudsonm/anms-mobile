import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnimalPage } from './animal/animal';
import { RestService } from '../../app/services/rest.service';
import { UsuarioService } from '../../app/services/usuario.service';
import { DonatePage } from './donate/donate';


@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {
  public animalPage = AnimalPage;
  public donatePage = DonatePage;
  public doacoes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: RestService
  ) { }

  ionViewCanEnter() {
    this.obterDoacoes();
  }

  obterDoacoes(filtro?: any) {
    console.log(filtro);
    this.service.get("doacoes", {
      status: "EM_ANDAMENTO",
      animal_nome: filtro || ""
    }).subscribe(res =>
      this.doacoes = res
    );
  }  

}