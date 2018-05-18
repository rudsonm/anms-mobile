webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_service__ = __webpack_require__(50);
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toast_toast_controller__ = __webpack_require__(99);
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

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animals_animals__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_usuario_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__ = __webpack_require__(105);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Credentials\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="\n\n  background-image: url(\'http://1080x1920-1080p.backgroundwallpaper.pictures/pictures/1080p-cell-phone-wallpapers-hd-395.jpg\');\n\n  -webkit-background-size: cover;\n\n  -moz-background-size: cover;\n\n  -o-background-size: cover;\n\n  background-size: cover;\n\n">\n\n  <div style="color: white">\n\n    <div>\n\n      <ion-icon name="pet"></ion-icon>\n\n    </div>\n\n    <p>What about to adopt instead of buying?</p>\n\n    <p>Here you can find an animal friend to spend all days with you.</p>\n\n  </div>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div style="padding: 0.8rem 0">        \n\n        <button ion-button full icon-left float-right (click)="login(email, password)">\n\n          <ion-icon name="send"></ion-icon>\n\n          <div>Submit</div>\n\n        </button>\n\n      </div>\n\n    </ion-card-content>\n\n    <div>\n\n      <button ion-button float-left clear small>\n\n        Forgot Password\n\n      </button>\n\n      <button ion-button float-right clear small>\n\n        Create Account\n\n      </button>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_toast_service__["a" /* ToastService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animal_animal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_rest_service__ = __webpack_require__(50);
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
            selector: 'page-animals',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animals.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Animals</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar ></ion-searchbar>\n\n  <ion-card *ngFor="let doacao of doacoes">\n\n    <img src="{{ (doacao.Animal.Fotos.length) ? \'http://localhost:49664/api/fotos/\' + doacao.Animal.Fotos[0] : \'https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png\' }}"/>\n\n    <ion-card-header>\n\n      {{ doacao.Animal.Nome }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div>\n\n        <b>Specie: {{ doacao.Animal.Especie }}</b>\n\n      </div>      \n\n      <div>\n\n        <b>Age: {{ doacao.Animal.DataNascimento | age }} years</b>\n\n      </div>\n\n      <div>\n\n        <b>About: {{ doacao.Animal.Descricao }}</b>\n\n      </div>\n\n    </ion-card-content>\n\n    <button ion-button icon-start color="danger" full style="margin-bottom: 0" \n\n            [navPush]="animalPage" [navParams]="doacao">\n\n      <ion-icon name="heart"></ion-icon>\n\n      Adopt\n\n    </button>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab right bottom>\n\n  <button ion-fab color="secondary">\n\n      <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_rest_service__["a" /* RestService */]])
    ], AnimalsPage);
    return AnimalsPage;
}());

//# sourceMappingURL=animals.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_candidatura__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_rest_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_usuario_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__ = __webpack_require__(105);
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
    function AnimalPage(navCtrl, navParams, alertCtrl, service, usuarioService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.usuarioService = usuarioService;
        this.toast = toast;
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
            selector: 'app-animal',template:/*ion-inline-start:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animal\animal.html"*/'<style>\n\n    .img-slide {\n\n        width: 310px;\n\n        height: 310px;\n\n    }\n\n</style>\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{ doacao.Animal.Nome }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-slides no-padding lazyLoading style="height: auto">\n\n        <ion-slide *ngFor="let img of doacao.Animal.Fotos">\n\n            <img class="img-slide" src="{{\'http://localhost:49664/api/fotos/\' + img}}" alt="">\n\n        </ion-slide>\n\n    </ion-slides>\n\n    <ion-list>\n\n        <ion-item>\n\n            <b>Specie:</b> {{ doacao.Animal.Especie }}\n\n        </ion-item>\n\n        <ion-item>\n\n            <b>Age:</b> {{ doacao.Animal.DataNascimento | age }} years\n\n        </ion-item>\n\n        <ion-item>\n\n            <b>Weight:</b> {{ doacao.Animal.Peso }}kg\n\n        </ion-item>\n\n        <ion-item>\n\n            <b>About:</b> {{ doacao.Animal.Descricao }}\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n<ion-fab right bottom *ngIf="doacao.Usuario.Id !== usuario.Id">\n\n    <button ion-fab color="danger" (click)="openReasonAlert()">\n\n        <ion-icon name="heart"></ion-icon>\n\n    </button>\n\n</ion-fab>\n\n\n\n<ion-fab right bottom *ngIf="doacao.Usuario.Id === usuario.Id">\n\n    <button ion-fab color="primary"><ion-icon name="menu"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="secondary"><ion-icon name="people"></ion-icon></button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab color="danger" (click)="openDonationRemoveAlert()"><ion-icon name="trash"></ion-icon></button>\n\n    </ion-fab-list>\n\n</ion-fab>'/*ion-inline-end:"C:\Users\rudsonm\Git\anms-mobile\src\pages\animals\animal\animal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_toast_service__["a" /* ToastService */]])
    ], AnimalPage);
    return AnimalPage;
}());

//# sourceMappingURL=animal.js.map

/***/ }),

/***/ 203:
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_animals_animals__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_animals_animal_animal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_age_pipe__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_usuario_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_rest_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_loading_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_toast_service__ = __webpack_require__(105);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_animals_animals__["a" /* AnimalsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_animals_animal_animal__["a" /* AnimalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_age_pipe__["a" /* AgePipe */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_animals_animals__["a" /* AnimalsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_animals_animal_animal__["a" /* AnimalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_17__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_14__services_rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__services_usuario_service__["a" /* UsuarioService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
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

/***/ 283:
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__ = __webpack_require__(77);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
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


var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestService);
    return RestService;
}());

//# sourceMappingURL=rest.service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map