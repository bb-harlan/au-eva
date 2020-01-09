import {customElement, bindable, inject} from 'aurelia-framework';
import {Bchg} from 'app-data/models/bchg';
import {App} from 'app';

@customElement('au-grid-bchg-cells-edit')
@inject(App)
export class AuGridBchgCells {
  app = null;
  @bindable viewmodelPopupAcctPicker; // <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker></au-popup-bchg-mover>
  @bindable proxyForPickerPositionTop: HTMLElement; // <div element.ref="proxyForPickerPositionTop" ...
  @bindable bchg: Bchg;

  constructor(app) {
    this.app = app;
  }
}
