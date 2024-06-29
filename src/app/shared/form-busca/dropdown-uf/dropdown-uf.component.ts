import { UnidadesFederativasService } from './../../../core/services/estados/unidades-federativas.service';
import { Component, Input, OnInit } from '@angular/core';
import { States } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconePrefixo!: string;

  public filteredOptions = [];
  public UnidadesFederativas: Array<States> = new Array<States>;

  constructor(private readonly _unidadeFederativaService: UnidadesFederativasService) { }


  ngOnInit(): void {
    this.getUnidadesFederativas();
  }

  private getUnidadesFederativas(): void {
    this._unidadeFederativaService.getStates().subscribe((resp) => {
      this.UnidadesFederativas = resp;
    })
  }
}
