import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { LoadingService } from "./loading.service";

@Injectable()
export class RestService {
    private url = "http://localhost:23456/api/";
    private headers: HttpHeaders;
    
    constructor(
        private http: HttpClient,
        private loading: LoadingService
        
    ) {
        this.headers = new HttpHeaders();        
    }

    addHeader(type: string, content: string) {
        this.headers = this.headers.append(type, content);
    }

    clearHeaders() {
        this.headers = new HttpHeaders();
    }

    get(route: string, params?: any) {
        return this.http.get(
            this.url.concat(route),
            {
                params: params,
                headers: this.headers
            }
        )
    }

    getOne(route: string, id: number) {
        return this.http.get(
            this.url.concat(route).concat("/").concat(id.toString()),
            { headers: this.headers }
        )
    }

    post(route: string, data: any) {
        return this.http.post(
            this.url.concat(route),
            data,
            { headers: this.headers }
        )
    }

    put(route: string, data: any) {
        return this.http.put(
            this.url.concat(route).concat("/").concat(data.Id || data.id),
            data,
            { headers: this.headers }
        )
    }

    delete(route: string, id: number) {
        return this.http.delete(
            this.url.concat(route).concat("/").concat(id.toString()),
            { headers: this.headers }
        )
    }
}