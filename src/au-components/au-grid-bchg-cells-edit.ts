import {customElement, bindable, inject} from 'aurelia-framework';
import {Bchg} from 'app-data/models/bchg';
import {Acct} from 'app-data/models/acct';
import {App} from 'app';
import {AuModuleTran} from './au-module-tran';

@customElement('au-grid-bchg-cells-edit')
@inject(App, AuModuleTran)
export class AuGridBchgCells {

  /*injected stuff*/
  app = null;
  auModuleTran = null;

  @bindable bchg: Bchg;

  constructor(app, auModuleTran) {
    this.app = app;
    this.auModuleTran = auModuleTran;
  }
  pickAcct() {
    this.app.viewmodelPopupAcctPicker.open(this.bchg, this.pickAcctDone)
  }
  pickAcctDone(savedBchg: Bchg, pickedAcct: Acct) {
    savedBchg.targetAcct = pickedAcct;
    savedBchg.sourceTran.refresh();
  }
  inputCurrencyCompleted(newBchgAmt: number) {
    console.log(`(In inputCurrencyCompleted) newBchgAmt: ${newBchgAmt};`);
    this.bchg.amt = newBchgAmt;
    this.bchg.sourceTran.refresh();
  }
}
