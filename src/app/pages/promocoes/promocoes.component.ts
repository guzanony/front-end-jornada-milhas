import { Component, OnInit, inject } from '@angular/core';
import { PromotionService } from 'src/app/core/services/promotions/promotion.service';
import { Promotions } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {

  public promocoes!: Array<Promotions>;

  private readonly _promotionService = inject(PromotionService);

  ngOnInit(): void {
    this.getPromotions();
  }

  private getPromotions(): void {
    this._promotionService.getPromotions().subscribe((resp) => {
      this.promocoes = resp;
    })
  }


}
