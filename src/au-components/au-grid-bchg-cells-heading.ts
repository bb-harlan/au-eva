import {customElement, bindable, inject} from 'aurelia-framework';
// import {FaeSide} from 'app-data/models/fae-side';
import {App} from 'app';

@customElement('au-grid-bchg-cells-heading')
@inject(App)
export class AuGridBchgCellsHeading {
  app = null;
  @bindable faeSide: string;

  constructor(app) {
    this.app = app;
  }
}
