import {customElement, bindable, inject, observable} from 'aurelia-framework';
import {Bchg} from 'app-data/models/bchg';
import {App} from 'app';

@customElement('au-grid-bchg-cells-edit')
@inject(App)
export class AuGridBchgCells {
  app = null;
  @bindable viewmodelPopupAcctPicker; // <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker></au-popup-bchg-mover>
  @bindable bchg: Bchg;
  @observable bchgAmt: number;

  constructor(app) {
    this.app = app;
  }
}
