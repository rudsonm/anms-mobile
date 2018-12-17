import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../../models/usuario";
import { AuthService } from "./auth.service";
import { RestService } from "./rest.service";

@Injectable()
export class UsuarioService {
    private url = "localhost:23456/api/usuarios";
    private _usuario: Usuario;

    constructor(
        private http: HttpClient, 
        private authService: AuthService, 
        private restService: RestService
    ) { }

    get usuario() {
        return this._usuario;
    }

    login(email:string, senha:string) {
        return new Promise((resolve, reject) => {
            this.authService
            .autenticar(email, senha)
            .subscribe(
                res => {
                    this.restService.addHeader(
                        'Authentication', 
                        (res as any).token_type.concat(" ").concat((res as any).access_token)
                    );
                    this.restService.get("usuarios", {
                        email: email,
                        senha: senha
                    }).subscribe(res => 
                        this._usuario = res[0]
                    );
                    resolve(res);
                },
                err => {
                    reject(err);
                }
            );
        });
    }

    logout() {

    }
}