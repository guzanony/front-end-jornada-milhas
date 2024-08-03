import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depoimentos } from '../../types/type';

@Injectable({
  providedIn: 'root'
})
export class DepoimentosService {

  private urlApi: string = 'http://localhost:8080/depoimentos';

  constructor(private readonly _httpCliente: HttpClient) { }

  public getDepoimentos(): Observable<Array<Depoimentos>> {
    return this._httpCliente.get<Array<Depoimentos>>(this.urlApi);
  }
}
