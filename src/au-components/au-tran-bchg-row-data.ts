import {customElement, bindable, inject} from 'aurelia-framework';
import {App} from 'app';
import {AuTranBchgAcctPicker} from 'au-components/au-tran-bchg-acct-picker';
import {Bchg} from 'app-data/models/bchg';

@customElement('au-tran-bchg-row-data')
@inject(App, AuTranBchgAcctPicker)
export class TranBchg {
  app = null;
  auTranBchgAcctPicker = null;
  @bindable bchg: Bchg;

  constructor(app, auTranBchgAcctPicker) {
    this.app = app;
    this.auTranBchgAcctPicker = auTranBchgAcctPicker;
  }

  onInputCurrencyCompleted(event) {
    this.bchg.amt = event.detail.newCurrencyAmount;
    this.bchg.sourceTran.refresh();
  }
}


