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
    console.log("*** in pickAcct()")
    console.log(this.bchg);
    this.app.viewmodelPopupAcctPicker.open(this.bchg, this.acctPickerCallback)
  }
  acctPickerCallback(savedBchg: Bchg, pickedAcct: Acct) {
    console.log("*** in acctPickerCallback()")
    console.log(this.bchg);
    console.log(savedBchg);
    console.log(pickedAcct);
    savedBchg.targetAcct = pickedAcct;
  }
  inputCurrencyCompleted(newBchgAmt: number) {
    console.log(`(In inputCurrencyCompleted) newBchgAmt: ${newBchgAmt};`);
    this.bchg.amt = newBchgAmt;
    this.bchg.sourceTran.refresh();
  }
}
