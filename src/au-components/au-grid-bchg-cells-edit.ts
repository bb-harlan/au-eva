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
  onInputFocus(event, bchg) {
    this.app.candidateSelectedBchg = bchg;
  }
  pickAcct() {
    this.app.viewmodelPopupAcctPicker.open(this.bchg, this.callbackPickAcct)
  }
  callbackPickAcct(app: App, bchg: Bchg, pickedAcct: Acct) {
    bchg.targetAcct = null;
    alert();
    bchg.targetAcct = pickedAcct;
    bchg.sourceTran.refresh();
  }
  callbackUserChangedCurrencyAmt(newCurrencyAmt) {
    this.bchg.amt = newCurrencyAmt;
    this.bchg.sourceTran.refresh();
  }
}
