import { Component, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/core/services/depoimentos/depoimentos-service.service';
import { Depoimentos } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent implements OnInit {

  public depoimentos: Array<Depoimentos> = new Array<Depoimentos>;

  constructor(private readonly _depoimentosService: DepoimentosService) { }

  ngOnInit(): void {
    this.getDepoimentos();
  }

  private getDepoimentos(): void {
    this._depoimentosService.getDepoimentos().subscribe((resp) => {
      this.depoimentos = resp;
    })
  }
}
