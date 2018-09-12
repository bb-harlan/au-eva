import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {Bchg} from 'app-data/models//bchg';

@customElement('au-tran-bchg-row-data')
@inject(App)
export class TranBchg {
  app = null;
  @bindable bchg: Bchg;

  constructor(app) {
    this.app = app;
  }

  onInputCurrencyCompleted(event) {
    this.bchg.amt = event.detail.newCurrencyAmount;
    this.bchg.sourceTran.refresh();
  }
}


