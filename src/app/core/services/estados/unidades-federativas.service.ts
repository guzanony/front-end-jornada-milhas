import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { States } from '../../types/type';

@Injectable({
  providedIn: 'root'
})
export class UnidadesFederativasService {

  private readonly apiUrl = environment.apiUrl;
  private statesCache?: Observable<Array<States>>;

  private readonly _httpClient = inject(HttpClient);

  public getStates(): Observable<Array<States>> {
    if (!this.statesCache) {
      this.statesCache = this._httpClient.get<Array<States>>(`${this.apiUrl}/estados`).pipe(shareReplay(1));
    }
    return this.statesCache;
  }
}
