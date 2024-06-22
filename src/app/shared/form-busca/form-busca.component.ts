import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from 'src/app/core/services/form-busca/form-busca.service';
import { UnidadesFederativasService } from 'src/app/core/services/estados/unidades-federativas.service';
import { States } from 'src/app/core/types/type';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit {

  public states!: Array<States>;

  constructor(public dialog: MatDialog, public formGroupService: FormBuscaService, private readonly _statesService: UnidadesFederativasService) { }

  ngOnInit(): void {
    this.getStates();
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }

  private getStates(): void {
    this._statesService.getStates().subscribe((resp) => {
      this.states = resp;
    })
  }
}
