import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotions } from '../../types/type';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private apiUrl: string = environment.apiUrl;

  private readonly _httpClient = inject(HttpClient);

  public getPromotions(): Observable<Array<Promotions>> {
    return this._httpClient.get<Array<Promotions>>(`${this.apiUrl}/promocoes`);
  }
}
