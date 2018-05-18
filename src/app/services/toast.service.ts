import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular/components/toast/toast-controller";

@Injectable()
export class ToastService {
    private duration: number = 3500;
    private position: string = 'bottom';
    constructor(private toastCtrl: ToastController) {

    }

    public show(message: string, position?: string) {
        this.toastCtrl.create({
            message: message,
            duration: this.duration,
            position: this.position,
            showCloseButton: true
        }).present();
    }
}