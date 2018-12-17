import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {

    }

    autenticar(email: string, senha: string) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(
            "http://localhost:23456/api/usuarios/autenticar",
            this.httpParamSerializerJQLike({
                grant_type: 'password',
                username: email,
                password: senha
            }),
            { headers: headers }
        );
    }

    private httpParamSerializerJQLike(data){
        let returnData = '';
        for (let i in data)
            returnData += '&' + i + '=' + data[i];        
        return returnData.slice(1);
    }
}