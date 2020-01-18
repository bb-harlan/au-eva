import {customElement, bindable, inject} from 'aurelia-framework';
import {Bchg} from 'app-data/models/bchg';
import {App} from 'app';

@customElement('au-grid-bchg-cells-edit')
@inject(App)
export class AuGridBchgCells {

  /*injected stuff*/
  app = null;

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
