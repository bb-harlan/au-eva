import {customElement, bindable, inject} from 'aurelia-framework';
// import {FaeSide} from 'app-data/models/fae-side';
import {App} from 'app';
import {AuModuleTran} from 'au-components/au-module-tran';

@customElement('au-grid-bchg-cells-total')
@inject(App, AuModuleTran)
export class AuGridBchgCellsTotal {
  app = null;
  auModuleTran = null;
  @bindable faeSide: string;
  @bindable sideTotalChanges: number;

  constructor(app, auModuleTran) {
    this.app = app;
    this.auModuleTran = auModuleTran;
  }
}
