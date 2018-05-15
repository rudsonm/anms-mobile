import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnimalPage } from './animal/animal';
import { Animal } from '../../models/animal';

@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {
  animalPage = AnimalPage;
  animals: Array<Animal>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animals = [
      new Animal('Tobias', 'Dog', 'It is not a dog'),
      new Animal('Biri the penguim', 'Penguim', 'It is just a penguimm')
    ];
  }

}