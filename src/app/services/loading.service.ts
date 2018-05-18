import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { Loading } from "ionic-angular/components/loading/loading";

@Injectable()
export class LoadingService {
    private loading: Loading;
    private active: boolean;
    constructor(private loadingCtrl: LoadingController) {
        this.active = false;
    }

    present(message?: string) {
        if(this.active) 
            return;
            
        this.loading = this.loadingCtrl.create({
            content: message || "Please wait...",
            spinner: 'crescent'
        });
        this.active = true;
        this.loading.present();        
    }

    dismiss() {
        this.active = false;
        this.loading.dismiss();
    }
}