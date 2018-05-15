import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Animal } from "../../../models/animal";

@Component({
    selector: 'app-animal',
    templateUrl: 'animal.html'
})
export class AnimalPage {
    animal:Animal;
    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.animal = navParams.data;
    }
}