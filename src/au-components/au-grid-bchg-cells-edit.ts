import {customElement, bindable, inject} from 'aurelia-framework';
import {Bchg} from 'app-data/models/bchg';
import {App} from 'app';

@customElement('au-grid-bchg-cells-edit')
@inject(App)
export class AuGridBchgCells { app = null;
  viewmodelPopupAcctPicker; // <au-popup-acct-picker view-model.ref="viewmodelPopupAcctPicker></au-popup-bchg-mover>
  @bindable bchg: Bchg;

  constructor(app) {
    this.app = app;
  }
 inputCurrencyCompleted(newBchgAmt: number) {
    console.log(`In inputCurrencyCompleted - newBchgAmt: ${newBchgAmt};`);
    this.bchg.amt = newBchgAmt;
    this.bchg.sourceTran.refresh();
  }
}
