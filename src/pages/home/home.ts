import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AnimalsPage } from '../animals/animals';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {    
  }

  authenticate(email:string, password:string) {
    this.navCtrl.push(AnimalsPage);
  }

}
