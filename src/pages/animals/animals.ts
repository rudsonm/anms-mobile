import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnimalPage } from './animal/animal';
import { RestService } from '../../app/services/rest.service';
import { UsuarioService } from '../../app/services/usuario.service';


@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {
  public animalPage = AnimalPage;
  public doacoes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: RestService
  ) { }

  ionViewCanEnter() {
    this.getDoacoes();
  }

  getDoacoes() {
    this.service.get("doacoes", {
      status: "EM_ANDAMENTO"
    }).subscribe(res =>
      this.doacoes = res
    );
  }  

}