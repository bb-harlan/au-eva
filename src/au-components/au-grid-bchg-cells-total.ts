import {customElement, bindable, inject} from 'aurelia-framework';
// import {FaeSide} from 'app-data/models/fae-side';
import {App} from 'app';

@customElement('au-grid-bchg-cells-total')
@inject(App)
export class AuGridBchgCellsTotal {
  app = null;
  @bindable faeSide: string;
  @bindable sideTotalChanges: number;

  constructor(app) {
    this.app = app;
  }
}
