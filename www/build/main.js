webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animals_animals__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_usuario_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, service, toast) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.toast = toast;
    }
    HomePage.prototype.login = function (email, password) {
        var _this = this;
        this.service
            .login(email, password)
            .then(function (res) {
            _this.email = _this.password = "";
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__animals_animals__["a" /* AnimalsPage */]);
        }, function (err) {
            _this.toast.show(err.error.error_description);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Credentials\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="\n\n  opacity: 0.9;\n\n  background-image: url(\'../../assets/imgs/cat-background.jpg\');\n\n  -webkit-background-size: cover;\n\n  -moz-background-size: cover;\n\n  -o-background-size: cover;\n\n  background-size: cover;\n\n">\n\n\n\n  <div style="\n\n      color: white;\n\n      text-align: center; \n\n      text-shadow: 2px 0 0 black; \n\n      margin: 15% 0 10%;\n\n      padding: 0 0.5rem 0 0.5rem;\n\n      ">\n\n    <div style="font-size: 5rem">\n\n      <ion-icon name="paw"></ion-icon>\n\n    </div>\n\n    <div>\n\n      <h5>What about to adopt instead of buying?</h5>\n\n      <i>Here you can find an animal friend to share <br> all the good moments with you.</i>\n\n    </div>\n\n  </div>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div style="padding: 0.8rem 0">        \n\n        <button ion-button full icon-left float-right (click)="login(email, password)">\n\n          <ion-icon name="send"></ion-icon>\n\n          <div>Submit</div>\n\n        </button>\n\n      </div>\n\n    </ion-card-content>\n\n    <div>\n\n      <button ion-button float-left clear small>\n\n        Forgot Password\n\n      </button>\n\n      <button ion-button float-right clear small>\n\n        Create Account\n\n      </button>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__["a" /* ToastService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animal_animal__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_rest_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__donate_donate__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnimalsPage = /** @class */ (function () {
    function AnimalsPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.animalPage = __WEBPACK_IMPORTED_MODULE_2__animal_animal__["a" /* AnimalPage */];
        this.donatePage = __WEBPACK_IMPORTED_MODULE_4__donate_donate__["a" /* DonatePage */];
    }
    AnimalsPage.prototype.ionViewCanEnter = function () {
        this.getDoacoes();
    };
    AnimalsPage.prototype.getDoacoes = function () {
        var _this = this;
        this.service.get("doacoes", {
            status: "EM_ANDAMENTO"
        }).subscribe(function (res) {
            return _this.doacoes = res;
        });
    };
    AnimalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-animals',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animals.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Animals</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n  <ion-searchbar></ion-searchbar>\n\n  \n\n  <ion-card *ngFor="let doacao of doacoes">\n\n    <img src="{{ (doacao.Animal.Fotos.length) ? \'http://localhost:49664/api/fotos/\' + doacao.Animal.Fotos[0] : \'https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png\' }}"/>\n\n    <ion-card-header>\n\n      {{ doacao.Animal.Nome }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div>\n\n        <b>Specie: {{ doacao.Animal.Especie }}</b>\n\n      </div>      \n\n      <div>\n\n        <b>Age: {{ doacao.Animal.DataNascimento | age }} years</b>\n\n      </div>\n\n      <div>\n\n        <b>About: {{ doacao.Animal.Descricao }}</b>\n\n      </div>\n\n    </ion-card-content>\n\n    <button ion-button icon-start color="danger" full style="margin-bottom: 0" \n\n            [navPush]="animalPage" [navParams]="doacao">\n\n      <ion-icon name="heart"></ion-icon>\n\n      Adopt\n\n    </button>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab right bottom>\n\n  <button ion-fab color="secondary" [navPush]="donatePage">\n\n      <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_rest_service__["a" /* RestService */]])
    ], AnimalsPage);
    return AnimalsPage;
}());

//# sourceMappingURL=animals.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_candidatura__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_rest_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_usuario_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__candidate_candidate__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AnimalPage = /** @class */ (function () {
    function AnimalPage(navCtrl, navParams, alertCtrl, service, usuarioService, toast, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.usuarioService = usuarioService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.usuario = usuarioService.usuario;
        this.doacao = navParams.data;
    }
    AnimalPage.prototype.removeDonation = function () {
        var _this = this;
        this.doacao.Status = "CANCELADO";
        this.service
            .put("doacoes", this.doacao)
            .subscribe(function (res) {
            _this.navCtrl.pop();
        });
    };
    AnimalPage.prototype.openCandidateSelectModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__candidate_candidate__["a" /* CandidateModal */], {
            usuario: this.usuario,
            doacao: this.doacao
        });
        modal.onDidDismiss(function (candidate) {
            console.log(candidate);
        });
        modal.present();
    };
    AnimalPage.prototype.openDonationRemoveAlert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete Donation',
            message: 'Are you shure to remove the donation of '.concat(this.doacao.Animal.Nome).concat('?'),
            buttons: [
                { text: 'Disagree' },
                {
                    text: 'Agree',
                    handler: function () { return _this.removeDonation(); }
                }
            ]
        });
        confirm.present();
    };
    AnimalPage.prototype.openReasonAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (reason) {
                        _this.service.post("solicitacoes-adocao", new __WEBPACK_IMPORTED_MODULE_3__models_candidatura__["a" /* Candidatura */](_this.doacao, _this.usuarioService.usuario, reason)).subscribe(function (res) {
                            return _this.toast.show("Candidatura enviada com sucesso.");
                        });
                    },
                    cssClass: 'secondary'
                }]
        });
        alert.present();
    };
    AnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-animal',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animal\animal.html"*/'<style>\n\n    .img-slide {\n\n        width: 310px;\n\n        height: 310px;\n\n    }\n\n</style>\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{ doacao.Animal.Nome }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-slides no-padding lazyLoading style="height: auto">\n\n        <ion-slide *ngFor="let img of doacao.Animal.Fotos">\n\n            <img class="img-slide" src="{{\'http://localhost:49664/api/fotos/\' + img}}" alt="">\n\n        </ion-slide>\n\n    </ion-slides>\n\n    <ion-list>\n\n        <ion-item>\n\n            <b>Specie:</b> {{ doacao.Animal.Especie }}\n\n        </ion-item>\n\n        <ion-item>\n\n            <b>Age:</b> {{ doacao.Animal.DataNascimento | age }} years\n\n        </ion-item>\n\n        <ion-item>\n\n            <b>Weight:</b> {{ doacao.Animal.Peso }}kg\n\n        </ion-item>\n\n        <ion-item>\n\n            <b>About:</b> {{ doacao.Animal.Descricao }}\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n<ion-fab right bottom *ngIf="doacao.Usuario.Id !== usuario.Id">\n\n    <button ion-fab color="danger" (click)="openReasonAlert()">\n\n        <ion-icon name="heart"></ion-icon>\n\n    </button>\n\n</ion-fab>\n\n\n\n<ion-fab right bottom *ngIf="doacao.Usuario.Id === usuario.Id">\n\n    <button ion-fab color="primary">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="secondary" (click)="openCandidateSelectModal()">\n\n          <ion-icon name="people"></ion-icon>\n\n        </button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab color="danger" (click)="openDonationRemoveAlert()">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n    </ion-fab-list>\n\n</ion-fab>'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animal\animal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], AnimalPage);
    return AnimalPage;
}());

//# sourceMappingURL=animal.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.autenticar = function (email, senha) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://localhost:49664/api/usuarios/autenticar", this.httpParamSerializerJQLike({
            grant_type: 'password',
            username: email,
            password: senha
        }), { headers: headers });
    };
    AuthService.prototype.httpParamSerializerJQLike = function (data) {
        var returnData = '';
        for (var i in data)
            returnData += '&' + i + '=' + data[i];
        return returnData.slice(1);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_rest_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandidateModal = /** @class */ (function () {
    function CandidateModal(viewCtrl, navParams, restService, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.user = navParams.get("usuario");
        this.donate = navParams.get("doacao");
        this.getCandidatures(this.donate);
    }
    CandidateModal.prototype.getCandidatures = function (donate) {
        var _this = this;
        this.restService
            .get("solicitacoes-adocao", { doacao: donate.Id, status: "PENDENTE" })
            .subscribe(function (res) {
            _this.candidatures = res;
        });
    };
    CandidateModal.prototype.dismiss = function (candidate) {
        this.viewCtrl.dismiss(candidate || null);
    };
    CandidateModal.prototype.openCandidateConfirmAlert = function (candidate) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm Candidate',
            message: 'Are you shure to select '
                .concat(candidate.Usuario.Nome)
                .concat(' to adopt ')
                .concat(this.donate.Animal.Nome)
                .concat('?'),
            buttons: [
                { text: 'Disagree' },
                {
                    text: 'Agree',
                    handler: function () { return _this.dismiss(candidate); }
                }
            ]
        });
        confirm.present();
    };
    CandidateModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-candidate-modal',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\candidate\candidate.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Select a candidate for {{ donate.Animal.Nome }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n    <ion-list>\n\n        <ion-item *ngFor="let candidate of candidatures" (click)="openCandidateConfirmAlert(candidate)">\n\n            <ion-avatar item-start>\n\n                <img src="http://c12.incisozluk.com.tr/res/incisozluk//11508/2/1291882_o7dce.jpg">\n\n            </ion-avatar>\n\n            <ion-row>\n\n                <ion-col col-10>\n\n                    <h2>{{ candidate.Usuario.Nome }}</h2>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <p style="font-size: 1.2rem">{{ candidate.DataCadastro | date: \'dd/MM\' }}</p>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <p>{{ candidate.Motivo }}</p>\n\n            </ion-row>            \n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button full color="danger" (click)="dismiss()">\n\n        Close\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\candidate\candidate.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_rest_service__["a" /* RestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services_rest_service__["a" /* RestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], CandidateModal);
    return CandidateModal;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=candidate.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_doacao__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_usuario_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_animal__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_rest_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DonatePage = /** @class */ (function () {
    function DonatePage(navCtrl, usuarioService, service, toast, camera) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.service = service;
        this.toast = toast;
        this.camera = camera;
        this.doacao = new __WEBPACK_IMPORTED_MODULE_0__models_doacao__["a" /* Doacao */](usuarioService.usuario, new __WEBPACK_IMPORTED_MODULE_4__models_animal__["a" /* Animal */]());
    }
    DonatePage.prototype.sendDonate = function (donate) {
        var _this = this;
        this.service
            .post("doacoes", donate)
            .subscribe(function (res) {
            _this.toast.show("Donation saved successfully.");
            _this.navCtrl.pop();
        });
    };
    DonatePage.prototype.openGallery = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
        this.camera
            .getPicture(options)
            .then(function (data) {
            console.log(data);
        });
    };
    DonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-donate',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\donate\donate.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Donate</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Pet Info\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label stacked>Name</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="doacao.Animal.Nome"></ion-input>\n\n                </ion-item>\n\n                \n\n                <ion-item>\n\n                    <ion-label stacked>Class</ion-label>\n\n                    <ion-select [(ngModel)]="doacao.Animal.Filo">\n\n                        <ion-option value="MAMIFERO">Mammal</ion-option>\n\n                        <ion-option value="AVE">Bird</ion-option>\n\n                        <ion-option value="PEIXE">Fish</ion-option>\n\n                        <ion-option value="REPTIL">Reptile</ion-option>\n\n                        <ion-option value="INVERTEBRADO">Amphibian</ion-option>\n\n                        <ion-option value="ARTROPODE">Arthropod</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n            \n\n                <ion-item>\n\n                    <ion-label stacked>Specie</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="doacao.Animal.Especie"></ion-input>\n\n                </ion-item>\n\n                \n\n                <ion-item>\n\n                    <ion-label stacked>Date of birth</ion-label>\n\n                    <ion-input type="date" [(ngModel)]="doacao.Animal.DataNascimento"></ion-input>\n\n                </ion-item>\n\n            \n\n                <ion-item>\n\n                    <ion-label stacked>Weight</ion-label>\n\n                    <ion-input type="number" [(ngModel)]="doacao.Animal.Peso"></ion-input>\n\n                </ion-item>\n\n            \n\n                <ion-item>\n\n                    <ion-label stacked>About</ion-label>\n\n                    <ion-textarea [(ngModel)]="doacao.Animal.Descricao"></ion-textarea>\n\n                </ion-item>                \n\n            </ion-list>\n\n            <button ion-button icon-left full (click)="openGallery()">\n\n                <ion-icon name="images"></ion-icon>\n\n                Photos\n\n            </button>\n\n        </ion-card-content>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button full color="danger" navPop>Cancel</button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button full color="secondary" (click)="sendDonate(doacao)">Confirm</button>\n\n                </ion-col>\n\n            </ion-row>            \n\n        </ion-grid>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\donate\donate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]])
    ], DonatePage);
    return DonatePage;
}());

//# sourceMappingURL=donate.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_animals_animals__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_animals_animal_animal__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_age_pipe__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_usuario_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_rest_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_loading_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_animals_donate_donate__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_animals_candidate_candidate__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_animals_animals__["a" /* AnimalsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_animals_animal_animal__["a" /* AnimalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_animals_donate_donate__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_age_pipe__["a" /* AgePipe */],
                __WEBPACK_IMPORTED_MODULE_20__pages_animals_candidate_candidate__["a" /* CandidateModal */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_animals_animals__["a" /* AnimalsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_animals_animal_animal__["a" /* AnimalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_animals_donate_donate__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_animals_candidate_candidate__["a" /* CandidateModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_18__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_15__services_rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_usuario_service__["a" /* UsuarioService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candidatura; });
var Candidatura = /** @class */ (function () {
    function Candidatura(Doacao, Usuario, Motivo) {
        this.Doacao = Doacao;
        this.Usuario = Usuario;
        this.Motivo = Motivo;
    }
    return Candidatura;
}());

//# sourceMappingURL=candidatura.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doacao; });
var Doacao = /** @class */ (function () {
    function Doacao(Usuario, Animal, Status, DataExpiracao, DataCadastro, DataExclusao, Id, Ativo) {
        this.Usuario = Usuario;
        this.Animal = Animal;
        this.Status = Status;
        this.DataExpiracao = DataExpiracao;
        this.DataCadastro = DataCadastro;
        this.DataExclusao = DataExclusao;
        this.Id = Id;
        this.Ativo = Ativo;
    }
    return Doacao;
}());

//# sourceMappingURL=doacao.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animal; });
var Animal = /** @class */ (function () {
    function Animal(Nome, Especie, Descricao, Id, Ativo, Filo, DataNascimento, Peso, Fotos, DataCadastro, DataModificacao, DataExclusao) {
        this.Nome = Nome;
        this.Especie = Especie;
        this.Descricao = Descricao;
        this.Id = Id;
        this.Ativo = Ativo;
        this.Filo = Filo;
        this.DataNascimento = DataNascimento;
        this.Peso = Peso;
        this.Fotos = Fotos;
        this.DataCadastro = DataCadastro;
        this.DataModificacao = DataModificacao;
        this.DataExclusao = DataExclusao;
    }
    return Animal;
}());

//# sourceMappingURL=animal.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AgePipe = /** @class */ (function () {
    function AgePipe() {
    }
    AgePipe.prototype.transform = function (value) {
        value = new Date(value);
        var today = new Date();
        var age = today.getFullYear() - value.getFullYear();
        if (today.getMonth() < value.getMonth())
            age--;
        else if (today.getMonth() == value.getMonth() && today.getDay() < value.getDay())
            age--;
        return age;
    };
    AgePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'age' })
    ], AgePipe);
    return AgePipe;
}());

//# sourceMappingURL=age.pipe.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.active = false;
    }
    LoadingService.prototype.present = function (message) {
        if (this.active)
            return;
        this.loading = this.loadingCtrl.create({
            content: message || "Please wait...",
            spinner: 'crescent'
        });
        this.active = true;
        this.loading.present();
    };
    LoadingService.prototype.dismiss = function () {
        this.active = false;
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" && _a || Object])
    ], LoadingService);
    return LoadingService;
    var _a;
}());

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestService = /** @class */ (function () {
    function RestService(http, loading) {
        this.http = http;
        this.loading = loading;
        this.url = "http://localhost:49664/api/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
    }
    RestService.prototype.addHeader = function (type, content) {
        this.headers = this.headers.append(type, content);
    };
    RestService.prototype.clearHeaders = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
    };
    RestService.prototype.get = function (route, params) {
        return this.http.get(this.url.concat(route), {
            params: params,
            headers: this.headers
        });
    };
    RestService.prototype.getOne = function (route, id) {
        return this.http.get(this.url.concat(route).concat("/").concat(id.toString()), { headers: this.headers });
    };
    RestService.prototype.post = function (route, data) {
        return this.http.post(this.url.concat(route), data, { headers: this.headers });
    };
    RestService.prototype.put = function (route, data) {
        return this.http.put(this.url.concat(route).concat("/").concat(data.Id || data.id), data, { headers: this.headers });
    };
    RestService.prototype.delete = function (route, id) {
        return this.http.delete(this.url.concat(route).concat("/").concat(id.toString()), { headers: this.headers });
    };
    RestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]) === "function" && _b || Object])
    ], RestService);
    return RestService;
    var _a, _b;
}());

//# sourceMappingURL=rest.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http, authService, restService) {
        this.http = http;
        this.authService = authService;
        this.restService = restService;
        this.url = "localhost:49664/api/usuarios";
    }
    Object.defineProperty(UsuarioService.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioService.prototype.login = function (email, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService
                .autenticar(email, senha)
                .subscribe(function (res) {
                _this.restService.addHeader('Authentication', res.token_type.concat(" ").concat(res.access_token));
                _this.restService.get("usuarios", {
                    email: email,
                    senha: senha
                }).subscribe(function (res) {
                    return _this._usuario = res[0];
                });
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsuarioService.prototype.logout = function () {
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__rest_service__["a" /* RestService */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toast_toast_controller__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.duration = 3500;
        this.position = 'bottom';
    }
    ToastService.prototype.show = function (message, position) {
        this.toastCtrl.create({
            message: message,
            duration: this.duration,
            position: this.position,
            showCloseButton: true
        }).present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map