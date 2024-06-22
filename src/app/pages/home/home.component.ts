import { Component, OnInit, inject } from '@angular/core';
import { UnidadesFederativasService } from 'src/app/core/services/estados/unidades-federativas.service';
import { PromotionService } from 'src/app/core/services/promotions/promotion.service';
import { Promotions, States } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public promotions!: Array<Promotions>;

  private readonly _promotionService = inject(PromotionService);

  ngOnInit(): void {
    this.getPromotions();
  }

  public getPromotions(): void {
    this._promotionService.getPromotions().subscribe((resp) => {
      this.promotions = resp;
    })
  }
}
