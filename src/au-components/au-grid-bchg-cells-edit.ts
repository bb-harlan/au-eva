import {customElement, bindable, inject} from 'aurelia-framework';
import {Bchg} from 'app-data/models/bchg';
import {App} from 'app';

@customElement('au-grid-bchg-cells-edit')
@inject(App)
export class AuGridBchgCells {
  app = null;
  @bindable bchg: Bchg;

  constructor(app) {
    this.app = app;
  }
}
