import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  url_API = 'https://viacep.com.br/ws/';

  constructor(private readonly http: HttpClient) { }

  getConsultaCEP(cep: string) {
    return this.http.get(`${this.url_API}${cep}/json`);
  }

}
